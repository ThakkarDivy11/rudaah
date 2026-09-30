"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ticket, Building2, Calendar, MapPin, ChevronDown, Sparkles, Users, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onOpenBookModal: () => void;
  onOpenSponsorModal: () => void;
}

export const FACEPASS_BOOKING_URL = "https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29";

export default function HeroSection({ onOpenSponsorModal }: HeroSectionProps) {
  // Target Event Start Date: October 11, 2026 at 7:30 PM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-11T19:30:00+05:30").getTime();

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-paper-texture">
      {/* Background Stage Image with Soft Atmospheric Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/extracted_img_23.jpg"
          alt="Rudaah Garba Stage Setup"
          fill
          className="object-cover object-center scale-105 filter opacity-20 contrast-125"
          priority
        />
        {/* Soft Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE2] via-[#F4EDE2]/85 to-[#F4EDE2]/60" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#D6B26E]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Top Badge: Presenters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#E8DCCB]/90 border border-[#7A1B0C]/30 backdrop-blur-md mb-5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B6914]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#7A1B0C] uppercase">
            Raghuvanshi Events × Rashmi Raj Events
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#8B6914]" />
        </motion.div>

        {/* Central Logo Emblem */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 mb-5 p-2 rounded-full border-2 border-[#7A1B0C]/40 bg-[#E8DCCB]/95 shadow-lg flex items-center justify-center"
        >
          <Image
            src="/images/rudaah-logo.png"
            alt="Rudaah Garba Official Logo"
            fill
            className="object-contain p-2 hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>

        {/* Brand Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2"
        >
          <span className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#7A1B0C] uppercase block">
            RUDAAH GARBA 2026
          </span>
        </motion.div>

        {/* Main Theme Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#7A1B0C] leading-[1.1] max-w-4xl mb-3"
        >
          THE FOREST OF <span className="text-maroon-gradient block sm:inline">SACRED ENERGIES</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-cormorant text-lg sm:text-2xl italic tracking-wider text-[#8B6914] font-semibold mb-6"
        >
          An Architectural Vision in Nature
        </motion.p>

        {/* Event Meta Badges: 11th - 19th October 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#7A1B0C] font-semibold mb-8 bg-[#E8DCCB]/90 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-[#7A1B0C]/20 shadow-xs"
        >
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#8B6914] shrink-0" />
            <span className="font-bold">11th – 19th OCTOBER 2026</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#7A1B0C]" />
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#8B6914] shrink-0" />
            <span>SG Highway, Ahmedabad</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#7A1B0C]" />
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#8B6914] shrink-0" />
            <span>120K+ Expected Footfall</span>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 w-full max-w-md px-2"
        >
          <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#7A1B0C] mb-2.5 font-cormorant font-bold">
            Countdown To Opening Night (11 October 2026)
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#E8DCCB] border border-[#7A1B0C]/30 rounded-xl p-2 sm:p-3 shadow-xs"
              >
                <div className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#7A1B0C] leading-none">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#8B6914] font-bold tracking-wider mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTAs: Direct FacePass Booking Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md"
        >
          {/* Prominent FacePass Booking CTA */}
          <a
            href={FACEPASS_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:bg-[#5C1408] active:scale-98 transition-all text-center group"
          >
            <div className="relative w-5 h-5 rounded overflow-hidden shrink-0 bg-white/20 p-0.5 group-hover:scale-110 transition-transform">
              <Image
                src="/images/facepass-logo.webp"
                alt="FacePass"
                fill
                className="object-contain"
              />
            </div>
            <span>BOOK YOUR PASS</span>
            <ArrowUpRight className="w-4 h-4 text-[#F2D18B]" />
          </a>

          {/* Become Sponsor / Proposal CTA */}
          <button
            onClick={onOpenSponsorModal}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-[#E8DCCB] border border-[#7A1B0C]/40 text-[#7A1B0C] hover:bg-[#DBCBBA] font-bold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md active:scale-98 transition-all shadow-xs"
          >
            <Building2 className="w-4 h-4 text-[#7A1B0C]" />
            <span>Become Sponsor</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 sm:mt-14 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[11px] sm:text-xs font-cormorant tracking-widest text-[#7A1B0C] uppercase font-bold mb-1">
            Explore Concept
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A1B0C]" />
        </motion.div>
      </div>
    </section>
  );
}
