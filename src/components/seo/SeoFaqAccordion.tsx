"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem, FaqJsonLd } from "./JsonLd";

interface SeoFaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export default function SeoFaqAccordion({
  title = "Frequently Asked Questions",
  subtitle = "Find clear answers regarding Navratri celebrations and Garba nights in Ahmedabad.",
  faqs,
}: SeoFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-16 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl bg-[#E8DCCB]/60 border border-[#7A1B0C]/20 shadow-xs">
      {/* FAQ Schema */}
      <FaqJsonLd faqs={faqs} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold uppercase tracking-wider border border-[#7A1B0C]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Guide & FAQs</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            {title}
          </h2>
          <p className="font-poppins text-sm text-[#2A1613] max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/25 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-playfair text-base sm:text-lg font-bold text-[#7A1B0C] hover:text-[#5C1408] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#7A1B0C] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-0 border-t border-[#7A1B0C]/15"
                    >
                      <p className="font-poppins text-sm text-[#2A1613] leading-relaxed pt-3 font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
