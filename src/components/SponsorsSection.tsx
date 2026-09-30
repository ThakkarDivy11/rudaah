"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Award, Sparkles, CheckCircle2, Download, Handshake } from "lucide-react";

interface SponsorsSectionProps {
  onOpenSponsorModal: () => void;
}

export default function SponsorsSection({ onOpenSponsorModal }: SponsorsSectionProps) {

  const tiers = [
    {
      title: "Title Sponsor",
      price: "₹61 Lakhs",
      benefits: [
        "Naming Rights ('RUDAAH Garba Presented By Brand')",
        "Exclusive Category Rights & Main Stage Branding",
        "Largest Logo across all digital & print creatives",
        "250 VIP Passes + Reserved Valet Parking",
        "Dedicated Brand Launch Film & Co-branded Aftermovie",
      ],
    },
    {
      title: "Powered By",
      price: "₹45 Lakhs",
      benefits: [
        "Secondary Premium Logo Placement",
        "Stage & Grand Entry Gate Branding",
        "LED Commercials on Main Stage Screens",
        "Exclusive Brand Stalls & Experience Zone",
        "100 VIP Passes + Stage Announcements",
      ],
    },
    {
      title: "Co-Powered By",
      price: "₹30 Lakhs",
      benefits: [
        "Premium Logo Placement on all Creatives",
        "LED Screen Commercials & Entry Branding",
        "Experience Stall & Product Sampling",
        "70 VIP Passes + Social Media Reels",
      ],
    },
    {
      title: "Associate Partner",
      price: "₹20 Lakhs",
      benefits: [
        "Venue Branding & Campaign Creatives",
        "Brand Stall & Product Display Space",
        "50 VIP Passes + Digital Mentions",
      ],
    },
  ];

  return (
    <section id="sponsors" className="py-20 sm:py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================================= */}
        {/* 1. DEDICATED OUR SPONSORS / PARTNERS SHOWCASE     */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-xs"
          >
            <Handshake className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Brand Associations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            OUR <span className="text-maroon-gradient">SPONSORS & PARTNERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-sm sm:text-base text-[#2A1613] font-normal"
          >
            Proudly supported by leading organizations and brands partnering to deliver an unforgettable cultural spectacle.
          </motion.p>
        </div>

        {/* Official Partners Showcase (FacePass & 522) */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <span className="text-[11px] font-bold text-[#8B6914] uppercase tracking-widest block text-center mb-6">
              Official Event Partners
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Official Ticketing Partner: FacePass */}
              <a
                href="https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/40 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md hover:border-[#7A1B0C] hover:shadow-xl transition-all group aspect-[16/9]"
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/facepass-logo.webp"
                    alt="FacePass"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-playfair text-lg sm:text-xl font-bold text-[#7A1B0C] leading-snug">
                  FacePass
                </span>
                <span className="text-xs sm:text-sm text-[#8B6914] font-bold mt-1">
                  Official Ticketing Partner
                </span>
              </a>

              {/* Official Food Partner: 522 */}
              <div className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/40 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md hover:border-[#7A1B0C] hover:shadow-xl transition-all group aspect-[16/9]">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 shadow-sm border border-[#8B6914]/30 group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/food-partner-522.webp"
                    alt="522 Food That Tells A Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-playfair text-lg sm:text-xl font-bold text-[#7A1B0C] leading-snug">
                  522
                </span>
                <span className="text-xs sm:text-sm text-[#8B6914] font-bold mt-1">
                  Official Food Partner
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* 2. SPONSORSHIP PACKAGES & PROPOSAL                */}
        {/* ================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2 border-t border-[#7A1B0C]/15 pt-16">
          <span className="text-xs font-bold text-[#8B6914] uppercase tracking-widest block">
            Partner With Us
          </span>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            Sponsorship <span className="text-maroon-gradient">Opportunities</span>
          </h3>
          <p className="font-poppins text-xs sm:text-sm text-[#2A1613] font-normal">
            Position your brand in front of 120,000+ expected visitors and 5 Million+ digital impressions.
          </p>
        </div>

        {/* Sponsorship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/30 p-5 sm:p-6 flex flex-col justify-between hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#7A1B0C] text-[#F2D18B]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-playfair text-lg font-bold text-[#7A1B0C]">
                    {tier.price}
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-bold text-[#7A1B0C] mb-3">
                  {tier.title}
                </h3>

                <ul className="space-y-2.5 mb-6">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#2A1613] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1B0C] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenSponsorModal}
                className="w-full py-3 rounded-xl bg-[#7A1B0C] text-[#F7EFE4] hover:bg-[#5C1408] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F2D18B]" />
                <span>Partner As {tier.title}</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Proposal Download CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#7A1B0C] via-[#5C1408] to-[#7A1B0C] text-[#F7EFE4] border-2 border-[#D6B26E]/40 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl relative overflow-hidden"
        >
          <div className="space-y-2 text-center lg:text-left z-10">
            <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#F2D18B]">
              Download Official Sponsorship Proposal PDF
            </h3>
            <p className="font-poppins text-xs sm:text-sm text-[#F7EFE4]/90 max-w-xl font-normal">
              Get complete tier breakdowns, floor plans, demographic reach charts, and brand activation guidelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 z-10 w-full sm:w-auto">
            <button
              onClick={onOpenSponsorModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#F2D18B] text-[#7A1B0C] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-[#E6C37B] transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span>Apply For Sponsorship</span>
            </button>

            <a
              href="/sponsorship-deck"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#5C1408] border border-[#F2D18B]/50 text-[#F7EFE4] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#4A1006] transition-colors"
            >
              <Download className="w-4 h-4 text-[#F2D18B]" />
              <span>View PDF Deck</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
