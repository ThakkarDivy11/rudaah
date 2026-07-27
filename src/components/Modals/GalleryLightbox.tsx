"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryLightboxProps {
  isOpen: boolean;
  selectedImage: { src: string; alt: string; category: string } | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  isOpen,
  selectedImage,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  if (!isOpen || !selectedImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-[#2A1613] text-[#F2D18B] border border-[#D6B26E]/40 hover:bg-[#4A231A] transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#2A1613]/80 text-[#F2D18B] border border-[#D6B26E]/30 hover:bg-[#4A231A] transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div
          className="relative max-w-5xl w-full max-h-[80vh] aspect-[16/10] rounded-2xl overflow-hidden border border-[#D6B26E]/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            fill
            className="object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center justify-between text-white">
            <div>
              <p className="font-playfair text-lg font-bold text-[#F2D18B]">
                {selectedImage.alt}
              </p>
              <span className="text-xs text-[#C7B9A7] font-mono uppercase">
                Category: {selectedImage.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#D6B26E]">
              <Maximize2 className="w-4 h-4" />
              <span>Rudaah Garba Gallery</span>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#2A1613]/80 text-[#F2D18B] border border-[#D6B26E]/30 hover:bg-[#4A231A] transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
