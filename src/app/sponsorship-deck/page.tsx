"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";

export default function SponsorshipDeckPage() {
  return (
    <div className="min-h-screen bg-[#1F0804] text-[#F7EFE4] flex flex-col">
      {/* Top Navbar */}
      <header className="px-4 py-3 bg-[#3D0C06] border-b border-[#7A1B0C]/40 flex items-center justify-between shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-full bg-[#5C1408] border border-[#F2D18B]/30 text-[#F2D18B] hover:bg-[#7A1B0C] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="h-4 w-[1px] bg-[#7A1B0C]/50 hidden sm:block" />
          <h1 className="font-playfair text-base sm:text-lg font-bold text-[#F2D18B] truncate">
            Rudaah Garba 2026 — Official Sponsorship Deck
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/api/pdf-stream"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-[#F2D18B] text-[#7A1B0C] font-bold text-xs flex items-center gap-1.5 hover:bg-[#E6C37B] transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Open Direct Stream</span>
            <span className="sm:hidden">Open</span>
          </a>
        </div>
      </header>

      {/* PDF Embedded Viewer */}
      <main className="flex-1 w-full relative bg-[#120402]">
        <iframe
          src="/api/pdf-stream"
          title="Rudaah Garba Sponsorship Deck"
          className="w-full h-full min-h-[calc(100vh-60px)] border-none"
        />
      </main>
    </div>
  );
}
