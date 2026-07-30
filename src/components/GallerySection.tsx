"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";
import GalleryLightbox from "./Modals/GalleryLightbox";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "/images/extracted_img_23.jpg",
      alt: "Royal Stage & Light Architecture",
      category: "stage",
    },
    {
      id: 2,
      src: "/images/extracted_img_14.jpg",
      alt: "Night Garba Raas Energy",
      category: "raas",
    },
    {
      id: 3,
      src: "/images/extracted_img_24.jpg",
      alt: "Crowd Celebration & Confetti",
      category: "atmosphere",
    },
    {
      id: 4,
      src: "/images/extracted_img_28.jpg",
      alt: "Traditional Gujarati Dhol & Orchestra",
      category: "raas",
    },
    {
      id: 5,
      src: "/images/extracted_img_26.jpg",
      alt: "Grand Arena Light Display",
      category: "stage",
    },
    {
      id: 6,
      src: "/images/extracted_img_21.jpg",
      alt: "Celebrity Performance Night",
      category: "stage",
    },
    {
      id: 7,
      src: "/images/extracted_img_18.jpg",
      alt: "Festive Joy & Memories",
      category: "atmosphere",
    },
    {
      id: 8,
      src: "/images/extracted_img_19.jpg",
      alt: "Cultural Costumes & Attire",
      category: "raas",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-paper-texture relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold tracking-wider uppercase border border-[#7A1B0C]/30 shadow-sm"
          >
            <Camera className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Memories & Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1B0C]"
          >
            Photo <span className="text-maroon-gradient">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-poppins text-base text-[#2A1613] font-normal"
          >
            A glimpse into the magical nights, royal ambiance, and energetic Garba circles of Rudaah Garba.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 pb-6 border-b border-[#7A1B0C]/15">
          {[
            { id: "all", label: "All Photos" },
            { id: "stage", label: "Stage & Lighting" },
            { id: "raas", label: "Garba Raas" },
            { id: "atmosphere", label: "Atmosphere & Crowd" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#7A1B0C] text-[#F7EFE4] shadow-md"
                  : "bg-[#E8DCCB] text-[#7A1B0C] hover:bg-[#DBCBBA] border border-[#7A1B0C]/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Standard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#7A1B0C]/20 group cursor-pointer shadow-md"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1B0C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-[#F2D18B]">
                  <span className="font-playfair text-sm font-bold text-[#F7EFE4]">{item.alt}</span>
                  <ZoomIn className="w-4 h-4 text-[#F2D18B]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxIndex !== null}
        selectedImage={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
