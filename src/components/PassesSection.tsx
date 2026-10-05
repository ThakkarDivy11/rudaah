"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Ticket, Sparkles, Lock, ArrowUpRight } from "lucide-react";

// =========================================================================
// CONFIGURABLE PASS TIERS CONFIGURATION
// Update `price` with the exact approved amount (e.g., "₹2,499") when confirmed,
// or leave as null for live rates directly on FacePass.
// =========================================================================
export const EARLY_BIRD_PASS = {
  badge: "EARLY BIRD",
  status: "sold_out" as const,
  title: "Early Bird Pass",
  subtitle: "Limited Early Access • 11th – 19th October 2026",
  price: null as string | null,
  period: "9 Nights Full Season Access",
  bookingUrl:
    "https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29",
  benefits: [
    "Full access across all 9 nights of Navratri (11th – 19th October 2026)",
    "Contactless, face-recognition entry via FacePass — no physical ticket to carry",
    "Entry to the open-air grand Garba arena and natural turf dancing ground",
    "Access to curated botanical experience zones, food courts, and artisan stalls",
    "Standard ground parking facility included",
  ],
};

export const PHASE_1_PASS = {
  badge: "PHASE 1",
  status: "active" as const,
  title: "Phase 1 Pass",
  subtitle: "Season Access • 11th – 19th October 2026",
  price: null as string | null,
  period: "9 Nights Full Season Access",
  bookingUrl:
    "https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29",
  benefits: [
    "Full access across all 9 nights of Navratri (11th – 19th October 2026)",
    "Contactless, face-recognition entry via FacePass — no physical ticket to carry",
    "Entry to the open-air grand Garba arena and natural turf dancing ground",
    "Access to curated botanical experience zones, food courts, and artisan stalls",
    "Standard ground parking facility included",
  ],
};

interface PassesSectionProps {
  onOpenBookModalWithPass?: (passName: string) => void;
}

