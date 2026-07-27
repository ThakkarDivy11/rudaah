"use client";

import { motion } from "framer-motion";
import { Check, Crown, Ticket, Sparkles, Star } from "lucide-react";

interface PassesSectionProps {
  onOpenBookModalWithPass?: (passName: string) => void;
}

export default function PassesSection({ onOpenBookModalWithPass }: PassesSectionProps) {
  const passes = [
    {
      name: "General Single Pass",
      subtitle: "Single Night Entry",
      price: "₹499",
      period: "per night",
      popular: false,
      features: [
        "Single Night Event Access",
        "Garba Ground Access",
        "Food Stalls & Shopping Flea Access",
        "Standard Parking Facility",
      ],
    },
    {
      name: "General Season Pass",
      subtitle: "Full 10 Nights Access",
      price: "₹2,999",
      period: "10 nights season",
      popular: false,
      features: [
        "Access to All 10 Nights",
        "Unrestricted Garba Circle Entry",
        "Access to Food Court & Flea",
        "Complimentary Wristband",
        "Standard Reserved Parking",
      ],
    },
    {
      name: "VIP Season Pass",
      subtitle: "Royal Luxury Experience",
      price: "₹7,999",
      period: "10 nights season",
      popular: true,
      features: [
        "All 10 Nights VIP Fast-Track Entry",
        "Exclusive Elevated VIP Lounge Access",
        "Reserved Front Stage Garba Zone",
        "Dedicated VIP Parking & Valet",
        "Complimentary Gourmet Food Vouchers",
        "Celebrity Meet & Greet Access",
      ],
    },
    {
      name: "Family Group Pass",
      subtitle: "Group of 4 Persons",
      price: "₹9,999",
      period: "10 nights season",
      popular: false,
      features: [
        "Season Pass for 4 Family Members",
        "Family Dedicated Seating Area",
        "Kids Activity Zone Access",
        "Full Food & Shopping Arena Access",
        "Priority Parking Slot",
      ],
    },
  ];

  return (
    <section id="passes" className="py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Ticket className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Passes & Pricing</span>
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
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Select your preferred tier for 10 glorious nights of dance, music, and divine celebration.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {passes.map((pass, idx) => (
            <motion.div
              key={pass.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pass.popular
                  ? "bg-[#E8DCCB] border-2 border-[#7A1B0C] shadow-xl lg:-translate-y-3"
                  : "bg-[#E8DCCB] border border-[#7A1B0C]/30 hover:border-[#7A1B0C]/60 shadow-md"
              }`}
            >
              {/* Highlight Ribbon for VIP Pass */}
              {pass.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Crown className="w-3.5 h-3.5 text-[#F2D18B]" />
                  <span>Most Popular VIP</span>
                </div>
              )}

              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#7A1B0C] mb-1">
                  {pass.name}
                </h3>
                <p className="text-xs text-[#8B6914] font-bold mb-6">{pass.subtitle}</p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#7A1B0C]/20">
                  <span className="font-playfair text-4xl font-extrabold text-[#7A1B0C]">
                    {pass.price}
                  </span>
                  <span className="text-xs text-[#2A1613] font-medium block mt-1">
                    / {pass.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pass.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2A1613] font-medium">
                      <Check className="w-4 h-4 text-[#7A1B0C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <button
                onClick={() =>
                  onOpenBookModalWithPass ? onOpenBookModalWithPass(pass.name) : null
                }
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  pass.popular
                    ? "bg-[#7A1B0C] text-[#F7EFE4] hover:bg-[#5C1408]"
                    : "bg-[#7A1B0C] text-[#F7EFE4] hover:bg-[#5C1408]"
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#F2D18B]" />
                <span>Book Pass</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

}
