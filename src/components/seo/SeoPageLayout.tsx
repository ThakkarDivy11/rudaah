"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowLeft, Calendar, MapPin, Ticket } from "lucide-react";
import Footer from "@/components/Footer";
import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbItem } from "./JsonLd";
import SponsorModal from "@/components/Modals/SponsorModal";

interface SeoPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export default function SeoPageLayout({ breadcrumbs, children }: SeoPageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Top Navratri", href: "/top-navratri-in-ahmedabad-2026" },
    { name: "Best Garba", href: "/best-garba-in-ahmedabad-2026" },
    { name: "Garba Events", href: "/garba-events-ahmedabad-2026" },
    { name: "Navratri Events", href: "/navratri-events-ahmedabad-2026" },
    { name: "Venue", href: "/#venue" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-paper-texture text-[#2A1613] selection:bg-[#7A1B0C]/20 selection:text-[#7A1B0C]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#F4EDE2]/95 backdrop-blur-md border-b border-[#7A1B0C]/20 py-3 shadow-[0_4px_20px_rgba(122,27,12,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/rudaah-logo.png"
                alt="Rudaah Garba Ahmedabad Logo"
                fill
                className="object-contain drop-shadow-xs"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg sm:text-xl font-bold text-[#7A1B0C] tracking-wide group-hover:text-[#5C1408] transition-colors">
                Rudaah GARBA
              </span>
              <span className="text-[9px] sm:text-[10px] font-cormorant tracking-widest text-[#8B6914] uppercase -mt-1 font-bold">
                AHMEDABAD • 2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-[#7A1B0C] hover:text-[#B8860B] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-5 py-2 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-semibold text-xs flex items-center gap-1.5 hover:bg-[#5C1408] shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2D18B]" />
              <span>Event Inquiries</span>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/#contact"
              className="px-3 py-1.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-semibold text-xs flex items-center gap-1"
            >
              <span>Contact</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#E8DCCB] border border-[#7A1B0C]/30 text-[#7A1B0C]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#130B0A]/95 text-[#F7EFE4] border-b border-[#D6B26E]/20 px-6 py-4 space-y-3">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-[#2A1613]/60 hover:bg-[#4A231A] text-sm text-[#F7EFE4] hover:text-[#F2D18B] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSponsorModalOpen(true);
              }}
              className="w-full py-2.5 rounded-xl bg-gold-gradient text-[#130B0A] font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Sponsor / Partner Inquiry</span>
            </button>
          </div>
        )}
      </header>

      {/* Breadcrumbs Navigation */}
      <div className="border-b border-[#7A1B0C]/10 bg-[#E8DCCB]/40">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Main Content Area */}
      <main>{children}</main>

      {/* Verified Event Quick Info Banner */}
      <aside className="border-y border-[#7A1B0C]/20 bg-[#E8DCCB] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B6914]">
              Official Navratri 2026 Celebration
            </span>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#7A1B0C]">
              Experience Rudaah Garba 2026 on SG Highway
            </h3>
            <p className="text-xs sm:text-sm text-[#2A1613]">
              Organized by Raghuvanshi Events × Rashmi Raj Events • 10 Grand Nights of Panch Tatva Raas
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-bold hover:bg-[#5C1408] transition-colors shadow-sm flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore Rudaah Garba 2026</span>
            </Link>
            <Link
              href="/#venue"
              className="px-5 py-2.5 rounded-full bg-[#F4EDE2] border border-[#7A1B0C]/30 text-[#7A1B0C] text-xs font-bold hover:bg-[#E8DCCB] transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B6914]" />
              <span>View Venue & Map</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Global Footer */}
      <Footer />

      {/* Sponsor Modal */}
      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
      />
    </div>
  );
}
