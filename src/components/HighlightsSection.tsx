"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Music,
  Mic2,
  Utensils,
  ShoppingBag,
  ShieldCheck,
  Car,
} from "lucide-react";

export default function HighlightsSection() {
  const highlights = [
    {
      title: "10 Nights",
      subtitle: "Non-Stop Celebration",
      description: "Ten glorious nights filled with traditional Garba, Raas, and vibrant energy under the stars.",
      icon: CalendarDays,
    },
    {
      title: "120K+ Visitors",
      subtitle: "Grand Footfall",
      description: "Connecting thousands of Garba enthusiasts and families from across Gujarat and India.",
      icon: Users,
    },
    {
      title: "Live Music",
      subtitle: "Traditional & Fusion Symphony",
      description: "State-of-the-art line array sound systems featuring energetic live dhol and folk orchestras.",
      icon: Music,
    },
    {
      title: "Celebrity Artists",
      subtitle: "Renowned Vocalists",
      description: "Performances by Gujarat's most celebrated folk singers, fusion bands, and Garba legends.",
      icon: Mic2,
    },
    {
      title: "Food Court",
      subtitle: "Gourmet Refreshments",
      description: "Multiple food stalls serving delicious Gujarati snacks, fusion cuisine, and hygienic beverages.",
      icon: Utensils,
    },
    {
      title: "Shopping Flea",
      subtitle: "Ethnic Wear & Craft",
      description: "Curated artisan stalls featuring Chaniya Cholis, traditional jewellery, and handmade crafts.",
      icon: ShoppingBag,
    },
    {
      title: "Family Friendly",
      subtitle: "360° Safety & Security",
      description: "Dedicated security personnel, CCTV surveillance, medical emergency team, and lost & found booth.",
      icon: ShieldCheck,
    },
    {
      title: "Ample Parking",
      subtitle: "Valet & Reserved Slots",
      description: "Spacious organized parking with valet options and easy access to SG Highway entrance.",
      icon: Car,
    },
  ];

  return (
    <section id="highlights" className="py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cormorant text-xl italic text-[#8B6914] font-bold tracking-widest uppercase block"
          >
            Unmatched Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Event <span className="text-maroon-gradient">Highlights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Designed to offer the ultimate blend of Gujarati heritage, world-class production, and royal hospitality.
          </motion.p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-[#E8DCCB]/90 border border-[#7A1B0C]/20 p-6 flex flex-col justify-between hover:border-[#7A1B0C]/60 hover:shadow-lg transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#7A1B0C] text-[#F2D18B] border border-[#D6B26E]/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#5C1408] transition-all shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-[#7A1B0C] mb-1">
                    {item.title}
                  </h3>
                  <h4 className="font-cormorant text-sm text-[#8B6914] font-bold tracking-wide uppercase mb-3">
                    {item.subtitle}
                  </h4>
                  <p className="font-poppins text-xs text-[#2A1613] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#7A1B0C]/20 flex items-center justify-between text-[11px] text-[#7A1B0C] font-mono font-bold">
                  <span>RUDAAH 2026</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A1B0C]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

}
