"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Ticket, Sparkles, ShieldCheck } from "lucide-react";

// =========================================================================
// CONFIGURABLE EARLY BIRD PASS CONFIGURATION
// Update `price` with the exact approved amount (e.g., "₹2,499") when confirmed,
// or leave as null for live rates directly on FacePass.
// =========================================================================
export const EARLY_BIRD_PASS = {
  badge: "EARLY BIRD",
  title: "Early Bird Pass",
  subtitle: "Limited Early Access",
  // Configurable price variable: set to string like "₹2,499" or keep null to display live FacePass booking
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
            <span>Official Event Pass</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Reserve Your <span className="text-maroon-gradient">Garba Pass</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-sm sm:text-base text-[#2A1613] font-normal max-w-2xl mx-auto"
          >
            Secure your Early Bird Pass for 9 glorious nights of dance, music, and celebration.
          </motion.p>
        </div>

        {/* Single Centered Early Bird Pricing Card */}
        <div className="max-w-xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C] p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Badges */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-extrabold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F2D18B]" />
                <span>{EARLY_BIRD_PASS.badge}</span>
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
                {EARLY_BIRD_PASS.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8B6914] font-bold mt-1">
                {EARLY_BIRD_PASS.subtitle} • 11th – 19th October 2026
              </p>
            </div>

            {/* Price Block */}
            <div className="mb-8 pb-6 border-b border-[#7A1B0C]/20 bg-[#F4EDE2]/70 rounded-2xl p-4 sm:p-5 text-center">
              {EARLY_BIRD_PASS.price ? (
                <div>
                  <div className="font-playfair text-4xl sm:text-5xl font-extrabold text-[#7A1B0C]">
                    {EARLY_BIRD_PASS.price}
                  </div>
                  <span className="text-xs sm:text-sm text-[#2A1613] font-medium block mt-1">
                    / {EARLY_BIRD_PASS.period}
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
                    {EARLY_BIRD_PASS.period} (9 Festive Nights)
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
                {EARLY_BIRD_PASS.benefits.map((benefit, i) => (
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
                href={EARLY_BIRD_PASS.bookingUrl}
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
