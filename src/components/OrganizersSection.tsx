"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Star, ShieldCheck } from "lucide-react";

export default function OrganizersSection() {
  const organizers = [
    {
      name: "Raghuvanshi Events",
      title: "Pioneers in Grand Scale Cultural Productions",
      logo: "/images/raghuvanshi-logo.png",
      tagline: "Crafting Unforgettable Festive Spectacles",
      highlights: ["15+ Years Event Excellence", "50+ Mega Concerts", "Premium Hospitality Focus"],
    },
    {
      name: "Rashmi Raj Events",
      title: "Creators of Authentic Heritage Experiences",
      logo: "/images/rashmiraj-logo.png",
      tagline: "Blending Tradition with Modern Event Brilliance",
      highlights: ["Custom Stage Artistry", "Top Celebrity Relations", "Zero-Compromise Security"],
    },
  ];

  const pastEvents = ["Karnavati Beats 2025", "Raataldi 2025", "Zerovig 2024"];

  return (
    <section id="organizers" className="py-24 bg-paper-texture relative border-y border-[#7A1B0C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Official Event Organizers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Brought To You By <span className="text-maroon-gradient">Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            A powerful collaboration of two renowned event houses dedicated to delivering an unmatched Garba experience for 120,000+ attendees.
          </motion.p>
        </div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {organizers.map((org, idx) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative rounded-3xl bg-[#E8DCCB]/90 border-2 border-[#7A1B0C]/30 p-8 hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 text-center sm:text-left">
                {/* Logo Container in Royal Maroon */}
                <div className="relative w-28 h-28 p-3 rounded-2xl bg-[#7A1B0C] border border-[#D6B26E]/40 flex items-center justify-center shrink-0 shadow-md">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={96}
                    height={96}
                    className="object-contain drop-shadow-sm"
                  />
                </div>

                <div>
                  <h3 className="font-playfair text-2xl font-bold text-[#7A1B0C]">
                    {org.name}
                  </h3>
                  <p className="font-cormorant text-base text-[#8B6914] font-semibold italic mt-0.5">
                    {org.tagline}
                  </p>
                  <p className="text-xs text-[#2A1613] mt-1 font-bold">{org.title}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-[#7A1B0C]/20">
                {org.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-[#2A1613] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#7A1B0C] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );


}
