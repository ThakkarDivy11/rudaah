"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OrganizersSection from "@/components/OrganizersSection";
import PastEventsSection from "@/components/PastEventsSection";
import HighlightsSection from "@/components/HighlightsSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import VenueSection from "@/components/VenueSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SponsorModal from "@/components/Modals/SponsorModal";

export default function Home() {
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-paper-texture text-[#2A1613] relative selection:bg-[#7A1B0C]/20 selection:text-[#7A1B0C]">
      {/* Interactive Preloader Screen */}
      <Preloader />

      {/* Navigation Header */}
      <Navbar onOpenBookModal={() => setIsSponsorModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection
        onOpenBookModal={() => setIsSponsorModalOpen(true)}
        onOpenSponsorModal={() => setIsSponsorModalOpen(true)}
      />

      {/* About & Panch Tatva Section */}
      <AboutSection />

      {/* Organizers Section (Raghuvanshi × Rashmi Raj) */}
      <OrganizersSection />

      {/* Dedicated Past Events & Legacy Section */}
      <PastEventsSection />

      {/* Event Highlights Section */}
      <HighlightsSection />


      {/* Photo Gallery & Lightbox */}
      <GallerySection />

      {/* Sponsorship & Partners Section */}
      <SponsorsSection onOpenSponsorModal={() => setIsSponsorModalOpen(true)} />

      {/* Venue & Location Section */}
      <VenueSection />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Contact & Inquiry Lead Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingActions />

      {/* Sponsorship Dialog Modal */}
      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
      />

    </main>
  );
}
