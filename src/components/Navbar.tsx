"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBookModal: () => void;
}

export default function Navbar({ onOpenBookModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Legacy", href: "#legacy" },
    { name: "Highlights", href: "#highlights" },
    { name: "Partners", href: "#partners" },
    { name: "Passes", href: "#passes" },
    { name: "Venue", href: "#venue" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-[#F4EDE2]/95 backdrop-blur-md border-b border-[#7A1B0C]/20 py-3 shadow-[0_4px_20px_rgba(122,27,12,0.1)]"
          : "bg-gradient-to-b from-[#F4EDE2]/90 via-[#F4EDE2]/60 to-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/rudaah-logo.png"
              alt="Rudaah Garba Logo"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-playfair text-xl font-bold text-[#7A1B0C] tracking-wide group-hover:text-[#5C1408] transition-colors">
              Rudaah GARBA
            </span>
            <span className="text-[10px] font-cormorant tracking-widest text-[#8B6914] uppercase -mt-1 font-bold">
              AHMEDABAD • 2026
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 mx-auto">
          {navLinks.filter((l) => l.name !== "Contact").map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-[#7A1B0C] hover:text-[#B8860B] transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA (Pushed comfortably to the right) */}
        <div className="hidden xl:flex items-center gap-3 ml-auto pl-6 shrink-0">
          <a
            href="https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-bold text-xs flex items-center gap-2 shadow-md hover:bg-[#5C1408] transition-all whitespace-nowrap"
          >
            <div className="relative w-4 h-4 rounded overflow-hidden shrink-0 bg-white/20 p-0.5">
              <Image
                src="/images/facepass-logo.webp"
                alt="FacePass"
                fill
                className="object-contain"
              />
            </div>
            <span>BOOK PASS</span>
          </a>

          <Link
            href="#contact"
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-transform active:scale-95 shadow-xs shrink-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7A1B0C] via-[#B8860B] to-[#7A1B0C]" />
            <span className="relative px-4 py-2 rounded-full bg-[#E8DCCB] text-[#7A1B0C] flex items-center gap-1.5 hover:bg-[#DBCBBA] transition-all whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#8B6914] group-hover:rotate-12 transition-transform" />
              <span>Contact</span>
            </span>
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <div className="relative w-3.5 h-3.5 rounded overflow-hidden shrink-0 bg-white/20 p-0.5">
              <Image
                src="/images/facepass-logo.webp"
                alt="FacePass"
                fill
                className="object-contain"
              />
            </div>
            <span>Book Pass</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#E8DCCB] border border-[#7A1B0C]/30 text-[#7A1B0C] hover:bg-[#DBCBBA] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#130B0A]/95 backdrop-blur-xl border-b border-[#D6B26E]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#4A231A]/60">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/rudaah-logo.png"
                    alt="Rudaah"
                    width={36}
                    height={36}
                  />
                  <span className="font-playfair text-lg text-gold-gradient font-bold">
                    Rudaah GARBA
                  </span>
                </div>
                <span className="text-xs text-[#C7B9A7] font-cormorant italic">
                  Sarkhej - Gandhinagar Hwy
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg bg-[#2A1613]/50 text-[#F7EFE4] hover:text-[#F2D18B] hover:bg-[#4A231A]/50 text-sm font-medium border border-[#D6B26E]/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#4A231A]/60 flex flex-col gap-3">
                <a
                  href="https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gold-gradient text-[#130B0A] font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-transform"
                >
                  <div className="relative w-4 h-4 rounded overflow-hidden shrink-0">
                    <Image
                      src="/images/facepass-logo.webp"
                      alt="FacePass"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>BOOK YOUR PASS (FacePass)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
