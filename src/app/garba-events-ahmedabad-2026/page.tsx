import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, Clock, MapPin, Ticket, Shield, HelpCircle, ArrowRight } from "lucide-react";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import SeoFaqAccordion from "@/components/seo/SeoFaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Garba Events Ahmedabad 2026 | Navratri Garba Nights",
  description:
    "Complete schedule and guide to Garba events in Ahmedabad 2026. Explore SG Highway nights, pass booking inquiries, timings, and cultural guidelines.",
  alternates: {
    canonical: "/garba-events-ahmedabad-2026",
  },
  keywords: [
    "Garba Events Ahmedabad 2026",
    "Garba events in Ahmedabad 2026",
    "Ahmedabad Garba 2026",
    "Ahmedabad Garba tickets 2026",
    "Garba passes Ahmedabad 2026",
    "Garba near SG Highway",
    "Ahmedabad Garba nights",
  ],
  openGraph: {
    title: "Garba Events Ahmedabad 2026 | Navratri Garba Nights",
    description:
      "Planning your Garba nights in Ahmedabad? Find event timings, pass inquiry info, venue details, and safety guidelines for Garba events 2026.",
    url: `${SITE_CONFIG.url}/garba-events-ahmedabad-2026`,
    images: [{ url: SITE_CONFIG.ogImage.url, alt: "Garba Events Ahmedabad 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garba Events Ahmedabad 2026 | Navratri Garba Nights",
    description:
      "All you need to know about attending Garba events in Ahmedabad 2026.",
    images: [SITE_CONFIG.ogImage.url],
  },
};

const faqs = [
  {
    question: "What are the standard timings for Garba events in Ahmedabad 2026?",
    answer:
      "Most major venues open their entrance gates at 7:30 PM. Live folk orchestra and Raas performances usually begin by 8:30 PM and continue until midnight across all 10 festive nights.",
  },
  {
    question: "How can I inquire about passes for Rudaah Garba 2026?",
    answer:
      "Pass inquiries, corporate bookings, and sponsorship stalls can be arranged directly with the event team via phone (+91 91048 19600 / +91 83202 52095), WhatsApp, or through the contact inquiry form on the official website.",
  },
  {
    question: "Are daily passes and seasonal 10-night passes available?",
    answer:
      "Yes, attendees commonly have the option to inquire for individual night passes or seasonal full-access season passes for all 10 nights of celebration.",
  },
  {
    question: "What items are prohibited inside the Garba ground?",
    answer:
      "Outside food, beverages, sharp objects, and unauthorized recording gear are strictly prohibited. Security checkpoints with metal detectors and bag inspections are mandatory at entry.",
  },
  {
    question: "Is valet or designated parking available at Rudaah Garba?",
    answer:
      "Yes. The venue features a dedicated parking ground accommodating 3,000+ vehicles, with specialized valet parking services for VIP pass holders.",
  },
];

export default function GarbaEventsPage() {
  const breadcrumbs = [
    { name: "Garba Events Ahmedabad 2026", item: "/garba-events-ahmedabad-2026" },
  ];

  return (
    <SeoPageLayout breadcrumbs={breadcrumbs}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold uppercase tracking-wider border border-[#7A1B0C]/30 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Festival Calendar & Guide</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#7A1B0C] leading-tight">
            Garba Events in Ahmedabad 2026
          </h1>

          <p className="font-poppins text-base sm:text-lg text-[#2A1613] font-normal leading-relaxed">
            Essential guide to schedules, pass inquiries, SG Highway arenas, and cultural guidelines for Navratri Garba nights 2026.
          </p>
        </header>

        {/* Featured Event Card */}
        <section className="rounded-3xl bg-[#E8DCCB] border-2 border-[#7A1B0C]/30 p-6 sm:p-10 mb-14 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#8B6914] uppercase tracking-widest block">
                Highlighted Garba Arena
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                Rudaah Garba 2026: 10 Consecutive Festive Nights
              </h2>
              <p className="font-poppins text-sm text-[#2A1613] leading-relaxed">
                Experience royal Garba Raas on SG Highway, near Shreekunj Greens. Featuring 10 nights of traditional music, a 120k+ footfall legacy, VIP seating, and extensive dining areas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#7A1B0C] pt-2">
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-2 rounded-lg border border-[#7A1B0C]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6914]" /> 11th to 20th October 2026
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-2 rounded-lg border border-[#7A1B0C]/20">
                  <Clock className="w-3.5 h-3.5 text-[#8B6914]" /> Gates: 7:30 PM | Raas: 8:30 PM
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-2 rounded-lg border border-[#7A1B0C]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6914]" /> SG Highway, Ahmedabad
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-2 rounded-lg border border-[#7A1B0C]/20">
                  <Ticket className="w-3.5 h-3.5 text-[#8B6914]" /> Pass Inquiries Available
                </span>
              </div>
              <div className="pt-3 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-bold hover:bg-[#5C1408] transition-colors shadow-sm"
                >
                  <span>Inquire for Passes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/#venue"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4EDE2] text-[#7A1B0C] text-xs font-bold border border-[#7A1B0C]/30 hover:bg-[#E8DCCB] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8B6914]" />
                  <span>Directions & Parking</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#7A1B0C]/20 shadow-inner">
              <Image
                src="/images/extracted_img_14.jpg"
                alt="Rudaah Garba Arena Ahmedabad Stage and Lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="prose prose-stone max-w-none space-y-6 text-[#2A1613] leading-relaxed">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            Navigating Ahmedabad Garba Nights 2026
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Garba nights in Ahmedabad are the crowning jewel of Gujarat&apos;s cultural calendar. Across all 10 nights of Navratri 2026, the city hums with energy as hundreds of thousands of people assemble in open party plots, lawns, and arenas to perform devotional circles honoring the Divine Mother.
          </p>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Timings & Evening Flow at Major Arenas
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Understanding the typical event timeline helps guests maximize their Garba experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <span className="text-xs font-bold text-[#8B6914] block">7:30 PM</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C]">Gates Open</h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Security check-in, parking entry, and wristband collection.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <span className="text-xs font-bold text-[#8B6914] block">8:30 PM</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C]">Devotional Aarti</h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Traditional prayers and inaugural lamps to commence the night.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <span className="text-xs font-bold text-[#8B6914] block">9:00 PM – 11:30 PM</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C]">Garba & Raas Rounds</h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Dodhiya, Tran Taali, Sanedo, and high-energy circular folk raas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20">
              <span className="text-xs font-bold text-[#8B6914] block">11:30 PM – Midnight</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C]">Grand Finale</h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Climax folk tracks, daily costume awards, and final aarti.
              </p>
            </div>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Pass Inquiries & Attendee Information
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            For major events like Rudaah Garba 2026, passes are curated to ensure balanced dancer ratios, security, and an authentic cultural ambiance. Prospective attendees and corporate groups are encouraged to inquire early through official contact channels to confirm access credentials and VIP parking passes.
          </p>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Venue Amenities & Accessibility on SG Highway
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            When attending high-attendance Garba events, venue infrastructure plays an indispensable role. Key amenities provided at Rudaah Garba 2026 include:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-poppins text-sm text-[#2A1613]">
            <li><strong>Expansive Parking Lot:</strong> Dedicated parking facility holding 3,000+ vehicles with organized lanes to minimize post-event traffic delay.</li>
            <li><strong>VIP Valet Services:</strong> Convenient drop-off and pickup zone adjacent to the VIP hospitality lounge.</li>
            <li><strong>Medical First-Aid Centers:</strong> Qualified emergency response staff and on-site paramedics available throughout the night.</li>
            <li><strong>Hygienic Dining Courts:</strong> Certified food and beverage stalls offering traditional refreshments, packaged water, and gourmet snacks.</li>
          </ul>
        </section>

        {/* Related Links */}
        <section className="my-14 p-6 sm:p-8 rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#7A1B0C]">
                Explore Additional Navratri 2026 Guides
              </h2>
              <p className="font-poppins text-xs text-[#2A1613]">
                Discover insights into Ahmedabad&apos;s premier Garba experiences.
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
              href="/navratri-events-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Celebrations</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Navratri Events Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Popular celebrations across the city and highway hubs.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <SeoFaqAccordion
          title="Frequently Asked Questions: Garba Events 2026"
          subtitle="Answers to common questions regarding Garba schedules, pass inquiries, and ground rules."
          faqs={faqs}
        />
      </article>
    </SeoPageLayout>
  );
}
