"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Ticket, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingActionsProps {
  onOpenBookModal: () => void;
}

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Buttons Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919104819600?text=Hi%20Rudaah%20Garba%20Team,%20I%20want%20to%20inquire%20about%20the%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          aria-label="WhatsApp Support"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] border border-[#D6B26E]/40 shadow-lg hover:bg-[#5C1408] active:scale-95 transition-all flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}


