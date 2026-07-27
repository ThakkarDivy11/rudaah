"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ticket, Building2, Calendar, MapPin, ChevronDown, Sparkles, Users } from "lucide-react";

interface HeroSectionProps {
  onOpenBookModal: () => void;
  onOpenSponsorModal: () => void;
}

export default function HeroSection({ onOpenBookModal, onOpenSponsorModal }: HeroSectionProps) {
  // Target Event Start Date: October 11, 2026 at 7:00 PM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-11T21:00:00").getTime();


    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-paper-texture">
      {/* Background Stage Image with Cream Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/extracted_img_23.jpg"
          alt="Rudaah Garba Stage Setup"
          fill
          className="object-cover object-center scale-105 filter opacity-25 contrast-125"
          priority
        />
        {/* Soft Cream Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE2] via-[#F4EDE2]/80 to-transparent" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D6B26E]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge: Joint Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB]/90 border border-[#7A1B0C]/40 backdrop-blur-md mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#7A1B0C]" />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-[#7A1B0C]">
            RAGHUVANSHI EVENTS × RASHMI RAJ EVENTS
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#7A1B0C]" />
        </motion.div>

        {/* Central Logo Emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6 drop-shadow-xl p-2 rounded-full border-2 border-[#7A1B0C]/40 bg-[#E8DCCB]/90 shadow-xl flex items-center justify-center"
        >
          <Image
            src="/images/rudaah-logo.png"
            alt="Rudaah Garba Official Logo"
            fill
            className="object-contain p-2 hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>


        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-cormorant text-xl sm:text-2xl italic tracking-widest text-[#8B6914] font-semibold uppercase mb-2"
        >
          “Where Nature Becomes Celebration”
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-playfair text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#7A1B0C] leading-[1.1] max-w-4xl mb-4"
        >
          Celebrate The Spirit Of <span className="text-maroon-gradient block sm:inline">Navratri</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-poppins text-base sm:text-xl text-[#2A1613] max-w-2xl font-normal mb-8 leading-relaxed"
        >
          Nine Nights of Culture, Music, Celebration & Memories at Ahmedabad&apos;s Most Premium Garba Venue.
        </motion.p>

        {/* Event Meta Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#7A1B0C] font-semibold mb-8 bg-[#E8DCCB]/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-[#7A1B0C]/20 shadow-sm"
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#8B6914]" />
            <span>11th – 20th Oct 2026</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#7A1B0C]" />
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#8B6914]" />
            <span>SG Highway, Ahmedabad</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#7A1B0C]" />
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#8B6914]" />
            <span>120K+ Footfall</span>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 w-full max-w-md"
        >
          <div className="text-xs uppercase tracking-widest text-[#7A1B0C] mb-3 font-cormorant font-bold">
            Countdown To The Grand Opening
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#E8DCCB] border border-[#7A1B0C]/30 rounded-xl p-2 sm:p-3 shadow-md"
              >
                <div className="font-playfair text-xl sm:text-3xl font-bold text-[#7A1B0C]">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs text-[#8B6914] font-bold uppercase tracking-wider mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:bg-[#5C1408] active:scale-98 transition-all text-center"
          >
            <Sparkles className="w-5 h-5 text-[#F2D18B]" />
            <span>Inquire For Event</span>
          </a>

          <button
            onClick={onOpenSponsorModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E8DCCB] border border-[#7A1B0C]/50 text-[#7A1B0C] hover:bg-[#DBCBBA] font-bold text-base flex items-center justify-center gap-2 backdrop-blur-md active:scale-98 transition-all shadow-sm"
          >
            <Building2 className="w-5 h-5 text-[#7A1B0C]" />
            <span>Become Sponsor</span>
          </button>
        </motion.div>


        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-14 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs font-cormorant tracking-widest text-[#7A1B0C] uppercase font-bold mb-1">
            Explore Celebration
          </span>
          <ChevronDown className="w-5 h-5 text-[#7A1B0C]" />
        </motion.div>
      </div>
    </section>
  );

}
