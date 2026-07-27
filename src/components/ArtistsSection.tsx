"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mic, Calendar, Sparkles, Music2 } from "lucide-react";

export default function ArtistsSection() {
  const artists = [
    {
      name: "Aditya Gadhvi & Band",
      genre: "Folk & Fusion Garba Legend",
      date: "Night 1 & Night 10 Finale",
      image: "/images/extracted_img_18.jpg",
      tag: "Headliner Artist",
    },
    {
      name: "Kinjal Dave",
      genre: "High Energy Traditional Raas",
      date: "Night 3 & Night 7 (Maha Aarti)",
      image: "/images/extracted_img_19.jpg",
      tag: "Celebrity Singer",
    },
    {
      name: "Osman Mir & Fusion Orchestra",
      genre: "Sufi & Gujarati Folk Symphony",
      date: "Night 5 (Garba Samrat Night)",
      image: "/images/extracted_img_21.jpg",
      tag: "Special Guest",
    },
    {
      name: "Shyamal-Saumil & Vrund",
      genre: "Authentic Classical Garba Beats",
      date: "Night 2 & Night 8",
      image: "/images/extracted_img_26.jpg",
      tag: "Heritage Performers",
    },
  ];

  return (
    <section id="artists" className="py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Music2 className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Star Lineup</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Featured <span className="text-maroon-gradient">Artists & Performers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Immerse yourself in soul-stirring melodies and thrilling dhol rhythms presented by India’s top Gujarati music icons.
          </motion.p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/30 overflow-hidden hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8DCCB] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#7A1B0C] border border-[#D6B26E]/40 backdrop-blur-md text-[11px] font-bold text-[#F2D18B] flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#F2D18B]" />
                  <span>{artist.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#7A1B0C]">
                  {artist.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#8B6914] font-bold">
                  <Mic className="w-3.5 h-3.5 shrink-0 text-[#7A1B0C]" />
                  <span>{artist.genre}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#2A1613] font-medium pt-2 border-t border-[#7A1B0C]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#7A1B0C] shrink-0" />
                  <span>{artist.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

}
