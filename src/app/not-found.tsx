import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Ticket, MapPin, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Rudaah Garba Ahmedabad 2026",
  description: "The page you are looking for does not exist. Explore Rudaah Garba 2026 on SG Highway, Ahmedabad.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper-texture flex flex-col items-center justify-center p-6 text-center text-[#2A1613] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D6B26E]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        {/* Logo */}
        <div className="relative w-24 h-24 mx-auto p-1 rounded-full border border-[#7A1B0C]/30 bg-[#E8DCCB]/90 shadow-md flex items-center justify-center">
          <Image
            src="/images/rudaah-logo.png"
            alt="Rudaah Garba Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-extrabold uppercase tracking-widest border border-[#7A1B0C]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#8B6914]" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#7A1B0C]">
          Lost in the <span className="text-maroon-gradient">Garba Arena?</span>
        </h1>

        <p className="font-poppins text-sm sm:text-base text-[#2A1613]/80 leading-relaxed">
          The page you requested could not be located. Let us guide you back to the festivities, event schedules, and passes for Ahmedabad Navratri 2026.
        </p>

        {/* Navigation CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#7A1B0C] text-[#F7EFE4] font-bold text-sm flex items-center gap-2 shadow-md hover:bg-[#5C1408] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/#passes"
            className="px-6 py-3 rounded-full bg-[#E8DCCB] border border-[#7A1B0C]/40 text-[#7A1B0C] font-bold text-sm flex items-center gap-2 hover:bg-[#DBCBBA] transition-all"
          >
            <Ticket className="w-4 h-4" />
            <span>Garba Passes</span>
          </Link>
        </div>

        {/* Helpful Topic Links */}
        <div className="pt-6 border-t border-[#7A1B0C]/20 text-xs text-[#8B6914] space-y-2">
          <p className="font-bold uppercase tracking-wider">Explore Ahmedabad Navratri 2026 Guides:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[#7A1B0C] font-semibold underline underline-offset-2">
            <Link href="/top-navratri-in-ahmedabad-2026">Top Navratri in Ahmedabad</Link>
            <Link href="/best-garba-in-ahmedabad-2026">Best Garba Events</Link>
            <Link href="/garba-events-ahmedabad-2026">Garba Schedule &amp; Dates</Link>
            <Link href="/navratri-events-ahmedabad-2026">Navratri Cultural Guide</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
