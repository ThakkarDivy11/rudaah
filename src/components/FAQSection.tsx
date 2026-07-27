"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the timings for Rudaah Garba 2026?",
      answer:
        "Gates open daily at 7:30 PM. The Garba Raas and live orchestra performances commence at 8:30 PM and continue until midnight across all 10 nights.",
    },
    {
      question: "Is traditional Gujarati attire mandatory for entry?",
      answer:
        "Yes, traditional Garba attire (Chaniya Choli for women, Kedia or Kurta Pyjama for men) is encouraged to uphold the cultural heritage of the celebration. Security reserves entry rights.",
    },
    {
      question: "How do I receive my physical pass or digital QR ticket?",
      answer:
        "Upon online booking, an instant digital QR ticket is sent to your WhatsApp and email. You can exchange it for your physical wristband at our ground counter or present the digital QR code at entry.",
    },
    {
      question: "Is parking available at the venue?",
      answer:
        "Yes, Rudaah Garba features a dedicated parking lot capable of accommodating over 3,000 vehicles, along with dedicated valet services for VIP pass holders.",
    },
    {
      question: "What security measures are implemented at the ground?",
      answer:
        "We enforce 360° security including 24/7 CCTV surveillance, bouncer security personnel, female security staff, medical first-aid stations, and a dedicated lost & found booth.",
    },
    {
      question: "Are food and drinks permitted from outside?",
      answer:
        "Outside food and beverages are not allowed inside the ground. However, our venue features a large gourmet food court with certified food stalls and hygienic refreshment zones.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-paper-texture relative border-t border-[#7A1B0C]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Frequently Asked <span className="text-maroon-gradient">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            Everything you need to know about attending Rudaah Garba 2026.
          </motion.p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl bg-[#E8DCCB] border border-[#7A1B0C]/30 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-playfair text-lg font-bold text-[#7A1B0C] hover:text-[#5C1408] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7A1B0C] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 border-t border-[#7A1B0C]/20"
                    >
                      <p className="font-poppins text-sm text-[#2A1613] font-normal leading-relaxed pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

}
