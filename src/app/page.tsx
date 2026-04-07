'use client';

import { useRef, useState, useEffect } from "react";

const section3Data = [
  { title: "Ubud", subtitle: "Cultural heartbeats", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
  { title: "Nusa Penida", subtitle: "Cliffs & ocean", img: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=600&q=80" },
  { title: "Uluwatu", subtitle: "Majestic sunsets", img: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=600&q=80" },
  { title: "Seminyak", subtitle: "Luxury & lifestyle", img: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=600&q=80" },
  { title: "Mount Batur", subtitle: "Volcanic sunrise", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80" },
  { title: "Canggu", subtitle: "Surf & cafés", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80" },
  { title: "Amed", subtitle: "Black sand diving", img: "/images/amedbali.webp" },
  { title: "Kintamani", subtitle: "Highland breeze", img: "/images/kintamani.jpg" },
  { title: "Sanur", subtitle: "Golden morning light", img: "/images/sanur.jpg" },
  { title: "Nusa Lembongan", subtitle: "Crystal clear coves", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" },
  { title: "Lovina", subtitle: "Dolphin encounters", img: "/images/pantailovina.jpg" },
  { title: "Munduk", subtitle: "Hidden waterfalls", img: "/images/munduk.jpg" },
  { title: "Pemuteran", subtitle: "Coral re-wilding", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80" },
  { title: "Sidemen", subtitle: "Lush rice terraces", img: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=600&q=80" }
];
const section4Data = [
  { name: "Alila Villas Uluwatu", description: "Perched on limestone cliffs 100 meters above the Indian Ocean, offering unprecedented panoramic privacy.", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80" },
  { name: "Bamboo Eco-Lodge", description: "Seamlessly integrated into the lush jungle canopy of Ubud, where uncompromising luxury meets sustainability.", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" },
  { name: "Amankila Resort", description: "A secluded seaside retreat overlooking the Lombok Strait, featuring iconic, breathtaking three-tier infinity pools.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80" },
  { name: "Capella Ubud", description: "Refined tented camps nestled in the heart of the rainforest, echoing the spirit of 19th-century European explorers.", img: "/images/capellaubud.jpg" }
];

const section5Data = [
  {
    id: "01",
    theme: "The Wellness Path",
    title: "Spiritual Reset",
    desc: "A fluid, unhurried blueprint designed for deep rejuvenation. Your days are completely open, allowing you to wake up and decide what your soul needs in the moment. No alarms, no rush.",
    img: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?auto=format&fit=crop&w=1600&q=80",
    features: [
      { icon: "✧", activity: "Private helicopter transfers standing by on your absolute demand" },
      { icon: "✧", activity: "Unscheduled meditation sessions with a local high priest" },
      { icon: "✧", activity: "100% flexible plant-based dining whenever you feel hungry" },
      { icon: "✧", activity: "Stay as long as you want at any sacred site without being rushed" }
    ]
  },
  {
    id: "02",
    theme: "The Adrenaline Path",
    title: "Oceanic Serenity",
    desc: "A pure ocean adventure drafted as a blank canvas. Whether you want to dive at dawn or sleep until noon and sail at sunset, the luxury yacht is yours to command.",
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1600&q=80",
    features: [
      { icon: "✧", activity: "Exclusive yacht charter with no return time limits attached" },
      { icon: "✧", activity: "Spontaneous diving alongside Manta Rays depending on the current" },
      { icon: "✧", activity: "On-demand gourmet seafood prepared exactly when you request it" },
      { icon: "✧", activity: "Anchor at hidden islands guided solely by your mood of the day" }
    ]
  },
  {
    id: "03",
    theme: "The Epicurean Path",
    title: "Culinary Escapade",
    desc: "A gastronomic journey where your taste dictates the schedule. No fixed reservations, only spontaneous masterclasses and dining experiences tailored to your daily cravings.",
    img: "/images/mountbatur.jpg",
    features: [
      { icon: "✧", activity: "Wake up anytime to Mount Batur's finest premium coffee" },
      { icon: "✧", activity: "Spontaneous organic farm foraging based on the season" },
      { icon: "✧", activity: "Impromptu masterclasses with a personal Michelin-starred Chef" },
      { icon: "✧", activity: "Degustation menus customized entirely to your immediate dietary desires" }
    ]
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
];

const testimonials = [
  { text: "Bali Odyssey completely transformed how I travel. No schedules, no stress, just pure uninterrupted beauty and personalized luxury.", name: "Sarah L.", location: "New York" },
  { text: "Waking up in a bamboo villa, with a private helicopter waiting... Every detail was meticulously orchestrated behind the scenes.", name: "James M.", location: "London" },
  { text: "The anti-package tour approach is revolutionary. We changed our minds daily and our guide seamlessly adapted.", name: "Elaine T.", location: "Singapore" }
];

const faqs = [
  { question: "What is the best time to visit Bali?", answer: "Bali is a year-round destination, but the dry season from May to September offers the most pleasant weather with lower humidity." },
  { question: "Do you arrange visas and airport transfers?", answer: "Yes, our VIP service includes expedited visa-on-arrival handling, private tarmac transfers, and luxury transport to your sanctuary." },
  { question: "Can the itineraries be adjusted during the trip?", answer: "Absolutely. Our philosophy is rooted in flexibility. Your concierge is available 24/7 to pivot your plans based on your spontaneous desires." },
  { question: "Are children welcome at the exclusive resorts?", answer: "We curate trips for all types of travelers. While some sanctuaries are adults-only, we have pristine partnerships with ultra-luxury family eco-estates as well." }
];

const pricingPackages = [
  { name: "The Retreat", duration: "5 Days / 4 Nights", price: "Starts at $2,400", desc: "For those seeking deep spiritual restoration. Includes private jungle villa, daily therapeutic massages, and organic farm-to-table dining." },
  { name: "The Explorer", duration: "7 Days / 6 Nights", price: "Starts at $4,800", desc: "A blend of adrenaline and serenity. Helicopter transfer to Nusa Penida, private yacht day trip, and cliffside oceanfront accommodation." },
  { name: "The Ultimate Odyssey", duration: "10+ Days", price: "Custom quoted", desc: "A blank canvas with 24/7 dedicated concierge, private island access, Michelin-chef dinners, and absolutely zero compromises." }
];

const quoteText = "The true voyage of discovery consists not in seeking new landscapes, but in having new eyes.";
const quoteWords = quoteText.split(" ");

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import ImageSequence from "@/components/ImageSequence";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Coordinates mapped from reference Bali tourist map (900x660 px)
// Each left/top is percentage of the dots overlay div (which is 80% width, centered)
const mapLocations = [
  // Ubud (Red 2)
  { id: 'ubud', name: 'Ubud', left: '58%', top: '56%', bg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80', desc: "Cultural heartbeats and sacred temples." },
  // Uluwatu (Moved to red circle: further right, bottom edge)
  { id: 'uluwatu', name: 'Uluwatu', left: '49%', top: '98%', bg: 'https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=1600&q=80', desc: "Majestic limestone cliffs and legendary ocean sunsets." },
  // Seminyak (Moved to red circle: further right, slightly down, hugging the inner curve)
  { id: 'seminyak', name: 'Seminyak', left: '52%', top: '76%', bg: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1600&q=80', desc: "Refined luxury, pristine beach clubs, and vibrant lifestyle." },
  // Amed (Red 1)
  { id: 'amed', name: 'Amed', left: '86%', top: '36%', bg: '/images/amedbali.webp', desc: "Black sand beaches and pristine coral diving beneath Mount Agung." },
  // Nusa Penida (Red 5)
  { id: 'penida', name: 'Nusa Penida', left: '72%', top: '84%', bg: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1600&q=80', desc: "Untouched beaches, towering rock formations, and exotic marine life." },
  // Mount Batur (Red 6)
  { id: 'batur', name: 'Mount Batur', left: '64%', top: '38%', bg: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=80', desc: "Volcanic sunrises and highland coffee." }
];

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const thirdTextRef = useRef<HTMLDivElement>(null);
  const section2DestinationsRef = useRef<HTMLDivElement>(null);

  const section3Ref = useRef<HTMLElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  const section4Ref = useRef<HTMLElement>(null);
  const s4LeftRef = useRef<HTMLDivElement>(null);
  const s4RightRef = useRef<HTMLDivElement>(null);

  const section6TextRef = useRef<HTMLHeadingElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);

  // UI State
  const [activeJourney, setActiveJourney] = useState<number>(0);
  const [activeMapLoc, setActiveMapLoc] = useState<number>(0);
  const [selectedMapModal, setSelectedMapModal] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollTo = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsMobileMenuOpen(false);
    gsap.to(window, { duration: 1.5, scrollTo: id, ease: "power3.inOut" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only track if pointer is fine
      if (window.matchMedia("(pointer: fine)").matches && cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useGSAP(() => {
    // Horizontal Scroll Trigger for Section 3
    if (section3Ref.current && carouselTrackRef.current) {
      const track = carouselTrackRef.current;

      // We use a small timeout to ensure the DOM layout is fully calculated 
      // after tab switches before establishing the physical scroll boundaries.
      const setupTrigger = () => {
        ScrollTrigger.refresh();
        const scrollDistance = track.scrollWidth - window.innerWidth + window.innerWidth * 0.3; // 30vw right padding buffer

        if (scrollDistance > 0) {
          gsap.to(track, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: section3Ref.current,
              pin: true,
              scrub: 1, // Smooth scrub
              start: "top top",
              end: () => `+=${scrollDistance}`, // Scroll down by the exact horizontal width
              invalidateOnRefresh: true,
              refreshPriority: 0,
            }
          });
        }
      };

      const timer = setTimeout(setupTrigger, 50);
      return () => clearTimeout(timer);
    }
  }, { scope: section3Ref, dependencies: [] });

  useGSAP(() => {
    // Both Section 1 and Section 2 text mapping have been moved directly to the <ImageSequence onProgress> hook 
    // to strictly bind it to the video frame rate, permanently bypassing dynamic ScrollTrigger geometry bugs.

    // Section 4: Split Screen Pin
    if (section4Ref.current && s4LeftRef.current && s4RightRef.current) {
      ScrollTrigger.create({
        trigger: section4Ref.current,
        start: "top top",
        end: () => `+=${s4RightRef.current?.offsetHeight! - window.innerHeight}`,
        pin: s4LeftRef.current,
        refreshPriority: 0,
      });
    }

    // Section 6: Kinetic Testimonial Scrub
    if (section6TextRef.current) {
      gsap.to(section6TextRef.current.querySelectorAll("span"), {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section6TextRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: 1,
          refreshPriority: 0,
        }
      });
    }

    // Section 7: Grand CTA Entrance
    if (ctaTitleRef.current && ctaBtnRef.current) {
      // Animate the two lines of "Begin the Odyssey"
      gsap.fromTo(ctaTitleRef.current.children,
        { opacity: 0, y: 150, filter: "blur(10px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 2,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#section7",
            start: "top 60%",
          }
        }
      );

      // Scale in the magnetic button
      gsap.fromTo(ctaBtnRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 1.5,
          delay: 0.2,
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: ctaTitleRef.current,
            start: "top 60%",
          }
        }
      );
    }
  }, { scope: mainRef });

  // CTA Magnetic Button Effect
  const handleMouseMoveCTA = (e: React.MouseEvent) => {
    if (!ctaBtnRef.current) return;
    const rect = ctaBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ctaBtnRef.current, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: 'power2.out' });
  };
  const handleMouseLeaveCTA = () => {
    if (!ctaBtnRef.current) return;
    gsap.to(ctaBtnRef.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
  };

  return (
    <div ref={mainRef} className="relative w-full overflow-x-hidden font-sans bg-[#0A0505]">
      {/* Global Cursor Element */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-[#D4A373] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(212,163,115,0.5)]"
      />

      {/* Gallery Lightbox */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center transition-all duration-500 cursor-pointer ${lightboxImg ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setLightboxImg(null)}
      >
        <div className="absolute top-8 right-8 text-white uppercase tracking-widest text-[10px] bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">Close</div>
        {lightboxImg && (
          <img src={lightboxImg} alt="Enlarged visual" className={`max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-transform duration-500 ${lightboxImg ? 'scale-100' : 'scale-90'}`} />
        )}
      </div>

      {/* Navbar - Centered Pill Style with Glassmorphism */}
      <div className="fixed top-8 left-1/2 z-[60] -translate-x-1/2 w-full max-w-max px-4">
        <nav className="flex items-center gap-8 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full px-8 py-3 shadow-2xl mix-blend-difference">
          <div className="text-xl font-bold tracking-tighter text-white uppercase">
            BALI<span className="font-light text-white/70">ODYSSEY</span>
          </div>
          <div className="hidden gap-6 text-xs font-semibold tracking-[0.15em] text-white uppercase md:flex">
            <button onClick={(e) => scrollTo("#hero-sequence", e)} className="transition-colors hover:text-[#D4A373]">Home</button>
            <button onClick={(e) => scrollTo("#section4", e)} className="transition-colors hover:text-[#D4A373]">Destinations</button>
            <button onClick={(e) => scrollTo("#section5", e)} className="transition-colors hover:text-[#D4A373]">Experiences</button>
          </div>
          <button onClick={(e) => scrollTo("#section7", e)} className="hidden md:block rounded-full bg-white px-6 py-2 text-xs font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-lg">
            Book Now
          </button>
          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden flex flex-col items-center justify-center gap-[4px] w-8 h-8 z-[70] ml-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'}`}></span>
            <span className={`h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}></span>
            <span className={`h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-[#0A0505]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={(e) => scrollTo("#hero-sequence", e)} className="text-2xl font-light tracking-[0.2em] text-white uppercase hover:text-[#D4A373] transition-colors">Home</button>
        <button onClick={(e) => scrollTo("#section4", e)} className="text-2xl font-light tracking-[0.2em] text-white uppercase hover:text-[#D4A373] transition-colors">Destinations</button>
        <button onClick={(e) => scrollTo("#section5", e)} className="text-2xl font-light tracking-[0.2em] text-white uppercase hover:text-[#D4A373] transition-colors">Experiences</button>
        <button onClick={(e) => scrollTo("#section7", e)} className="mt-8 rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-lg">
          Book Now
        </button>
      </div>

      {/* Integrated Hero Section */}
      <ImageSequence
        id="hero-sequence"
        frameCount={361}
        scrollEnd="+=300%"
        framePath={(index) => `/images/hero${index.toString().padStart(3, '0')}.webp`}
        refreshPriority={2}
        onProgress={(p) => {
          // Scroll Indicator (0.0 to 0.05)
          if (scrollIndicatorRef.current) {
            const op = Math.max(0, 1 - (p / 0.05));
            const y = p <= 0.05 ? p * 400 : 20; // Move down slightly
            gsap.set(scrollIndicatorRef.current, { opacity: op, y });
          }

          // Hero Main Text (0.05 to 0.3)
          if (heroContentRef.current) {
            let op = 0; let y = 10;
            if (p > 0.05 && p <= 0.1) {
              op = (p - 0.05) / 0.05; // Fade in
              y = 10 * (1 - op);
            } else if (p > 0.1 && p <= 0.2) {
              op = 1; y = 0;
            } else if (p > 0.2 && p <= 0.3) {
              op = 1 - ((p - 0.2) / 0.1); // Fade out
              y = -50 * (1 - op); // slide up
            } else {
              op = 0; y = -50;
            }
            gsap.set(heroContentRef.current, { opacity: op, y });
          }

          // Card Text (0.35 to 0.6)
          if (cardRef.current) {
            let op = 0; let x = -10;
            if (p > 0.35 && p <= 0.4) {
              op = (p - 0.35) / 0.05; // Fade in
              x = -10 * (1 - op);
            } else if (p > 0.4 && p <= 0.5) {
              op = 1; x = 0;
            } else if (p > 0.5 && p <= 0.6) {
              op = 1 - ((p - 0.5) / 0.1);
              x = -50 * (1 - op);
            } else {
              op = 0; x = -50;
            }
            gsap.set(cardRef.current, { opacity: op, x });
          }

          // Third Text (0.65 to 0.95)
          if (thirdTextRef.current) {
            let op = 0; let scale = 0.9; let y = 0;
            if (p > 0.65 && p <= 0.7) {
              op = (p - 0.65) / 0.05;
              scale = 0.9 + 0.1 * op;
            } else if (p > 0.7 && p <= 0.85) {
              op = 1; scale = 1; y = 0;
            } else if (p > 0.85 && p <= 0.95) {
              op = 1 - ((p - 0.85) / 0.1);
              y = -30 * (1 - op);
              scale = 1;
            } else {
              op = 0; scale = 1; y = -30;
            }
            gsap.set(thirdTextRef.current, { opacity: op, scale, y });
          }
        }}
      >
        {/* Scroll Indicator - Minimalist Line Style */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4"
        >
          <div className="relative h-16 w-px overflow-hidden bg-white/20">
            <div className="absolute top-0 left-0 h-full w-full bg-white animate-scroll-line" />
          </div>
          <div className="text-[10px] font-bold tracking-[0.4em] text-white uppercase opacity-70">
            Scroll Down
          </div>
        </div>

        <div ref={heroContentRef} className="relative z-10 flex h-full w-full items-center justify-center pointer-events-auto opacity-0 translate-y-10">
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <span className="mb-4 text-[11px] font-light tracking-[0.4em] text-white/90 uppercase drop-shadow-md">
              Discover the magic
            </span>
            <h1 className="max-w-4xl text-5xl font-light leading-tight tracking-wide text-white md:text-7xl lg:text-8xl drop-shadow-lg">
              Where Every Wave <br />
              Tells a Story
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light text-white/80 md:text-xl drop-shadow-md tracking-wide">
              Experience the ultimate blend of luxury and nature in the heart of Bali.
              Your journey to paradise starts here.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-[11px] font-medium tracking-[0.2em] text-black uppercase transition-transform hover:scale-105 active:scale-95">
                Explore Destinations
              </button>
              <button className="rounded-full bg-white/10 px-8 py-4 text-[11px] font-medium tracking-[0.2em] text-white uppercase backdrop-blur-sm transition-all hover:bg-white/20">
                Watch Experience
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us - Always Visible (Bottom Left) */}
        <div className="absolute bottom-12 left-12 z-50 flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3.5 shadow-2xl pointer-events-auto transition-all hover:bg-white/10 hover:border-white/30 cursor-pointer">
          <span className="text-[11px] font-light tracking-[0.25em] text-white/90 uppercase">
            Contact Us
          </span>
        </div>

        {/* Second Content: Glassmorphism Card (Middle Left) */}
        <div ref={cardRef} className="absolute bottom-36 left-12 z-20 max-w-sm rounded-3xl bg-white/5 p-8 backdrop-blur-2xl border border-white/10 shadow-2xl opacity-0 -translate-x-10 pointer-events-auto">
          <h3 className="mb-3 text-2xl font-light tracking-[0.1em] text-white">Join Us</h3>
          <p className="text-sm font-light tracking-wide leading-relaxed text-white/70">
            Embark on a journey that transcends the ordinary. Immerse yourself in the vibrant culture, pristine beaches, and lush landscapes of Bali. Experience personalized itineraries crafted just for you, ensuring every moment becomes a cherished memory.
          </p>
          <button className="mt-6 font-light text-white uppercase tracking-[0.2em] text-[10px] py-2.5 px-6 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
            Start Planning
          </button>
        </div>

        {/* Third Content: Final Text (Center) */}
        <div ref={thirdTextRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 scale-90">
          <h2 className="text-4xl font-light uppercase tracking-[0.4em] text-white/90 md:text-5xl drop-shadow-2xl">
            You Deserve It.
          </h2>
        </div>
      </ImageSequence>

      {/* Wrapper for Section 2 so it slides UP over Section 1 natively */}
      <div id="section2-wrapper" className="-mt-[100vh] relative z-30">
        {/* Second Image Sequence (Drone to Ocean) */}
        <ImageSequence
          id="section2-sequence"
          frameCount={360}
          scrollEnd="+=300%"
          framePath={(index) => `/images/section2${index.toString().padStart(3, '0')}.webp`}
          refreshPriority={1}
          onProgress={(p) => {
            if (!section2DestinationsRef.current) return;

            // Frame-to-Opacity Math (0.0 to 1.0 represents the 360-frame video duration)
            let opacity = 0;
            let scale = 1;
            let y = 40;

            if (p < 0.1) {
              // 0% - 10%: Fade in smoothly
              opacity = p / 0.1;
              y = 40 * (1 - opacity);
            } else if (p >= 0.1 && p <= 0.7) {
              // 10% - 70%: Hold perfectly visible
              opacity = 1;
              y = 0;
            } else if (p > 0.7 && p <= 0.8) {
              // 70% - 80%: Fade out softly
              opacity = 1 - ((p - 0.7) / 0.1);
              scale = 1 + (0.05 * ((p - 0.7) / 0.1));
              y = 0;
            } else {
              // 80%+: Hidden
              opacity = 0;
              scale = 1.05;
              y = 0;
            }

            gsap.set(section2DestinationsRef.current, { opacity, y, scale });
          }}
        >
          <div ref={section2DestinationsRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 translate-y-10">
            <h3 className="mb-12 text-[12px] font-semibold tracking-[0.5em] text-white uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Preview the Extraordinary
            </h3>
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center text-center bg-black/50 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-medium text-white tracking-[0.15em] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Ubud</h4>
                <p className="text-white/90 text-xs mt-3 font-medium max-w-[200px] leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Cultural heartbeats, sacred temples, and lush terraced landscapes.
                </p>
              </div>
              <div className="w-px h-20 bg-white/30 hidden md:block" />
              <div className="w-20 h-px bg-white/30 md:hidden" />
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-medium text-white tracking-[0.15em] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Uluwatu</h4>
                <p className="text-white/90 text-xs mt-3 font-medium max-w-[200px] leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Majestic limestone cliffs and legendary ocean sunsets.
                </p>
              </div>
              <div className="w-px h-20 bg-white/30 hidden md:block" />
              <div className="w-20 h-px bg-white/30 md:hidden" />
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-medium text-white tracking-[0.15em] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Nusa Penida</h4>
                <p className="text-white/90 text-xs mt-3 font-medium max-w-[200px] leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Untouched beaches, exotic marine life, and crystal clear waters.
                </p>
              </div>
            </div>
          </div>
        </ImageSequence>
      </div>

      {/* Section 3: Plan Your Adventure */}
      <section ref={section3Ref} id="section3" className="relative z-30 w-full min-h-[100svh] overflow-hidden bg-[#0A0505] py-12 flex flex-col justify-center text-[#F3EBE6]">
        {/* Title Container */}
        <div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center pt-8">

          {/* Top Label */}
          <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
            Start Exploring
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl md:text-5xl lg:text-5xl text-[#F3EBE6] drop-shadow-sm font-serif">
            Plan your adventure your way
          </h2>

          {/* Subheading */}
          <p className="mx-auto mb-8 max-w-2xl text-xs leading-relaxed text-[#F3EBE6]/70 md:text-sm">
            Bali Odyssey is a style of travel built around deeper experiences — the kind that connect you to the people, traditions, and everyday life of a place. And doing it in a way that reflects your pace, your interests, and what you want from the journey.
          </p>

          <div className="mb-10" />

        </div>

        {/* Carousel Container */}
        <div className="relative w-full pl-8 lg:pl-[calc((100vw-64rem)/2+2rem)] xl:pl-[calc((100vw-80rem)/2+2rem)] overflow-visible">
          <div
            ref={carouselTrackRef}
            className="flex gap-6 w-max pb-8 md:pb-12 select-none pr-8"
          >

            {section3Data.map((item, index) => (
              <div key={index} className="group flex-none w-[240px] md:w-[300px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(212,163,115,0.15)] border border-white/10">
                  <img src={item.img} alt={item.title} draggable="false" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
                </div>
                <h4 className="mt-4 text-xl md:text-2xl text-[#F3EBE6] font-serif transition-colors group-hover:text-[#D4A373]">{item.title}</h4>
                {item.subtitle && (
                  <p className="mt-1.5 text-[9px] md:text-[10px] font-bold text-[#F3EBE6]/40 tracking-[0.2em] uppercase">{item.subtitle}</p>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Section 4: The Sanctuary (Luxury Accommodations - Split Screen) */}
      <section ref={section4Ref} id="section4" className="relative z-30 w-full bg-[#0A0505] text-[#F3EBE6]">
        <div className="flex flex-col lg:flex-row w-full mx-auto max-w-7xl">
          {/* Left Pinned Content */}
          <div ref={s4LeftRef} className="w-full lg:w-5/12 h-screen flex flex-col justify-center px-8 z-10">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
              The Sanctuary
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
              Sanctuaries<br />crafted by<br />nature.
            </h2>
            <p className="text-sm leading-relaxed text-[#F3EBE6]/70 max-w-md">
              We exclusively partner with eco-luxury resorts and hidden villas that blur the boundaries between indoor comfort and untamed natural beauty. Rest your head where the jungle meets the sky.
            </p>
          </div>

          {/* Right Scrolling Visuals */}
          <div ref={s4RightRef} className="w-full lg:w-7/12 flex flex-col py-[20vh] gap-[20vh] px-8">
            {section4Data.map((villa, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <img src={villa.img} alt={villa.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-serif text-[#D4A373]">{villa.name}</h3>
                  <p className="text-sm text-[#F3EBE6]/60 leading-relaxed max-w-sm">{villa.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Curated Journeys (Dynamic Hover Accordion) */}
      <section id="section5" className="relative z-30 w-full min-h-screen bg-[#0A0505] flex flex-col items-center justify-center overflow-hidden py-32 text-[#F3EBE6]">
        {/* Dynamic Background Images */}
        {section5Data.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] ${activeJourney === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-105'}`}
          />
        ))}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0505] via-[#0A0505]/60 to-[#0A0505]"></div>

        {/* Accordion Content */}
        <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col">
          <div className="mb-6 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
            <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
            Inspirational Blueprints
          </div>

          {/* Strong Anti-Package Tour Messaging */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[#F3EBE6] mb-4">
            No set itineraries. <br />
            <span className="text-[#F3EBE6]/50 italic font-light">100% Tailor-made for you.</span>
          </h2>
          <p className="text-[#F3EBE6]/70 max-w-2xl text-sm md:text-base leading-relaxed mb-16">
            We reject the concept of rigid package tours. The journeys below are simply conceptual blue-prints to spark your imagination. Your actual adventure is a blank canvas, dynamically bending and flexing to your daily rhythm, energy levels, and spontaneous desires.
          </p>

          <div className="flex flex-col w-full">
            {section5Data.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveJourney(idx)}
                className="group cursor-pointer flex flex-col w-full border-b border-white/10 pb-8 pt-8 transition-all"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full">
                    <span className={`text-sm tracking-[0.3em] transition-colors duration-500 font-bold uppercase w-12 ${activeJourney === idx ? 'text-[#D4A373]' : 'text-white/30'}`}>
                      {item.id}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${activeJourney === idx ? 'text-[#D4A373]' : 'text-white/0'}`}>
                        {item.theme}
                      </span>
                      <h3 className={`text-3xl md:text-5xl lg:text-6xl font-light transition-all duration-500 transform ${activeJourney === idx ? 'text-white translate-x-2' : 'text-white/20 group-hover:text-white/50 group-hover:translate-x-2'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeJourney === idx ? 'max-h-[800px] mt-8 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 md:max-w-4xl border-l border-[#D4A373]/30 pl-6 md:pl-8 ml-4 md:ml-[7rem]">

                    {/* General Summary */}
                    <div className="w-full lg:w-2/5">
                      <p className="text-white/80 text-sm md:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Features (Anti-Schedule Highlights) */}
                    <div className="flex flex-col gap-4 w-full lg:w-3/5 mt-4 lg:mt-0">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex gap-4 items-start group/feature">
                          <span className="text-[#D4A373] text-[12px] opacity-70 mt-1">{feat.icon}</span>
                          <span className="text-white/90 text-sm md:text-base border-b border-white/5 pb-4 w-full transition-colors group-hover/feature:border-white/30">
                            {feat.activity}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: The Odyssey Difference (Kinetic Text) */}
      <section id="section6" className="relative z-30 w-full min-h-screen bg-[#0A0505] flex items-center justify-center px-8 py-32 text-[#F3EBE6]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="mb-12 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
            The Odyssey Philosophy
          </div>
          <h2 ref={section6TextRef} className="text-3xl md:text-5xl lg:text-7xl font-serif leading-[1.3] md:leading-[1.4] flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
            {quoteWords.map((word, i) => (
              <span key={i} className="opacity-10">{word}</span>
            ))}
          </h2>
          <div className="mt-16 w-px h-24 bg-gradient-to-b from-[#D4A373] to-transparent"></div>
        </div>
      </section>

      {/* 🟢 NEW SECTION: Pricing & Packages */}
      <section id="pricing" className="relative z-30 w-full min-h-screen bg-[#050202] py-32 px-8 flex flex-col items-center pointer-events-auto">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
          <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
          Investment
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F3EBE6] mb-8 text-center max-w-2xl">
          Transparent luxury, tailored to you
        </h2>
        <p className="text-sm md:text-base text-white/50 max-w-2xl text-center mb-20 leading-relaxed">
          While every Bali Odyssey journey is completely custom-built from the ground up, we offer these baseline examples to help you understand the caliber of experience we provide.
        </p>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 justify-center items-stretch relative">
          {pricingPackages.map((pkg, idx) => (
            <div key={idx} className="flex-1 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 flex flex-col hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,163,115,0.1)] transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity"></div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#F3EBE6] mb-2">{pkg.name}</h3>
              <p className="text-[10px] text-[#D4A373] tracking-[0.2em] uppercase font-bold mb-8">{pkg.duration}</p>

              <div className="text-3xl text-white font-light mb-8 pb-8 border-b border-white/10">
                {pkg.price}
              </div>

              <p className="text-sm text-white/70 leading-relaxed flex-grow">
                {pkg.desc}
              </p>

              <button onClick={(e) => scrollTo("#section7", e)} className="w-full mt-12 py-4 rounded-full border border-white/30 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors z-10 cursor-none">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 NEW SECTION: Gallery Grid */}
      <section id="gallery" className="relative z-30 w-full min-h-screen bg-[#0A0505] flex flex-col items-center py-32 px-8 overflow-hidden pointer-events-auto">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
          <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
          Visual Poetry
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F3EBE6] mb-16 text-center">
          Scenes from the Odyssey
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl w-full">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightboxImg(img)}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-none"
            >
              <img src={img} alt={`Bali Memory ${i}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white tracking-[0.2em] font-light text-sm uppercase">View Frame</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 NEW SECTION: Testimonials */}
      <section id="testimonials" className="relative z-30 w-full bg-[#050202] py-32 px-8 flex flex-col items-center text-[#F3EBE6] pointer-events-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
            <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
            Traveler Reflections
          </div>
          <h2 className="text-3xl md:text-5xl font-serif">What they discovered</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-3xl w-full max-w-sm flex flex-col justify-between hover:bg-white/10 transition-colors">
              <p className="text-white/80 font-light italic leading-relaxed text-sm mb-8">"{t.text}"</p>
              <div className="flex flex-col gap-1">
                <span className="text-[#D4A373] text-sm uppercase tracking-widest font-semibold">{t.name}</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 MODIFIED SECTION: Interactive Sonar Map */}
      <section id="map" className="relative z-30 w-full py-32 px-4 md:px-8 flex flex-col items-center bg-[#030101] pointer-events-auto">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
          <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
          The Territory
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-[#F3EBE6] mb-16 text-center">
          Our Handpicked Sanctuaries
        </h2>

        <div className="w-full max-w-6xl aspect-[4/5] md:aspect-[16/9] lg:aspect-[1.8/1] rounded-3xl border border-white/10 relative group bg-[#0A0505] flex items-center justify-center">

          {/* BACKGROUND LAYER - Clipped to rounded corners */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
            {/* Dynamic Backgrounds */}
            {mapLocations.map((loc, idx) => (
              <div
                key={`bg-${idx}`}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: activeMapLoc === idx ? 0.4 : 0 }}
              >
                <img src={loc.bg} className="w-full h-full object-cover mix-blend-luminosity grayscale-[30%] blur-[2px] md:blur-sm transform scale-105 transition-transform duration-[10s] ease-out" />
              </div>
            ))}

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(5,2,2,1)]"></div>
          </div>

          {/* UNIFIED MAP BOARD - Locks the coordinate grid tightly to the map image across ALL screen sizes */}
          <div className="relative flex items-center justify-center w-[160%] sm:w-[130%] md:w-[85%] lg:w-[98%] aspect-[2/1] z-10 pointer-events-none">
            
            {/* Outline Image */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 mix-blend-screen"
              style={{ WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at center, black 40%, transparent 100%)', maskImage: 'radial-gradient(ellipse 65% 55% at center, black 40%, transparent 100%)' }}
            >
              <img src="/images/bali-map.png" alt="Bali Map Outline" className="w-[100%] h-auto" />
            </div>

            {/* Interactive Sonar Dots (Sharing the exact same box as the map image) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {mapLocations.map((loc, idx) => {
                const isActive = activeMapLoc === idx;
              return (
                <div
                  key={`dot-${idx}`}
                  className="absolute cursor-pointer group flex flex-col items-center pointer-events-auto"
                  style={{ left: loc.left, top: loc.top, transform: 'translate(-50%, -50%)' }}
                  onClick={() => {
                    setActiveMapLoc(idx);
                    setSelectedMapModal(idx);
                  }}
                >
                  <div className="relative flex items-center justify-center pt-8 pb-2 px-8">
                    {/* Pulsing Sonar Ring */}
                    <div className={`absolute w-8 h-8 rounded-full border-2 border-[#D4A373] animate-sonar ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`}></div>

                    {/* Center Dot */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(212,163,115,1)] ${isActive ? 'bg-white scale-150' : 'bg-[#D4A373]'}`}></div>

                    {/* Ring Highlight */}
                    <div className={`absolute w-6 h-6 rounded-full border border-white/50 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-50'}`}></div>

                  </div>

                  {/* Label & Description Box */}
                  <div className={`mt-2 flex flex-col items-center transition-all duration-500 pointer-events-none ${isActive ? 'opacity-100 translate-y-0' : 'opacity-30 -translate-y-2 group-hover:opacity-80'}`}>
                    <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-sm drop-shadow-md">
                      {loc.name}
                    </span>

                    <div className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center max-w-[150px] md:max-w-xs text-center ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="w-4 h-px bg-[#D4A373] mb-2" />
                      <p className="text-[9px] md:text-xs text-white/80 font-light leading-relaxed">
                        {loc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* ELEGANT LOCATION MODAL */}
        <div 
          className={`fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-8 transition-all duration-700 pointer-events-none ${selectedMapModal !== null ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Overlay blur */}
          <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-700 ${selectedMapModal !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
            onClick={() => setSelectedMapModal(null)}
          ></div>

          {/* Modal Content */}
          {selectedMapModal !== null && (
            <div 
              className={`relative w-full max-w-4xl bg-[#0A0505] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row transform transition-all duration-700 pointer-events-auto ${selectedMapModal !== null ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
            >
              {/* Close Button Overlay */}
              <button 
                onClick={() => setSelectedMapModal(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#D4A373] hover:text-black transition-all hover:scale-110 active:scale-95 group"
              >
                <span className="text-xl font-light leading-none group-hover:rotate-90 transition-transform">✕</span>
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden group">
                <img 
                  src={mapLocations[selectedMapModal].bg} 
                  alt={mapLocations[selectedMapModal].name}
                  className="w-full h-full object-cover transform scale-110 animate-[slow-zoom_20s_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0505] via-transparent to-transparent hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0505] via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373] mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
                  Signature Destination
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-[#F3EBE6] mb-6 leading-tight">
                  {mapLocations[selectedMapModal].name}
                </h3>
                <div className="w-12 h-px bg-[#D4A373] mb-6"></div>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-light italic">
                  "{mapLocations[selectedMapModal].desc}"
                </p>
                
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-3 text-white/40 text-[10px] font-medium tracking-widest uppercase">
                     <span className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] italic">?</span>
                     Exclusive Odyssey Planning Available
                   </div>
                   <button 
                     onClick={() => { setSelectedMapModal(null); scrollTo("#section7"); }}
                     className="bg-[#D4A373] text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] self-start hover:bg-white transition-colors"
                   >
                     Book this Journey
                   </button>
                </div>
              </div>
            </div>
          )}
        </div>
    </section>

      {/* 🟢 NEW SECTION: FAQ */}
      <section id="faq" className="relative z-30 w-full bg-[#0A0505] py-32 px-8 flex flex-col items-center text-[#F3EBE6] pointer-events-auto">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4A373]">
          <span className="h-2 w-2 rounded-full bg-[#D4A373]"></span>
          Knowledge Base
        </div>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center">Frequently Asked Questions</h2>

        <div className="w-full max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 overflow-hidden">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#D4A373] transition-colors"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <span className="text-lg md:text-xl font-light tracking-wide placeholder-text">{faq.question}</span>
                <span className={`text-2xl font-light transform transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-[#D4A373]' : ''}`}>+</span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
                <p className="text-white/60 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 & Footer: Grand CTA */}
      <section id="section7" className="relative z-30 w-full bg-[#030101] text-[#F3EBE6] pt-40 pb-12 flex flex-col items-center overflow-hidden pointer-events-auto">

        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A373]/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Majestic CTA */}
        <div className="flex flex-col items-center text-center px-8 mb-40 relative z-10 w-full">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#D4A373] mb-12">
            Your escape awaits
          </p>

          <h2 ref={ctaTitleRef} className="flex flex-col items-center w-full mb-20 pointer-events-none">
            <span className="text-5xl md:text-7xl lg:text-[7rem] font-light tracking-[-0.05em] text-white/90 leading-none">
              Begin the
            </span>
            <span className="text-[5rem] md:text-[9rem] lg:text-[13rem] font-serif italic pb-4 mt-[-10px] md:mt-[-30px] bg-gradient-to-r from-[#D4A373] via-[#F3EBE6] to-[#D4A373] text-transparent bg-clip-text drop-shadow-[0_10px_40px_rgba(212,163,115,0.25)]">
              Odyssey
            </span>
          </h2>

          <button
            ref={ctaBtnRef}
            onMouseMove={handleMouseMoveCTA}
            onMouseLeave={handleMouseLeaveCTA}
            className="group relative flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A373] to-[#B0895D] text-[#0A0505] shadow-[0_0_50px_rgba(212,163,115,0.3)] transition-colors hover:from-white hover:to-white"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transform transition-transform duration-500 group-hover:scale-110 z-10">Start Planning</span>
            <div className="absolute inset-1 rounded-full border border-black/20 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
          </button>
        </div>

        {/* Adibusana Footer */}
        <footer className="w-full max-w-7xl mx-auto px-8 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-white uppercase">
            BALI<span className="font-light text-white/50">ODYSSEY</span>
          </div>

          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
            <a href="#" className="hover:text-[#D4A373] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Journal</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Privacy</a>
          </div>

          <div className="text-[10px] tracking-widest text-white/30 uppercase">
            &copy; 2026 Bali Odyssey. All Rights Reserved.
          </div>
        </footer>
      </section>

      {/* 🟢 NEW: WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group pointer-events-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="absolute right-16 bg-[#0A0505] text-[#F3EBE6] border border-white/20 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all pointer-events-none drop-shadow-md">
          Chat with us
        </span>
      </a>
    </div>
  );
}
