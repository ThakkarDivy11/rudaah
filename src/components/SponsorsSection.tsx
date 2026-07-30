"use client";

import { motion } from "framer-motion";
import { Building2, Award, Sparkles, CheckCircle2, Download } from "lucide-react";

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
    <section id="sponsors" className="py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Brand Association</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Sponsorship & <span className="text-maroon-gradient">Partnerships</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Position your brand in front of 120,000+ premium visitors and 5 Million+ digital impressions during Gujarat’s biggest festive celebration.
          </motion.p>
        </div>

        {/* Sponsorship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/30 p-6 flex flex-col justify-between hover:border-[#7A1B0C]/60 transition-all duration-300 shadow-md group"
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

                <h3 className="font-playfair text-xl font-bold text-[#7A1B0C] mb-4">
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
          className="rounded-3xl bg-gradient-to-r from-[#7A1B0C] via-[#5C1408] to-[#7A1B0C] text-[#F7EFE4] border-2 border-[#D6B26E]/40 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
        >
          <div className="space-y-2 text-center lg:text-left z-10">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F2D18B]">
              Download Official Sponsorship Proposal PDF
            </h3>
            <p className="font-poppins text-sm text-[#F7EFE4]/90 max-w-xl font-normal">
              Get complete tier breakdowns, floor plans, demographic reach charts, and brand activation guidelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
            <button
              onClick={onOpenSponsorModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F2D18B] text-[#7A1B0C] font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-[#E6C37B] transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span>Apply For Sponsorship</span>
            </button>

            <a
              href="/sponsorship-deck"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#5C1408] border border-[#F2D18B]/50 text-[#F7EFE4] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#4A1006] transition-colors"
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
