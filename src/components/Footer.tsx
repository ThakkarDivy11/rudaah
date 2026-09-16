"use client";

import Image from "next/image";
import Link from "next/link";
import { Send, MapPin, Phone, Mail, Code2 } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2A1613] text-[#F7EFE4] pt-16 pb-12 border-t border-[#D6B26E]/30 relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A231A]/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A231A]/80">
          {/* Brand Info & Organizers */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/rudaah-logo.png"
                  alt="Rudaah Garba"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold text-[#F2D18B]">
                  Rudaah GARBA
                </span>
                <span className="text-[10px] font-cormorant tracking-widest text-[#D6B26E] uppercase -mt-1 font-bold">
                  AHMEDABAD • 2026
                </span>
              </div>
            </div>

            <p className="font-poppins text-xs text-[#C7B9A7] font-light leading-relaxed">
              Ahmedabad&apos;s premier Navratri celebration inspired by the Five Elements of Nature (Panch Tatva). Presenting 10 nights of traditional Garba, celebrity artists, and royal hospitality.
            </p>

            <div className="pt-2 border-t border-[#4A231A] space-y-2">
              <span className="text-[11px] font-bold text-[#D6B26E] uppercase tracking-wider block">
                Jointly Organized By
              </span>
              <div className="flex items-center gap-4 pt-1">
                <div className="relative w-20 h-16 bg-[#130B0A] rounded-xl border border-[#D6B26E]/40 flex items-center justify-center overflow-hidden shadow-sm">
                  <Image
                    src="/images/raghuvanshi-logo.png"
                    alt="Raghuvanshi Events"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <span className="text-xs text-[#F2D18B] font-bold">×</span>
                <div className="relative w-20 h-16 bg-[#130B0A] rounded-xl border border-[#D6B26E]/40 flex items-center justify-center overflow-hidden shadow-sm">
                  <Image
                    src="/images/rashmiraj-logo.png"
                    alt="Rashmi Raj Events"
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#F2D18B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#C7B9A7] font-medium">
              {[
                { name: "Home", href: "/#home" },
                { name: "About", href: "/#about" },
                { name: "Organizers", href: "/#organizers" },
                { name: "Legacy", href: "/#legacy" },
                { name: "Highlights", href: "/#highlights" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Sponsors", href: "/#sponsors" },
                { name: "Venue", href: "/#venue" },
                { name: "FAQ", href: "/#faq" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F2D18B] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ahmedabad Navratri 2026 SEO Guides */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#F2D18B]">
              Ahmedabad Navratri 2026
            </h4>
            <ul className="space-y-2 text-xs text-[#C7B9A7] font-medium">
              <li>
                <Link
                  href="/top-navratri-in-ahmedabad-2026"
                  className="hover:text-[#F2D18B] transition-colors block leading-snug"
                >
                  Top Navratri in Ahmedabad 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/best-garba-in-ahmedabad-2026"
                  className="hover:text-[#F2D18B] transition-colors block leading-snug"
                >
                  Best Garba in Ahmedabad 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/garba-events-ahmedabad-2026"
                  className="hover:text-[#F2D18B] transition-colors block leading-snug"
                >
                  Garba Events Ahmedabad 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/navratri-events-ahmedabad-2026"
                  className="hover:text-[#F2D18B] transition-colors block leading-snug"
                >
                  Navratri Events Ahmedabad 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/#venue"
                  className="hover:text-[#F2D18B] transition-colors block leading-snug text-[#D6B26E]"
                >
                  Rudaah Arena: SG Highway Venue & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#F2D18B]">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-[#C7B9A7] font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B26E] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/RUDAAH+GARBA/@23.1304169,72.5331118,17.85z/data=!4m14!1m7!3m6!1s0x395e8363b992dea9:0x82990160b98ef7de!2sShreekunj+Greens!8m2!3d23.1271755!4d72.5329255!16s%2Fg%2F11rjq75f00!3m5!1s0x395e830076268ced:0x4dd172a1761d8429!8m2!3d23.1306666!4d72.5336527!16s%2Fg%2F11zd4j4y9s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2D18B] transition-colors"
                >
                  SG Highway, near Shreekunj Greens, Ahmedabad 382481
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B26E] shrink-0" />
                <span>+91 91048 19600</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B26E] shrink-0" />
                <span>info@rudaahgarba.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-playfair text-base font-bold text-[#F2D18B]">
              Stay Updated
            </h4>
            <p className="text-xs text-[#C7B9A7] font-light">
              Subscribe for artist announcements and pass alerts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-[#130B0A] border border-[#D6B26E]/40 text-xs text-[#F7EFE4] placeholder-[#C7B9A7]/50 focus:outline-none focus:border-[#D6B26E]"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1 top-1 bottom-1 px-2.5 rounded-lg bg-gold-gradient text-[#130B0A] text-xs font-bold flex items-center justify-center hover:brightness-110 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/rudaahgarba" target="_blank" rel="noopener noreferrer" aria-label="Follow Rudaah Garba on Instagram" className="text-[#C7B9A7] hover:text-[#F2D18B] transition-colors"><FaInstagram className="w-4 h-4" /></a>
              <a href="https://wa.me/919104819600" aria-label="Chat on WhatsApp with Rudaah Garba team" className="text-[#C7B9A7] hover:text-[#F2D18B] transition-colors"><FaWhatsapp className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col items-center gap-4 text-xs text-[#C7B9A7] font-light">
          <div className="w-full text-center">
            <p>© 2026 Rudaah Garba. All Rights Reserved. Produced by Raghuvanshi Events × Rashmi Raj Events.</p>
          </div>

          <div className="w-full border-t border-[#4A231A] pt-4 flex items-center justify-center gap-2 text-[#9A8A7A]">
            <Code2 className="w-3.5 h-3.5 text-[#D6B26E]" />
            <span>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/divy-thakkar-a89859227"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2D18B] hover:text-[#D6B26E] transition-colors font-semibold inline-flex items-center gap-1"
              >
                Divy Thakkar
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

}
