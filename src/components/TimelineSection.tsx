"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Star } from "lucide-react";

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);

  const timelineDays = [
    {
      day: 1,
      title: "Ghatasthapana & Aagman Night",
      date: "Day 1",
      theme: "Divine Beginning & Traditional Garba Opening",
      highlights: "Grand Deep Praction, Traditional Dhol Tasha welcome, Vedic Aarti & Garba Raas opening circle.",
    },
    {
      day: 2,
      title: "Rangeelo Gujarati Raas",
      date: "Day 2",
      theme: "Royal Heritage & Folk Rhythms",
      highlights: "Classic Chaniya Choli contest, Folk fusion acoustics, and high-energy 3-Taali Garba.",
    },
    {
      day: 3,
      title: "Dholida Beats Special",
      date: "Day 3",
      theme: "Traditional Percussion Symphony",
      highlights: "50+ Live Dhol performers synchronised Garba circle with celebrity guest singer.",
    },
    {
      day: 4,
      title: "Fusion Garba Night",
      date: "Day 4",
      theme: "Modern Harmonies & Classic Raas",
      highlights: "Electro-folk music orchestration, youth fusion Garba steps, and light show spectacle.",
    },
    {
      day: 5,
      title: "Garba Samrat Night",
      date: "Day 5",
      theme: "Celebrity Artist Headliner",
      highlights: "Live performance by Osman Mir, special VIP lounge activations, and best dancer awards.",
    },
    {
      day: 6,
      title: "Dandiya Mahotsav",
      date: "Day 6",
      theme: "Intricate Sticks & Sync Movements",
      highlights: "Special Dandiya competition with lucrative cash prizes and ethnic costume judging.",
    },
    {
      day: 7,
      title: "Maha Aarti & Navami Night",
      date: "Day 7",
      theme: "1,000+ Sacred Lamps Spectacle",
      highlights: "Grandest Maha Aarti ceremony, drone illumination, and divine devotional Garba hymns.",
    },
    {
      day: 8,
      title: "Mega Garba Night",
      date: "Day 8",
      theme: "High Energy Non-Stop Raas",
      highlights: "Continuous 4-hour non-stop Garba circle with multi-artist jam session.",
    },
    {
      day: 9,
      title: "Dussehra Victory Finale",
      date: "Day 9",
      theme: "Celebration of Triumph & Joy",
      highlights: "Victory fireworks display, grand stage finale, and awards ceremony for best Garba couples.",
    },
    {
      day: 10,
      title: "Sharad Purnima Special Raas",
      date: "Day 10",
      theme: "Moonlight Raas & Sweet Prashad",
      highlights: "Special full moon Raas under open canopy, complimentary Doodh Poha prashad, and closing farewell.",
    },
  ];

  const currentTimeline = timelineDays.find((d) => d.day === activeDay) || timelineDays[0];

  return (
    <section id="timeline" className="py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Schedule & Nights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            10-Day Event <span className="text-maroon-gradient">Timeline</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Each night at Rudaah Garba offers a distinct theme, celebrity artists, and festive celebrations.
          </motion.p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {timelineDays.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0 transition-all ${
                activeDay === item.day
                  ? "bg-[#7A1B0C] text-[#F7EFE4] shadow-md scale-105"
                  : "bg-[#E8DCCB] text-[#7A1B0C] hover:bg-[#DBCBBA] border border-[#7A1B0C]/20"
              }`}
            >
              Day {item.day}
            </button>
          ))}
        </div>

        {/* Detailed Timeline Card */}
        <motion.div
          key={currentTimeline.day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-8 sm:p-12 shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-15 pointer-events-none font-playfair text-9xl font-bold text-[#7A1B0C]">
            0{currentTimeline.day}
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-mono font-bold">
                NIGHT {currentTimeline.day} OF 10
              </span>
              <div className="flex items-center gap-1 text-xs text-[#8B6914] font-bold">
                <Clock className="w-3.5 h-3.5 text-[#7A1B0C]" />
                <span>Gates Open 7:30 PM Onwards</span>
              </div>
            </div>

            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-[#7A1B0C]">
              {currentTimeline.title}
            </h3>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#8B6914] font-bold block">
                Night Theme & Vibe
              </span>
              <p className="font-cormorant text-xl text-[#7A1B0C] italic font-semibold">
                “{currentTimeline.theme}”
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#7A1B0C]/20">
              <span className="text-xs uppercase tracking-wider text-[#8B6914] font-bold block">
                Event Highlights & Activities
              </span>
              <p className="font-poppins text-sm text-[#2A1613] font-medium leading-relaxed">
                {currentTimeline.highlights}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-[#7A1B0C]">
              <span className="flex items-center gap-1 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#7A1B0C]" /> Live Orchestra
              </span>
              <span className="flex items-center gap-1 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/30 shadow-xs">
                <Star className="w-3.5 h-3.5 text-[#7A1B0C]" /> Best Dressed Prizes
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
