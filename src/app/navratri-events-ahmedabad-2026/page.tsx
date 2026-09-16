import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, MapPin, Compass, Landmark, Users, Shield, ArrowRight } from "lucide-react";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import SeoFaqAccordion from "@/components/seo/SeoFaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Navratri Events Ahmedabad 2026 | Garba & Navratri",
  description:
    "Explore Navratri events in Ahmedabad 2026. Discover popular Garba experiences, heritage Sheri nights, SG Highway open-air arenas, and festival details.",
  alternates: {
    canonical: "/navratri-events-ahmedabad-2026",
  },
  keywords: [
    "Navratri Events Ahmedabad 2026",
    "Navratri events Ahmedabad",
    "Ahmedabad Navratri",
    "Navratri 2026 Ahmedabad",
    "Garba events Ahmedabad",
    "Top 10 Navratri events in Ahmedabad 2026",
    "Popular Navratri Events & Garba Experiences in Ahmedabad 2026",
  ],
  openGraph: {
    title: "Navratri Events Ahmedabad 2026 | Garba & Navratri",
    description:
      "A curated cultural guide to Navratri events in Ahmedabad 2026, featuring popular Garba experiences, heritage pols, and SG Highway celebrations.",
    url: `${SITE_CONFIG.url}/navratri-events-ahmedabad-2026`,
    images: [{ url: SITE_CONFIG.ogImage.url, alt: "Navratri Events Ahmedabad 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navratri Events Ahmedabad 2026 | Garba & Navratri",
    description:
      "A complete guide to popular Navratri events and Garba experiences in Ahmedabad 2026.",
    images: [SITE_CONFIG.ogImage.url],
  },
};

const faqs = [
  {
    question: "Where are the major Navratri events held in Ahmedabad?",
    answer:
      "Major celebrations span two contrasting yet iconic settings: the historic heritage Pols in the Walled City (such as Khadia and Manek Chowk) and the modern open-air grounds and party plots along the Sarkhej-Gandhinagar (SG) Highway corridor.",
  },
  {
    question: "How long does Navratri 2026 last in Ahmedabad?",
    answer:
      "Navratri is traditionally celebrated over nine auspicious nights, culminating in Dussehra. In Ahmedabad, cultural venues frequently host 10 consecutive nights of festivities. For 2026, events run from October 11 to October 20, 2026.",
  },
  {
    question: "What is the cultural significance of the Panch Tatva theme at Rudaah Garba?",
    answer:
      "The Panch Tatva represents the Five Great Elements of cosmic nature: Prithvi (Earth), Jal (Water), Agni (Fire), Vayu (Air), and Aakash (Space). Rudaah Garba 2026 harmonizes this ancient Vedic philosophy with folk music, natural landscaping, and devotional Raas.",
  },
  {
    question: "Can families attend large-scale Garba events on SG Highway?",
    answer:
      "Yes. Venues like Rudaah Garba are designed specifically with family comfort in mind, offering designated family seating zones, strict alcohol-free decorum, female security staff, CCTV monitoring, and child-safe pedestrian corridors.",
  },
  {
    question: "Do I need pre-booked passes to attend Navratri events?",
    answer:
      "Yes, almost all open-air commercial and premium arenas require official entry wristbands or digital QR passes to regulate capacity and maintain safety. Inquiries should be made directly through authorized organizers.",
  },
];

export default function NavratriEventsPage() {
  const breadcrumbs = [
    { name: "Navratri Events Ahmedabad 2026", item: "/navratri-events-ahmedabad-2026" },
  ];

  return (
    <SeoPageLayout breadcrumbs={breadcrumbs}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold uppercase tracking-wider border border-[#7A1B0C]/30 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Comprehensive Citywide Overview</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#7A1B0C] leading-tight">
            Navratri Events in Ahmedabad 2026
          </h1>

          <p className="font-poppins text-base sm:text-lg text-[#2A1613] font-normal leading-relaxed">
            Discover the vibrant spectrum of celebrations, from sacred heritage pols to sprawling luxury grounds on SG Highway during Gujarat&apos;s greatest festival.
          </p>
        </header>

        {/* Featured Showcase: Rudaah Garba 2026 */}
        <section className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-6 sm:p-10 mb-14 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#8B6914] uppercase tracking-widest block">
                Highlighted SG Highway Celebration
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                Rudaah Garba 2026: 10 Nights of Nature & Celebration
              </h2>
              <p className="font-poppins text-sm text-[#2A1613] leading-relaxed">
                Jointly organized by Raghuvanshi Events and Rashmi Raj Events, Rudaah Garba 2026 offers an immersive cultural experience built upon the Five Elements of Nature (Panch Tatva). Located near Shreekunj Greens on SG Highway, the celebration features dedicated valet parking for 3,000+ cars, authentic folk artists, and royal VIP hospitality.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#7A1B0C] pt-2">
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6914]" /> 11th–20th Oct 2026
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6914]" /> SG Highway, Near Shreekunj Greens
                </span>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/#home"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-bold hover:bg-[#5C1408] transition-colors shadow-sm"
                >
                  <span>Explore Rudaah Garba 2026</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4EDE2] text-[#7A1B0C] text-xs font-bold border border-[#7A1B0C]/30 hover:bg-[#E8DCCB] transition-colors"
                >
                  <span>Pass & Stall Inquiries</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#7A1B0C]/20 shadow-inner">
              <Image
                src="/images/extracted_img_21.jpg"
                alt="Navratri Garba Celebration in Ahmedabad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 14 Requirement: Popular Navratri Events & Garba Experiences */}
        <section className="prose prose-stone max-w-none space-y-6 text-[#2A1613] leading-relaxed">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            Popular Navratri Events & Garba Experiences in Ahmedabad 2026
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Rather than relying on arbitrary rankings, discovering Navratri in Ahmedabad is best approached through its diverse cultural expressions. The city presents multiple distinct celebration styles, each catering to different traditions and preferences:
          </p>

          <div className="space-y-4 pt-2 not-prose">
            {/* Experience 1 */}
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Thematic Open-Air Arenas: Rudaah Garba 2026 (SG Highway)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1613] leading-relaxed">
                Combining grand scale with deep spiritual homage, Rudaah Garba 2026 is themed around the Panch Tatva (Five Elements of Nature). Held near Shreekunj Greens along the SG Highway corridor, it offers natural turf dancing, line-array acoustics, verified 3,000+ vehicle parking, and curated family zones across all 10 nights from October 11–20, 2026.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Heritage Pol & Sheri Garbas (Old Walled City)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1613] leading-relaxed">
                For purists seeking centuries-old traditions, the pols of Manek Chowk, Khadia, and Astodia offer authentic community Garba. Here, neighbors dance in concentric circles around decorated lamps with traditional dhol players and acoustic chants lasting into the early hours of the morning.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Prestigious Civic & Sports Club Garbas
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1613] leading-relaxed">
                Clubs such as Rajpath and Karnavati host curated Navratri gatherings for members and guests. These venues emphasize lawn turf maintenance, controlled attendance, family hospitality, and premium dinner buffets alongside classic Raas numbers.
              </p>
            </div>

            {/* Experience 4 */}
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  State & Cultural Festival Arenas (GMDC Ground)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1613] leading-relaxed">
                Gujarat Tourism historically hosts state-level Navratri celebrations at the GMDC Ground, showcasing folk artisans, handicraft bazaars, state-sponsored cultural troupes, and massive dancing grounds open to the general public.
              </p>
            </div>

            {/* Experience 5 */}
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  University & Design Campus Cultural Nights
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1613] leading-relaxed">
                Educational institutes such as NID and CEPT host artistically decorated Garba nights celebrated for their raw acoustic folk rhythms, hand-woven attire, creative lantern installations, and pure artistic spirit.
              </p>
            </div>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Key Recommendations for Visitors to Ahmedabad Navratri 2026
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            If you are traveling to Ahmedabad specifically for Navratri 2026, keep these recommendations in mind:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-poppins text-sm text-[#2A1613]">
            <li><strong>Embrace Traditional Attire:</strong> Wearing authentic Gujarati ethnic clothing is not just respect for tradition—it is mandatory for entrance at all premier grounds.</li>
            <li><strong>Stay Near the SG Highway Corridor:</strong> Choosing accommodations near SG Highway ensures easy vehicular access to major party plots, grounds, and return routes without getting stuck in inner-city detours.</li>
            <li><strong>Hydrate and Pace Yourself:</strong> Ten consecutive nights of dancing require physical stamina. Make use of hygienic refreshment stalls and rest areas provided on the grounds.</li>
          </ul>
        </section>

        {/* Cross Linking Cards */}
        <section className="my-14 p-6 sm:p-8 rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#7A1B0C]">
                Explore Additional Navratri Guides
              </h2>
              <p className="font-poppins text-xs text-[#2A1613]">
                Navigate related guides to compare event formats, pass info, and ground locations.
              </p>
            </div>
            <Link
              href="/"
              className="text-xs font-bold text-[#7A1B0C] hover:text-[#5C1408] underline underline-offset-4"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/top-navratri-in-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Guide</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Top Navratri in Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Heritage and contemporary event comparisons.
              </p>
            </Link>

            <Link
              href="/best-garba-in-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Editorial</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Best Garba in Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Quality benchmarks for music, flooring, and hospitality.
              </p>
            </Link>

            <Link
              href="/garba-events-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Calendar</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Garba Events Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Pass inquiry guide, venue logistics, and schedules.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <SeoFaqAccordion
          title="Frequently Asked Questions: Navratri Events Ahmedabad 2026"
          subtitle="Answers to common questions about celebration types, pass booking, and family amenities."
          faqs={faqs}
        />
      </article>
    </SeoPageLayout>
  );
}
