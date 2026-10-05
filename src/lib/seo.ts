// Centralized SEO configuration and metadata constants for Rudaah Garba 2026

export const SITE_CONFIG = {
  name: "Rudaah Garba 2026",
  legalName: "Rudaah Garba",
  tagline: "Top Navratri & Best Mandli Garba in Ahmedabad",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.rudaah.com",
  defaultTitle: "Top 10 Navratri in Ahmedabad 2026 | Best Garba & Mandli Garba",
  titleTemplate: "%s | Rudaah Garba 2026",
  defaultDescription:
    "Discover the best Navratri and Garba events in Ahmedabad 2026. Explore top Garba nights, Mandli Garba, venues, passes and traditional celebrations.",
  locale: "en_IN",
  ogImage: {
    url: "/images/rudaah-og-banner.jpg",
    width: 1200,
    height: 630,
    alt: "Top 10 Navratri in Ahmedabad 2026 | Best Garba & Mandli Garba at Rudaah",
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
    name: "Rudaah Garba 2026 — Top Navratri & Best Mandli Garba in Ahmedabad",
    alternateName: "Top 10 Navratri in Ahmedabad 2026",
    startDate: "2026-10-11T19:30:00+05:30",
    endDate: "2026-10-19T23:59:59+05:30",
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
    "Top 10 Navratri in Ahmedabad",
    "Best Navratri in Ahmedabad",
    "Best Garba in Ahmedabad",
    "Top Garba in Ahmedabad",
    "Ahmedabad Navratri 2026",
    "Navratri Ahmedabad 2026",
    "Best Mandli Garba in Ahmedabad",
    "Top 10 Mandli Garba",
    "Top Mandli Garba in Ahmedabad",
    "Mandli Garba Ahmedabad",
    "Best Garba Mandli",
    "Top Garba Mandli",
    "Famous Garba in Ahmedabad",
    "Best Navratri Garba",
    "Ahmedabad Garba Events",
    "Best Navratri Events in Ahmedabad",
  ],
  secondaryKeywords: [
    "Navratri in Ahmedabad 2026",
    "Garba in Ahmedabad 2026",
    "Top Navratri events in Ahmedabad",
    "Ahmedabad Garba passes 2026",
    "Navratri passes Ahmedabad 2026",
    "SG Highway Garba Ahmedabad",
    "Traditional Garba nights Ahmedabad",
    "Heritage Mandli Garba Ahmedabad",
    "Rudaah Garba 2026",
    "Premium Garba Ahmedabad",
  ],
  longTailKeywords: [
    "Top 10 Navratri events in Ahmedabad 2026",
    "Best Mandli Garba night in Ahmedabad 2026",
    "Where to celebrate Navratri in Ahmedabad 2026",
    "Best places for Garba in Ahmedabad 2026",
    "Famous Mandli Garba events Ahmedabad 2026",
    "Best Navratri events near SG Highway Ahmedabad",
  ],
};

// Generate full keywords array for general meta tags
export const ALL_SEO_KEYWORDS = [
  ...SITE_CONFIG.primaryKeywords,
  ...SITE_CONFIG.secondaryKeywords,
  ...SITE_CONFIG.longTailKeywords,
  "Raghuvanshi Events",
  "Rashmi Raj Events",
  "Shreekunj Greens Garba",
];


export const HOME_FAQS = [
  {
    question: "When is Navratri 2026 and what are the dates for Rudaah Garba?",
    answer:
      "Navratri 2026 commences on 11th October 2026 and continues through 19th October 2026. Rudaah Garba runs across all 9 auspicious festive nights at the Rudaah Garba Arena on SG Highway, Ahmedabad, with gates opening daily at 7:30 PM.",
  },
  {
    question: "What are the best Navratri and Garba events in Ahmedabad in 2026?",
    answer:
      "Ahmedabad is celebrated worldwide for its Navratri celebrations. Top events include premier open-air cultural arenas like Rudaah Garba on SG Highway, known for its Forest of Sacred Energies architectural theme, authentic Mandli Garba, pristine natural lawn dancing ground, high-fidelity acoustic sound, and contactless FacePass entry.",
  },
  {
    question: "What is Mandli Garba and how is it celebrated at Rudaah?",
    answer:
      "Mandli Garba is the traditional, communal Gujarati form of Garba danced in close, harmonious circles (mandlis) to the raw, unhurried rhythm of live acoustic dhol, harmonium, and traditional folk singers. At Rudaah, Mandli Garba is celebrated in its purest spiritual and folk essence alongside world-class production.",
  },
  {
    question: "Where can I get Ahmedabad Garba passes for Rudaah 2026?",
    answer:
      "Official season passes for Rudaah Garba 2026 are exclusively available online via FacePass. Early Bird passes are officially sold out; Phase 1 passes are currently live on FacePass providing full 9-night season access with contactless face-recognition entry.",
  },
  {
    question: "Where is the venue located and how accessible is it from Ahmedabad areas?",
    answer:
      "Rudaah Garba Ground is conveniently located on Sarkhej - Gandhinagar (SG) Highway, near Shreekunj Greens in Ahmedabad. It offers direct connectivity from key western Ahmedabad residential hubs including Satellite, Prahlad Nagar, Bodakdev, Thaltej, Bopal, Sindhu Bhavan Road (SBR), and Science City with dedicated parking for over 3,000 vehicles.",
  },
  {
    question: "What should I wear for Garba in Ahmedabad?",
    answer:
      "Authentic traditional Gujarati ethnic wear is strongly encouraged. Women typically wear embroidered Chaniya Cholis with mirror work and traditional jewellery, while men wear traditional Kedias with dhoti/chorno or Kurta Pyjamas to celebrate the rich cultural heritage.",
  },
  {
    question: "What facilities, parking, and security are provided at Rudaah Garba Ground?",
    answer:
      "Rudaah provides 360-degree security with CCTV surveillance, licensed female and male security marshals, first-aid medical teams with an on-site ambulance, gourmet hygienic food courts, artisan flea stalls, clean restrooms, and organized parking accommodating over 3,000 vehicles with valet options.",
  },
];
