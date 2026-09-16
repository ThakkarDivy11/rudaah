import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Award, Music2, Users2, ShieldCheck, MapPin, Calendar, ArrowRight } from "lucide-react";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import SeoFaqAccordion from "@/components/seo/SeoFaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Garba in Ahmedabad 2026 | Top Garba Events",
  description:
    "Discover the best Garba in Ahmedabad 2026. Explore premium Garba nights, live folk music, SG Highway arenas, and dancer tips for Navratri 2026.",
  alternates: {
    canonical: "/best-garba-in-ahmedabad-2026",
  },
  keywords: [
    "Best Garba in Ahmedabad 2026",
    "Best Garba Ahmedabad",
    "Garba Ahmedabad 2026",
    "Best Garba events",
    "Ahmedabad Garba nights",
    "Premium Garba Ahmedabad",
    "Best Garba night in Ahmedabad 2026",
  ],
  openGraph: {
    title: "Best Garba in Ahmedabad 2026 | Top Garba Events",
    description:
      "Looking for the best Garba in Ahmedabad 2026? Read our guide on musical lineups, traditional etiquette, venue safety, and premium Garba experiences.",
    url: `${SITE_CONFIG.url}/best-garba-in-ahmedabad-2026`,
    images: [{ url: SITE_CONFIG.ogImage.url, alt: "Best Garba in Ahmedabad 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Garba in Ahmedabad 2026 | Top Garba Events",
    description:
      "An insider guide to experiencing the best Garba nights in Ahmedabad 2026.",
    images: [SITE_CONFIG.ogImage.url],
  },
};

const faqs = [
  {
    question: "What qualities distinguish the best Garba in Ahmedabad?",
    answer:
      "A truly exceptional Garba event blends sacred traditional devotion with dancer comfort. Key attributes include an authentic acoustic orchestra (not synthetic tracks), an even and expansive dance turf, disciplined crowd management, ample parking, and an uplifting festive atmosphere.",
  },
  {
    question: "Is Rudaah Garba considered a premium Garba experience in Ahmedabad?",
    answer:
      "Yes. Rudaah Garba 2026 is designed as a luxury cultural celebration inspired by the Five Elements of Nature (Panch Tatva). Jointly organized by Raghuvanshi Events and Rashmi Raj Events, it features royal hospitality, VIP amenities, a 3,000+ car parking zone, and premier acoustic sound setups.",
  },
  {
    question: "What are the dress code requirements for best Garba nights in Ahmedabad?",
    answer:
      "Most premium venues strictly require traditional Gujarati ethnic attire—Chaniya Choli with intricate mirrorwork and dupatta for women, and Kedias or embroidered Kurta Pyjamas for men. Western wear is commonly restricted at traditional grounds.",
  },
  {
    question: "Where are the major premium Garba events located in Ahmedabad?",
    answer:
      "The prime corridor for large open-air premium Garba events is the Sarkhej-Gandhinagar (SG) Highway and adjoining arterial grounds near Shreekunj Greens, offering expansive lawns, high-capacity parking, and rapid transit access.",
  },
  {
    question: "What is the best time to arrive at a Garba venue in Ahmedabad?",
    answer:
      "Gates typically open at 7:30 PM. To avoid entry congestion and secure parking easily, arriving between 7:30 PM and 8:15 PM is recommended before live orchestra performances begin at 8:30 PM.",
  },
];

export default function BestGarbaPage() {
  const breadcrumbs = [
    { name: "Best Garba in Ahmedabad 2026", item: "/best-garba-in-ahmedabad-2026" },
  ];

  return (
    <SeoPageLayout breadcrumbs={breadcrumbs}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold uppercase tracking-wider border border-[#7A1B0C]/30 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Curated Festival Insights</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#7A1B0C] leading-tight">
            Best Garba in Ahmedabad 2026
          </h1>

          <p className="font-poppins text-base sm:text-lg text-[#2A1613] font-normal leading-relaxed">
            What makes a Garba night unforgettable? Explore the pinnacle of music, royal hospitality, and spiritual ecstasy during Navratri 2026 in Ahmedabad.
          </p>
        </header>

        {/* Highlight Feature Card */}
        <section className="rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/30 p-6 sm:p-10 mb-14 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#8B6914] uppercase tracking-widest block">
                The Royal Navratri Experience
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                Rudaah Garba 2026: Luxury Cultural Celebration
              </h2>
              <p className="font-poppins text-sm text-[#2A1613] leading-relaxed">
                Positioned on SG Highway near Shreekunj Greens, Rudaah Garba brings together 10 nights of traditional Gujarati folk melodies, artist orchestras, expansive lawn dancing, and VIP lounge hospitality.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#7A1B0C] pt-2">
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6914]" /> 11th–20th Oct 2026
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6914]" /> Near Shreekunj Greens, SG Highway
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href="/#about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-bold hover:bg-[#5C1408] transition-colors shadow-sm"
                >
                  <span>Explore Rudaah Panch Tatva Theme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#7A1B0C]/20 shadow-inner">
              <Image
                src="/images/extracted_img_18.jpg"
                alt="Dancers enjoying Garba in Ahmedabad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Editorial Body */}
        <section className="prose prose-stone max-w-none space-y-6 text-[#2A1613] leading-relaxed">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            What Defines the Best Garba in Ahmedabad?
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            For true Garba lovers, the term &ldquo;Best Garba&rdquo; isn&apos;t just about flashy lighting; it is about the sanctity of the circle, the resonant thump of the dhol, and the seamless energy shared by thousands of synchronized dancers. As Ahmedabad prepares for Navratri 2026, revelers seek venues that balance tradition with modern comfort.
          </p>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7A1B0C] text-[#F2D18B]">
                  <Music2 className="w-5 h-5" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Authentic Folk Musicians
                </h3>
              </div>
              <p className="text-xs text-[#2A1613] leading-relaxed">
                The best events prioritize seasoned Gujarati vocalists who sing authentic Garbas, Sanedo, and Raas in gradual tempo increments (Dodhiya, Tran Taali, and Heench), allowing dancers to build energy naturally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7A1B0C] text-[#F2D18B]">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Uncrowded Dancing Rings
                </h3>
              </div>
              <p className="text-xs text-[#2A1613] leading-relaxed">
                Overcrowded grounds restrict movement. Leading venues maintain sensible capacity limits and spacious circular perimeters so dancers can perform intricate 4-step and 8-step footwork without collisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7A1B0C] text-[#F2D18B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  High Safety & Medical Care
                </h3>
              </div>
              <p className="text-xs text-[#2A1613] leading-relaxed">
                Family comfort depends on rigorous security, CCTV coverage, clear exit paths, dedicated female security personnel, and rapid-response medical teams on standby every single night.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EDE2] border border-[#7A1B0C]/20 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7A1B0C] text-[#F2D18B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">
                  Royal Aesthetic Ambiance
                </h3>
              </div>
              <p className="text-xs text-[#2A1613] leading-relaxed">
                From thematic temple architecture and Panch Tatva decor to royal VIP lounges and hygienic gourmet dining courts, ambiance sets the premier celebrations apart.
              </p>
            </div>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            The SG Highway Advantage for Navratri 2026
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Sarkhej-Gandhinagar (SG) Highway has established itself as the cultural epicenter of Ahmedabad&apos;s grandest Garba celebrations. With wider roadways, planned parking corridors, and accessibility from both Ahmedabad and Gandhinagar, venues along this belt allow attendees to enjoy uninterrupted festivities without the severe congestion of inner-city streets.
          </p>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Rudaah Garba 2026: An Exemplary Cultural Choice
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Produced by Raghuvanshi Events and Rashmi Raj Events—veterans with extensive experience in premier Gujarat events—Rudaah Garba 2026 on SG Highway has been thoughtfully conceptualized around the Panch Tatva (Earth, Water, Fire, Air, Space). Revelers can expect curated musical evenings, expansive ground arrangements, 3,000+ car parking slots, and strict adherence to cultural values across all 10 nights from October 11 to October 20, 2026.
          </p>
        </section>

        {/* Interlink Cross Navigation */}
        <section className="my-14 p-6 sm:p-8 rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#7A1B0C]">
                Explore Additional Navratri Guides
              </h2>
              <p className="font-poppins text-xs text-[#2A1613]">
                Deepen your knowledge of Ahmedabad&apos;s Garba nights and event logistics.
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
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Overview</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Top Navratri in Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                A citywide overview of heritage, clubs, and modern arenas.
              </p>
            </Link>

            <Link
              href="/garba-events-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Event Timings</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Garba Events Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Pass inquiry guide, venue logistics, and schedules.
              </p>
            </Link>

            <Link
              href="/navratri-events-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Event Showcase</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Navratri Events Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Popular celebrations and party plot highlights.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <SeoFaqAccordion
          title="Frequently Asked Questions: Best Garba Experience"
          subtitle="Clear answers about selecting the best Garba nights in Ahmedabad 2026."
          faqs={faqs}
        />
      </article>
    </SeoPageLayout>
  );
}
