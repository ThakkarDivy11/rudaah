"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Droplets, Mountain, Wind, Sun, Award } from "lucide-react";

export default function AboutSection() {
  const elements = [
    {
      name: "Prithvi (Earth)",
      desc: "Grounded cultural roots & majestic architectural stage designs.",
      icon: Mountain,
    },
    {
      name: "Jal (Water)",
      desc: "Fluid grace, rhythmic movements, and refreshing guest comfort.",
      icon: Droplets,
    },
    {
      name: "Agni (Fire)",
      desc: "Passionate dhol beats, radiant lighting, and high-energy Garba.",
      icon: Flame,
    },
    {
      name: "Vayu (Air)",
      desc: "Soaring vocal melodies and cool open-air venue breezes.",
      icon: Wind,
    },
    {
      name: "Aakash (Space)",
      desc: "Under the vast starry sky, uniting thousands in celebration.",
      icon: Sun,
    },
  ];

  return (
    <section id="about" className="py-24 bg-paper-texture relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D6B26E]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#7A1B0C]/30 shadow-xl aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/images/extracted_img_14.jpg"
                alt="Rudaah Garba 2026 Ahmedabad Panch Tatva Celebration"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE2]/80 via-transparent to-transparent opacity-80" />

              {/* Overlaid Gold Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#E8DCCB]/95 backdrop-blur-md border border-[#7A1B0C]/40 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7A1B0C] flex items-center justify-center text-[#F7EFE4]">
                    <Award className="w-5 h-5 text-[#F2D18B]" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-base font-bold text-[#7A1B0C]">
                      Panch Tatva Garba
                    </h4>
                    <p className="text-xs text-[#2A1613] font-medium">Inspired by Five Elements of Nature</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#7A1B0C] bg-[#F4EDE2] px-2.5 py-1 rounded-full border border-[#7A1B0C]/20">
                  Ahmedabad
                </span>
              </div>
            </div>

            {/* Corner Decorative Frame Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#7A1B0C]/40 rounded-br-2xl hidden sm:block pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#7A1B0C]/40 rounded-tl-2xl hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Story & Panch Tatva */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="font-cormorant text-xl italic text-[#8B6914] font-semibold tracking-widest uppercase block mb-1">
                About Our Celebration
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C] leading-tight">
                Where Culture Meets <span className="text-maroon-gradient">Creation</span>
              </h2>
            </div>

            <p className="font-poppins text-base text-[#2A1613] font-normal leading-relaxed">
              <strong className="text-[#7A1B0C] font-bold">Rudaah Garba</strong> is a thoughtfully curated Navratri celebration created jointly by <strong className="text-[#7A1B0C]">Raghuvanshi Events</strong> and <strong className="text-[#7A1B0C]">Rashmi Raj Events</strong>. Designed around culture, community, and meaningful experiences, Rudaah brings together music, tradition, and artistry to create one of Ahmedabad’s most engaging festive destinations.
            </p>

            <p className="font-poppins text-sm text-[#4A231A] font-normal leading-relaxed">
              Every detail of Rudaah Garba draws deep inspiration from the five sacred elements of nature—Prithvi, Jal, Agni, Vayu, and Aakash—reflected across our grand stage architecture, ambient lighting, soundscapes, and audience hospitality.
            </p>

            {/* Panch Tatva Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {elements.map((item, idx) => {
                const IconComponent = item.icon;
                const isLastOdd = idx === elements.length - 1 && elements.length % 2 !== 0;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl bg-[#E8DCCB] border border-[#7A1B0C]/20 flex items-start gap-3 hover:border-[#7A1B0C]/50 transition-colors shadow-sm ${
                      isLastOdd ? "sm:col-span-2 sm:w-[calc(50%-0.375rem)] sm:mx-auto" : ""
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-[#7A1B0C] text-[#F2D18B] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-sm font-bold text-[#7A1B0C]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#2A1613] font-medium mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );

}