export default function PassesSection({ onOpenBookModalWithPass }: PassesSectionProps) {
  return (
    <section id="passes" className="py-20 sm:py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-xs"
          >
            <Ticket className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>FacePass Booking Portal</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Garba Passes &amp; <span className="text-maroon-gradient">Event Information</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-sm sm:text-base text-[#2A1613] font-normal max-w-2xl mx-auto"
          >
            Early Bird passes are officially <span className="font-bold text-[#7A1B0C]">Sold Out</span>. Phase 1 passes are now live on FacePass for 9 glorious nights of dance, music, and celebration.
          </motion.p>
        </div>

        {/* Pricing Cards Grid: Early Bird (Sold Out) & Phase 1 (Active) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Early Bird Pass (SOLD OUT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[#E8DCCB]/75 border border-[#7A1B0C]/30 p-6 sm:p-10 shadow-lg flex flex-col justify-between overflow-hidden opacity-90"
          >
            {/* Top Badges */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7A1B0C]/80 text-[#F7EFE4] text-xs font-extrabold uppercase tracking-wider">
                  <span>{EARLY_BIRD_PASS.badge}</span>
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-[11px] font-black uppercase tracking-wider border border-[#F7EFE4]/30">
                  SOLD OUT
                </span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1B0C]/80 bg-[#F4EDE2]/80 px-3 py-1 rounded-full border border-[#7A1B0C]/15 shadow-xs">
                <div className="relative w-4 h-4 rounded overflow-hidden shrink-0 opacity-70">
                  <Image
                    src="/images/facepass-logo.webp"
                    alt="FacePass"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>FacePass Entry</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-left mb-6">
              <div className="flex items-baseline gap-2">
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                  {EARLY_BIRD_PASS.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#8B6914] font-medium mt-1">
                {EARLY_BIRD_PASS.subtitle}
              </p>
            </div>

            {/* Price Block: Marked Sold Out */}
            <div className="mb-8 pb-6 border-b border-[#7A1B0C]/20 bg-[#F4EDE2]/60 rounded-2xl p-4 sm:p-5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B6914] block">
                Festival Tier Completed
              </span>
              <div className="font-playfair text-3xl sm:text-4xl font-extrabold text-[#7A1B0C] mt-0.5 tracking-wide">
                SOLD OUT
              </div>
              <span className="text-xs text-[#2A1613]/70 font-medium block mt-1">
                All Early Bird allocations have been booked
              </span>
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A1B0C]/80 block mb-3">
                Included Privileges:
              </span>
              <ul className="space-y-3">
                {EARLY_BIRD_PASS.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A1613]/80 font-medium leading-relaxed">
                    <Check className="w-4 h-4 text-[#7A1B0C]/60 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disabled Button */}
            <div>
              <div className="w-full py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 bg-[#7A1B0C]/15 text-[#7A1B0C]/70 border border-[#7A1B0C]/25 cursor-not-allowed select-none text-center">
                <Lock className="w-4 h-4 text-[#7A1B0C]/60" />
                <span>SOLD OUT</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8B6914]/80 font-medium mt-3">
                <span>Early Bird allocation closed • Phase 1 is now live</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Phase 1 Pass (ACTIVE & FEATURED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C] p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden ring-2 ring-[#7A1B0C]/20"
          >
            {/* Top Floating Pill: Active Phase */}
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-xl bg-[#7A1B0C] text-[#F2D18B] border border-t-0 border-[#F2D18B]/40 text-[11px] font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2D18B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2D18B]"></span>
              </span>
              <span>LIVE NOW</span>
            </div>

            {/* Top Badges */}
            <div className="flex items-center justify-between gap-3 mb-6 pt-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-extrabold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F2D18B]" />
                <span>{PHASE_1_PASS.badge}</span>
              </span>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1B0C] bg-[#F4EDE2] px-3 py-1 rounded-full border border-[#7A1B0C]/20 shadow-xs">
                <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
                  <Image
                    src="/images/facepass-logo.webp"
                    alt="FacePass"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>FacePass Entry</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-left mb-6">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                {PHASE_1_PASS.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8B6914] font-bold mt-1">
                {PHASE_1_PASS.subtitle}
              </p>
            </div>

            {/* Price Block */}
            <div className="mb-8 pb-6 border-b border-[#7A1B0C]/20 bg-[#F4EDE2]/80 rounded-2xl p-4 sm:p-5 text-center">
              {PHASE_1_PASS.price ? (
                <div>
                  <div className="font-playfair text-4xl sm:text-5xl font-extrabold text-[#7A1B0C]">
                    {PHASE_1_PASS.price}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2A1613] font-medium block mt-1">
                    / {PHASE_1_PASS.period}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B6914] block">
                    Exclusive Festival Tier
                  </span>
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] mt-0.5">
                    Live on FacePass
                  </div>
                  <span className="text-xs text-[#2A1613]/80 font-medium block mt-1">
                    {PHASE_1_PASS.period} (9 Festive Nights)
                  </span>
                </div>
              )}
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A1B0C] block mb-3">
                Included Privileges:
              </span>
              <ul className="space-y-3">
                {PHASE_1_PASS.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A1613] font-medium leading-relaxed">
                    <Check className="w-4 h-4 text-[#7A1B0C] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent FacePass Booking CTA Button */}
            <div>
              <a
                href={PHASE_1_PASS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg bg-[#7A1B0C] text-[#F7EFE4] hover:bg-[#5C1408] hover:shadow-xl active:scale-[0.99] text-center group"
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
                <ArrowUpRight className="w-4 h-4 text-[#F2D18B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8B6914] font-medium mt-3">
                <div className="relative w-3.5 h-3.5 rounded overflow-hidden shrink-0">
                  <Image
                    src="/images/facepass-logo.webp"
                    alt="FacePass"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Official contactless face entry & booking powered by FacePass</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
