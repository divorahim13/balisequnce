'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ImageSequence({ 
  children, 
  id,
  frameCount = 361,
  framePath = (index: number) => `/images/hero${index.toString().padStart(3, '0')}.webp`,
  scrollEnd = "+=300%",
  onProgress,
  refreshPriority = 0
}: { 
  children?: React.ReactNode; 
  id?: string;
  frameCount?: number;
  framePath?: (index: number) => string;
  scrollEnd?: string;
  onProgress?: (progress: number) => void;
  refreshPriority?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const framePathRef = useRef(framePath);
  useEffect(() => {
    framePathRef.current = framePath;
  }, [framePath]);

  useEffect(() => {
    imagesRef.current = new Array(frameCount);
    let loadedCount = 0;
    setIsLoading(true);
    setProgress(0);

    const PRIORITY_COUNT = Math.min(30, frameCount);
    let priorityLoaded = 0;

    const loadNextBatch = (startIndex: number, batchSize: number) => {
      if (startIndex >= frameCount) return;
      
      let batchLoaded = 0;
      const endIndex = Math.min(startIndex + batchSize, frameCount);
      const currentBatchSize = endIndex - startIndex;

      for (let i = startIndex; i < endIndex; i++) {
        const img = new Image();
        img.src = framePathRef.current(i);
        
        const onComplete = () => {
          imagesRef.current[i] = img;
          loadedCount++;
          setProgress(Math.round((loadedCount / frameCount) * 100));
          
          if (i < PRIORITY_COUNT) {
            priorityLoaded++;
            if (priorityLoaded === PRIORITY_COUNT) {
              setIsLoading(false);
              // Priority done, start streaming the rest in small batches
              // We use batch size 10 to be even more conservative and stop choppiness
              loadNextBatch(PRIORITY_COUNT, 10);
            }
          } else {
            batchLoaded++;
            // When this entire batch finishes downloading, trigger the next batch
            if (batchLoaded === currentBatchSize) {
              loadNextBatch(endIndex, 10);
            }
          }
        };

        img.onload = onComplete;
        img.onerror = onComplete;
      }
    };

    // Kick off the priority load
    loadNextBatch(0, PRIORITY_COUNT);

  }, [frameCount]);

  useGSAP(() => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    // Track last rendered frame to skip redundant draws
    let lastRenderedFrame = -1;
    let rafId: number | null = null;
    let pendingFrame = 0;

    // Find the nearest loaded frame when the target frame isn't available yet
    const findNearestFrame = (targetIndex: number): HTMLImageElement | null => {
      const img = imagesRef.current[targetIndex];
      if (img) return img;

      // Search outward from target (prefer earlier frames for smooth feel)
      for (let offset = 1; offset < 30; offset++) {
        const before = targetIndex - offset;
        const after = targetIndex + offset;
        if (before >= 0 && imagesRef.current[before]) return imagesRef.current[before];
        if (after < frameCount && imagesRef.current[after]) return imagesRef.current[after];
      }
      return null;
    };

    const render = (index: number) => {
      // Skip if we already rendered this exact frame
      if (index === lastRenderedFrame) return;

      const img = findNearestFrame(index);
      if (!img) return;

      lastRenderedFrame = index;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }
      
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // rAF-based rendering: decouple GSAP tick from actual canvas paint
    const scheduleRender = (frame: number) => {
      pendingFrame = frame;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          rafId = null;
          render(pendingFrame);
        });
      }
    };

    render(0);

    const sequence = { frame: 0 };

    gsap.to(sequence, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: scrollEnd, 
        scrub: 1.2, // Smoother scrub: gives browser more breathing room for heavy frames
        pin: true,
        anticipatePin: 1,
        refreshPriority: refreshPriority || 0,
      },
      onUpdate: function() {
        scheduleRender(sequence.frame);
        if (onProgress) {
          onProgress(this.progress());
        }
      },
    });

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const handleResize = () => {
      updateCanvasSize();
      lastRenderedFrame = -1; // Force re-render on resize
      render(sequence.frame);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isLoading, scrollEnd, frameCount]);

  return (
    <section id={id} ref={containerRef} className="relative z-20 w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full bg-black"
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          {children}
        </div>
      </div>
      
      {isLoading && (
        <div className="absolute inset-0 z-[100] h-screen w-full flex flex-col items-center justify-center bg-[#050202] text-[#F3EBE6]">
          <div className="text-xl md:text-3xl font-bold tracking-tighter uppercase mb-2">
            BALI<span className="font-light text-white/50">ODYSSEY</span>
          </div>
          <div className="mb-12 text-[10px] font-bold tracking-[0.5em] uppercase text-[#D4A373]">
            Curating Experience
          </div>
          <div className="h-px w-64 md:w-96 bg-white/10 overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#D4A373] transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, (progress / (30/frameCount*100)) * 100)}%` }}
            />
          </div>
          <div className="mt-4 text-[10px] font-light tracking-widest text-[#F3EBE6]/40 uppercase">
            Preparing your journey
          </div>
        </div>
      )}
    </section>
  );
}
