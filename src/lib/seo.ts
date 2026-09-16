// Centralized SEO configuration and metadata constants for Rudaah Garba 2026

export const SITE_CONFIG = {
  name: "Rudaah Garba 2026",
  legalName: "Rudaah Garba",
  tagline: "Where Nature Becomes Celebration",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rudaah.com",
  defaultTitle: "Rudaah Garba 2026 | Top Navratri & Garba in Ahmedabad",
  titleTemplate: "%s | Rudaah Garba 2026",
  defaultDescription:
    "Experience Rudaah Garba 2026 on SG Highway, Ahmedabad. Join Gujarat's premier Navratri & Garba celebration featuring 10 cultural nights, live music, and folk raas.",
  locale: "en_IN",
  ogImage: {
    url: "/images/rudaah-logo.png",
    width: 1200,
    height: 630,
    alt: "Rudaah Garba 2026 Ahmedabad Logo Emblem",
  },
  twitterHandle: "@rudaahgarba",
  contact: {
    phone: "+91 91048 19600",
    phoneSecondary: "+91 83202 52095",
    email: "info@rudaahgarba.com",
    organizers: "Raghuvanshi Events × Rashmi Raj Events",
  },
  social: {
    instagram: "https://www.instagram.com/rudaahgarba",
    whatsapp: "https://wa.me/919104819600",
  },
  event: {
    name: "Rudaah Garba 2026",
    startDate: "2026-10-11T19:30:00+05:30",
    endDate: "2026-10-20T23:59:59+05:30",
    venueName: "Rudaah Garba Ground",
    address: {
      street: "Sarkhej - Gandhinagar Hwy, Near Shreekunj Greens, Rudaah Garba Arena",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "382481",
      country: "IN",
    },
    geo: {
      latitude: 23.1306666,
      longitude: 72.5336527,
    },
    mapsUrl:
      "https://www.google.com/maps/place/RUDAAH+GARBA/@23.1304169,72.5331118,17.85z/data=!4m14!1m7!3m6!1s0x395e8363b992dea9:0x82990160b98ef7de!2sShreekunj+Greens!8m2!3d23.1271755!4d72.5329255!16s%2Fg%2F11rjq75f00!3m5!1s0x395e830076268ced:0x4dd172a1761d8429!8m2!3d23.1306666!4d72.5336527!16s%2Fg%2F11zd4j4y9s",
  },
  primaryKeywords: [
    "Top Navratri in Ahmedabad 2026",
    "Best Navratri in Ahmedabad 2026",
    "Navratri Ahmedabad 2026",
    "Top Garba in Ahmedabad 2026",
    "Best Garba in Ahmedabad 2026",
    "Garba Ahmedabad 2026",
    "Top Garba Events in Ahmedabad 2026",
    "Best Garba Events Ahmedabad 2026",
  ],
  secondaryKeywords: [
    "Navratri events in Ahmedabad 2026",
    "Garba events in Ahmedabad 2026",
    "Ahmedabad Garba 2026",
    "Ahmedabad Navratri events",
    "Ahmedabad Garba tickets 2026",
    "Navratri passes Ahmedabad 2026",
    "Garba passes Ahmedabad 2026",
    "Premium Garba Ahmedabad",
    "Garba near SG Highway",
    "Navratri near SG Highway Ahmedabad",
    "Best Garba nights in Ahmedabad",
  ],
  longTailKeywords: [
    "Top 10 Navratri events in Ahmedabad 2026",
    "Top 10 Garba events in Ahmedabad 2026",
    "Best places for Garba in Ahmedabad 2026",
    "Where to celebrate Navratri in Ahmedabad 2026",
    "Best Garba night in Ahmedabad 2026",
    "Best Navratri events near SG Highway Ahmedabad",
    "Premium Navratri Garba in Ahmedabad 2026",
  ],
};

// Generate full keywords array for general meta tags
export const ALL_SEO_KEYWORDS = [
  ...SITE_CONFIG.primaryKeywords,
  ...SITE_CONFIG.secondaryKeywords,
  ...SITE_CONFIG.longTailKeywords,
  "Rudaah Garba",
  "Raghuvanshi Events",
  "Rashmi Raj Events",
  "Shreekunj Greens Garba",
];
