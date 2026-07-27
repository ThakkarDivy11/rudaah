import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rudaah Garba 2026 | Where Nature Becomes Celebration | Ahmedabad",
  description:
    "Experience 10 nights of culture, music, celebration & memories at Rudaah Garba 2026, SG Highway, Ahmedabad. Organized by Raghuvanshi Events × Rashmi Raj Events.",
  keywords: [
    "Rudaah Garba",
    "Rudaah Garba 2026",
    "Navratri Ahmedabad",
    "Raghuvanshi Events",
    "Rashmi Raj Events",
    "Garba Pass Ahmedabad",
    "Best Garba in Ahmedabad",
    "Sarkhej Gandhinagar Highway Garba",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/rudaah-logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Rudaah Garba 2026 | Where Nature Becomes Celebration",
    description: "10 Nights of Luxury Cultural Celebration in Ahmedabad.",
    images: [{ url: "/images/rudaah-logo.png" }],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="bg-paper-texture text-[#2A1613] font-poppins selection:bg-[#7A1B0C]/20 selection:text-[#7A1B0C] antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}


