import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_CONFIG, ALL_SEO_KEYWORDS } from "@/lib/seo";
import { OrganizationJsonLd, WebSiteJsonLd, EventJsonLd } from "@/components/seo/JsonLd";

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

export const viewport: Viewport = {
  themeColor: "#7A1B0C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Rudaah Garba 2026 | Top Navratri & Garba in Ahmedabad",
    template: "%s | Rudaah Garba 2026",
  },
  description:
    "Experience Rudaah Garba 2026 on SG Highway, Ahmedabad. Join Gujarat's premier Navratri & Garba celebration featuring 10 cultural nights, live music, and folk raas.",
  keywords: ALL_SEO_KEYWORDS,
  authors: [{ name: SITE_CONFIG.contact.organizers, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.contact.organizers,
  publisher: SITE_CONFIG.legalName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googledc62c8e26a94a286",
  },
  openGraph: {
    title: "Rudaah Garba 2026 | Top Navratri & Garba in Ahmedabad",
    description:
      "Experience Rudaah Garba 2026 on SG Highway, Ahmedabad. Celebrate Gujarat's grand Navratri with 10 nights of traditional Garba, folk music, and celebration.",
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    images: [
      {
        url: SITE_CONFIG.ogImage.url,
        width: SITE_CONFIG.ogImage.width,
        height: SITE_CONFIG.ogImage.height,
        alt: SITE_CONFIG.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudaah Garba 2026 | Top Navratri & Garba in Ahmedabad",
    description:
      "Experience Rudaah Garba 2026 on SG Highway, Ahmedabad. Join Gujarat's premier Navratri & Garba festival.",
    images: [
      {
        url: SITE_CONFIG.ogImage.url,
        alt: SITE_CONFIG.ogImage.alt,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/images/rudaah-logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
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
      <head>
        {/* Global Structured Data */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <EventJsonLd />
      </head>
      <body className="bg-paper-texture text-[#2A1613] font-poppins selection:bg-[#7A1B0C]/20 selection:text-[#7A1B0C] antialiased overflow-x-hidden min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}



