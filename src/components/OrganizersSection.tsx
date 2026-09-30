"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, Mail, Phone, ShieldCheck, Sparkles, Building2 } from "lucide-react";

export default function OrganizersSection() {
  return (
    <section id="partners" className="py-20 sm:py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15 scroll-mt-20">
      {/* Anchor alias for #organizers and #sponsors */}
      <div id="organizers" className="absolute -top-20" />
      <div id="sponsors" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-xs"
          >
            <Handshake className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Event Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            OUR <span className="text-maroon-gradient">EVENT PARTNERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-sm sm:text-base text-[#2A1613] font-normal max-w-2xl mx-auto"
          >
            The visionary production and management powerhouses behind Rudaah Garba 2026.
          </motion.p>
        </div>

        {/* Two Partner Cards Grid: Raghuvanshi Events FIRST, Events by Rashmiraj SECOND */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {/* ================================================= */}
          {/* PARTNER 1: Raghuvanshi Events (Appears FIRST)     */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-6 sm:p-8 flex flex-col justify-between hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group"
          >
            <div>
              {/* Header: Logo & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3 rounded-2xl bg-[#7A1B0C] border border-[#D6B26E]/40 flex items-center justify-center shrink-0 shadow-md">
                  <Image
                    src="/images/raghuvanshi-logo.png"
                    alt="Raghuvanshi Events"
                    width={80}
                    height={80}
                    className="object-contain drop-shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#8B6914] uppercase tracking-widest block">
                    Event Partner
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                    Raghuvanshi Events
                  </h3>
                </div>
              </div>

              {/* Three Specific Pillar Features */}
              <div className="space-y-4 pt-4 border-t border-[#7A1B0C]/20 text-left">
                {/* The Structural Power */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#7A1B0C] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Structural Power:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    Famous for building the most secure, massive, and luxurious AC domes in Gujarat.
                  </p>
                </div>

                {/* The Creative Edge */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8B6914] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Creative Edge:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    Pioneers in transforming empty grounds into high-fashion visual wonderlands.
                  </p>
                </div>

                {/* The Technical Precision */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#7A1B0C] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Technical Precision:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    Experts in cutting-edge light, sound, and heavy-scale stage engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Clickable Contact Details */}
            <div className="mt-8 pt-5 border-t border-[#7A1B0C]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-[#7A1B0C]">
              {/* Clickable Email */}
              <a
                href="mailto:raghuvanshievents12@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#5C1408] transition-colors group/link"
              >
                <div className="p-1.5 rounded-lg bg-[#F4EDE2] border border-[#7A1B0C]/20 group-hover/link:bg-[#E8DCCB] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#7A1B0C]" />
                </div>
                <span className="underline underline-offset-2">raghuvanshievents12@gmail.com</span>
              </a>

              {/* Clickable Phone */}
              <a
                href="tel:+917698716555"
                className="inline-flex items-center gap-2 hover:text-[#5C1408] transition-colors group/link"
              >
                <div className="p-1.5 rounded-lg bg-[#F4EDE2] border border-[#7A1B0C]/20 group-hover/link:bg-[#E8DCCB] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#7A1B0C]" />
                </div>
                <span className="underline underline-offset-2">+91 76987 16555</span>
              </a>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* PARTNER 2: Events by Rashmiraj                     */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-6 sm:p-8 flex flex-col justify-between hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group"
          >
            <div>
              {/* Header: Logo & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3 rounded-2xl bg-[#7A1B0C] border border-[#D6B26E]/40 flex items-center justify-center shrink-0 shadow-md">
                  <Image
                    src="/images/rashmiraj-logo.png"
                    alt="Events by Rashmiraj"
                    width={80}
                    height={80}
                    className="object-contain drop-shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#8B6914] uppercase tracking-widest block">
                    Event Partner
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                    Events by Rashmiraj
                  </h3>
                </div>
              </div>

              {/* Three Specific Pillar Features */}
              <div className="space-y-4 pt-4 border-t border-[#7A1B0C]/20 text-left">
                {/* The Reputation */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#7A1B0C] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Reputation:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    Trusted by the city&apos;s elite for managing the grandest cultural celebrations.
                  </p>
                </div>

                {/* The Ground Reality */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8B6914] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Ground Reality:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    Known for flawless crowd flow and premium hospitality layouts.
                  </p>
                </div>

                {/* The Trust Factor */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#7A1B0C] shrink-0" />
                    <span className="font-playfair text-sm sm:text-base font-bold text-[#7A1B0C]">
                      The Trust Factor:
                    </span>
                  </div>
                  <p className="font-poppins text-xs sm:text-sm text-[#2A1613] leading-relaxed pl-6">
                    The production backbone that ensures the entire event runs smoothly behind the scenes.
                  </p>
                </div>
              </div>
            </div>

            {/* Note / Trust Statement */}
            <div className="mt-8 pt-5 border-t border-[#7A1B0C]/20 flex items-center justify-between text-xs text-[#8B6914] font-semibold">
              <span>Grand Cultural Celebrations</span>
              <span>• Flawless Production</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
