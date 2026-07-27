"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Users, Star, Award } from "lucide-react";

export default function PastEventsSection() {
  const pastEvents = [
    {
      title: "Karnavati Beats 2025",
      subtitle: "Ahmedabad's Blockbuster Navratri",
      year: "2025",
      footfall: "85,000+ Visitors",
      image: "/images/karnavati-beats-legacy.jpg",
      description:
        "A monumental 10-night Garba spectacle featuring Gujarat's leading folk orchestra, grand stage architecture, and seamless crowd management.",
      highlights: ["Grand 360° Stage", "Celebrity Orchestra", "100% VIP Hospitality"],
    },
    {
      title: "Raataldi 2025",
      subtitle: "Cultural Heritage & Garba Raas",
      year: "2025",
      footfall: "70,000+ Attendees",
      image: "/images/raataldi-legacy.jpg",
      description:
        "An authentic cultural celebration celebrating traditional Gujarati Raas with live dhol beats, vibrant food markets, and electric festive energy.",
      highlights: ["Live Dhol Ensemble", "Gourmet Food Zone", "Strict Security"],
    },
    {
      title: "Zerovig 2024",
      subtitle: "Iconic Festive Celebration",
      year: "2024",
      footfall: "60,000+ Revelers",
      image: "/images/zerovig-legacy.jpg",
      description:
        "A high-octane Navratri experience known for state-of-the-art concert sound systems, dynamic lighting, and record-breaking footfalls.",
      highlights: ["Concert Sound Rigs", "Digital Entry Passes", "Valet Parking"],
    },
  ];


  return (
    <section id="legacy" className="py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15 overflow-hidden">
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D6B26E]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Trophy className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Proven Track Record</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Our Legacy Of <span className="text-maroon-gradient">Mega Events</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Take a look at the previous blockbuster festive productions organized by Raghuvanshi Events × Rashmi Raj Events.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 overflow-hidden hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group flex flex-col justify-between"
            >
              {/* Event Image Banner */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E8DCCB] via-transparent to-transparent opacity-90" />

                  {/* Footfall Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#E8DCCB]/95 backdrop-blur-md border border-[#7A1B0C]/30 text-xs font-bold text-[#7A1B0C] shadow-sm flex items-center gap-1 z-10">
                    <Users className="w-3.5 h-3.5 text-[#8B6914]" />
                    <span>{event.footfall}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-[#7A1B0C]">
                        {event.title}
                      </h3>
                      <p className="font-cormorant text-sm text-[#8B6914] font-bold tracking-wide italic">
                        {event.subtitle}
                      </p>
                    </div>

                    {/* Year Edition Badge */}
                    <div className="px-3 py-1 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-mono font-bold shadow-sm flex items-center gap-1 shrink-0">
                      <Star className="w-3 h-3 text-[#F2D18B]" />
                      <span>{event.year}</span>
                    </div>
                  </div>


                  <p className="font-poppins text-xs text-[#2A1613] font-medium leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-3 border-t border-[#7A1B0C]/20 space-y-2">
                    <span className="text-[11px] font-bold text-[#7A1B0C] uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#F4EDE2] border border-[#7A1B0C]/20 text-[11px] font-bold text-[#7A1B0C]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-full py-2.5 rounded-xl bg-[#7A1B0C] text-[#F7EFE4] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                  <Award className="w-4 h-4 text-[#F2D18B]" />
                  <span>Organized By Joint Team</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
