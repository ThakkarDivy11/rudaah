"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Sun, Trees, Feather, Sparkles } from "lucide-react";

export default function AboutSection() {
  const teaserBoxes = [
    {
      title: "THE GRAND FOYER",
      desc: "A sophisticated, architectural entry passage combining minimalist structural lines with premium botanical accents.",
      icon: Compass,
    },
    {
      title: "THE CENTRAL SHRINE",
      desc: "The spiritual centerpiece of the pavilion, designed with elegant proportions to radiate quiet reverence and grace.",
      icon: Sun,
    },
    {
      title: "THE CANOPY INSTALLATIONS",
      desc: "Sleek, towering design elements suspended overhead to mirror the majestic scale of a premium forest retreat.",
      icon: Trees,
    },
    {
      title: "THE CURATED PAVILIONS",
      desc: "Bespoke zones showcasing high-end textures, wildlife motifs, and artistic expressions tailored for an elite crowd.",
      icon: Feather,
    },
    {
      title: "THE BESPOKE LIGHTSCAPES",
      desc: "Intelligent, tailored illumination designed to accent the venue’s geometry and create pristine, high-fashion photo backdrops.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-paper-texture relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#D6B26E]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Image with Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#7A1B0C]/30 shadow-xl aspect-[4/3] sm:aspect-[16/11] w-full">
              <Image
                src="/images/extracted_img_14.jpg"
                alt="Navratri 2026 - The Forest of Sacred Energies"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4EDE2]/85 via-transparent to-transparent opacity-90" />

              {/* Overlaid Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#E8DCCB]/95 backdrop-blur-md border border-[#7A1B0C]/40 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#7A1B0C] flex items-center justify-center text-[#F7EFE4] shrink-0">
                    <Trees className="w-4 h-4 sm:w-5 sm:h-5 text-[#F2D18B]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-playfair text-xs sm:text-base font-bold text-[#7A1B0C] truncate">
                      NAVRATRI 2026
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#2A1613] font-medium truncate uppercase tracking-wider">
                      The Forest of Sacred Energies
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#7A1B0C] bg-[#F4EDE2] px-2 sm:px-2.5 py-1 rounded-full border border-[#7A1B0C]/20 shrink-0 ml-2">
                  Niche × Niche
                </span>
              </div>
            </div>

            {/* Corner Decorative Frame Element */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-r-2 border-b-2 border-[#7A1B0C]/40 rounded-br-2xl hidden sm:block pointer-events-none" />
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 border-l-2 border-t-2 border-[#7A1B0C]/40 rounded-tl-2xl hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: Story & The Five Teaser Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <div>
              <span className="font-cormorant text-base sm:text-xl italic text-[#8B6914] font-semibold tracking-widest uppercase block mb-1">
                BEST NAVRATRI IN AHMEDABAD 2026
              </span>
              <h2 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C] leading-tight">
                Traditional Gujarati Garba &amp; <span className="text-maroon-gradient">Architectural Vision</span>
              </h2>
              <h3 className="font-cormorant text-lg sm:text-xl text-[#8B6914] font-semibold italic mt-1">
                The Forest of Sacred Energies • Best Mandli Garba in Ahmedabad
              </h3>
            </div>

            <p className="font-poppins text-sm sm:text-base text-[#2A1613] font-normal leading-relaxed">
              Forest Navratri 2026 introduces an avant-garde approach to traditional celebrations, curated by <strong className="text-[#7A1B0C] font-semibold">Niche by Kamna × Niche Experience</strong>. This season, the pavilion is reimagined as a sophisticated, living ecosystem where organic elements seamlessly blend with modern design. Every corner is meticulously crafted to elevate the sensory experience, offering a refined atmosphere that balances high design with spiritual heritage.
            </p>

            <p className="font-poppins text-xs sm:text-sm text-[#4A231A] font-normal leading-relaxed">
              The layout is a closely guarded secret, intentionally designed to surprise our guests upon arrival. From structural canopy work to state-of-the-art illumination, the entire venue serves as a canvas for premium art installations and curated backdrops. This unrepeatable design will only be unveiled on opening night. Secure your place to witness the evolution of Navratri design firsthand.
            </p>

            {/* The Five Teaser Boxes Grid */}
            <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {teaserBoxes.map((item, idx) => {
                const IconComponent = item.icon;
                const isLastOdd = idx === teaserBoxes.length - 1 && teaserBoxes.length % 2 !== 0;
                return (
                  <div
                    key={idx}
                    className={`p-3.5 sm:p-4 rounded-xl bg-[#E8DCCB] border border-[#7A1B0C]/20 flex items-start gap-3 hover:border-[#7A1B0C]/50 transition-colors shadow-xs ${
                      isLastOdd ? "sm:col-span-2 sm:w-[calc(50%-0.4375rem)] sm:mx-auto" : ""
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-[#7A1B0C] text-[#F2D18B] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-playfair text-xs sm:text-sm font-bold text-[#7A1B0C] tracking-wide uppercase leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#2A1613] font-medium mt-1 leading-relaxed">
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
