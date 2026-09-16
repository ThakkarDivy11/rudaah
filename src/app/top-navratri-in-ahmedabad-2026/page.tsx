import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Calendar, MapPin, Music, Shield, Car, Heart, ArrowRight } from "lucide-react";
import SeoPageLayout from "@/components/seo/SeoPageLayout";
import SeoFaqAccordion from "@/components/seo/SeoFaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Top Navratri in Ahmedabad 2026 | Best Garba Events",
  description:
    "Explore the top Navratri events in Ahmedabad 2026. Discover celebration styles, SG Highway venues, traditional folk music, and how to choose the best Garba night.",
  alternates: {
    canonical: "/top-navratri-in-ahmedabad-2026",
  },
  keywords: [
    "Top Navratri in Ahmedabad 2026",
    "Best Navratri in Ahmedabad 2026",
    "Navratri Ahmedabad 2026",
    "Top Garba in Ahmedabad 2026",
    "Navratri events in Ahmedabad 2026",
    "Navratri near SG Highway Ahmedabad",
  ],
  openGraph: {
    title: "Top Navratri in Ahmedabad 2026 | Best Garba Events",
    description:
      "A complete editorial guide to top Navratri events in Ahmedabad 2026. Learn about heritage Sheri Garba, club nights, and open-air arenas on SG Highway.",
    url: `${SITE_CONFIG.url}/top-navratri-in-ahmedabad-2026`,
    images: [{ url: SITE_CONFIG.ogImage.url, alt: "Top Navratri in Ahmedabad 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Navratri in Ahmedabad 2026 | Best Garba Events",
    description:
      "Explore the top Navratri events in Ahmedabad 2026 with venue tips, safety standards, and cultural highlights.",
    images: [SITE_CONFIG.ogImage.url],
  },
};

const faqs = [
  {
    question: "Why is Ahmedabad regarded as the global capital of Navratri celebrations?",
    answer:
      "Ahmedabad transforms entirely during the nine nights of Navratri. The city brings together millions of revelers dressed in traditional Chaniya Choli and Kedias, dancing to live dhol beats and folk raas until midnight across historic pols, sports clubs, and grand open-air grounds on the SG Highway corridor.",
  },
  {
    question: "When does Navratri 2026 take place in Ahmedabad?",
    answer:
      "Navratri 2026 begins on October 11, 2026, and culminates with Dussehra celebrations. Key events like Rudaah Garba 2026 run for 10 consecutive nights from October 11 through October 20, 2026.",
  },
  {
    question: "What makes SG Highway such a popular hub for Navratri events?",
    answer:
      "Sarkhej-Gandhinagar (SG) Highway offers sprawling party plot grounds, high-capacity vehicle parking (often 2,000 to 3,000+ slots), direct highway connectivity, and state-of-the-art stage infrastructure, making it the preferred corridor for large-scale cultural events.",
  },
  {
    question: "What should dancers consider before booking passes for a Navratri event?",
    answer:
      "Key factors include flooring quality (lawn vs. carpeted wooden flooring for foot comfort), acoustics and sound engineering, crowd control, verified security, dedicated parking availability, and authentic Gujarati live orchestra talent.",
  },
  {
    question: "How does Rudaah Garba 2026 fit into Ahmedabad's Navratri landscape?",
    answer:
      "Rudaah Garba 2026 is an open-air cultural celebration organized jointly by Raghuvanshi Events and Rashmi Raj Events on SG Highway, Near Shreekunj Greens. The event centers around the Five Elements of Nature (Panch Tatva) with authentic folk music, premium guest amenities, and strict cultural decorum.",
  },
];

export default function TopNavratriPage() {
  const breadcrumbs = [
    { name: "Ahmedabad Navratri 2026", item: "/top-navratri-in-ahmedabad-2026" },
  ];

  return (
    <SeoPageLayout breadcrumbs={breadcrumbs}>
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header section */}
        <header className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCCB] text-[#7A1B0C] text-xs font-bold uppercase tracking-wider border border-[#7A1B0C]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7A1B0C]" />
            <span>Ahmedabad Cultural Guide 2026</span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-[#7A1B0C] leading-tight">
            Top Navratri Events in Ahmedabad 2026
          </h1>

          <p className="font-poppins text-base sm:text-lg text-[#2A1613] font-normal leading-relaxed">
            A comprehensive guide to experiencing Gujarat&apos;s most spirited festival, from sacred heritage rhythms to premier open-air grounds on the SG Highway.
          </p>
        </header>

        {/* Featured Banner Card */}
        <section className="rounded-3xl bg-gradient-to-br from-[#E8DCCB] to-[#F4EDE2] border-2 border-[#7A1B0C]/30 p-6 sm:p-10 mb-14 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#8B6914] uppercase tracking-widest block">
                Featured Cultural Celebration
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
                Rudaah Garba 2026: The Panch Tatva Experience
              </h2>
              <p className="font-poppins text-sm text-[#2A1613] leading-relaxed">
                Jointly hosted by Raghuvanshi Events and Rashmi Raj Events, Rudaah Garba unites thousands of traditional revelers across 10 nights (11th – 20th October 2026) on SG Highway, near Shreekunj Greens.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#7A1B0C] pt-2">
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6914]" /> 11th–20th Oct 2026
                </span>
                <span className="flex items-center gap-1.5 bg-[#F4EDE2] px-3 py-1.5 rounded-lg border border-[#7A1B0C]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6914]" /> SG Highway, Ahmedabad
                </span>
              </div>
              <div className="pt-2">
                <Link
                  href="/#home"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1B0C] text-[#F7EFE4] text-xs font-bold hover:bg-[#5C1408] transition-colors shadow-sm"
                >
                  <span>Explore Rudaah Garba Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#7A1B0C]/20 shadow-inner">
              <Image
                src="/images/extracted_img_23.jpg"
                alt="Rudaah Garba Ahmedabad 2026 Arena Stage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section 1 */}
        <section className="prose prose-stone max-w-none space-y-6 text-[#2A1613] leading-relaxed">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C]">
            Why Ahmedabad is Famous for Navratri Worldwide
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Nowhere on earth is Navratri celebrated with the sheer scale, artistic devotion, and unflagging stamina found in Ahmedabad. Across the city, from the historic Walled City pols of Manek Chowk and Khadia to the sprawling green arenas flanking the Sarkhej-Gandhinagar corridor, every neighborhood resonates with the synchronized clapping and swirling movements of traditional Garba and Dandiya Raas.
          </p>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Ahmedabad&apos;s celebration is unique because it remains deeply rooted in spiritual veneration of Maa Amba while embracing world-class production values, acoustic sound engineering, and authentic folk orchestras that attract visitors from across Gujarat, India, and the global diaspora.
          </p>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            What Enthusiasts Can Expect During Navratri 2026
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            The 2026 Navratri season in Ahmedabad is poised to bring higher standards in dancer comfort, acoustic clarity, and environmental curation:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-[#E8DCCB]/60 border border-[#7A1B0C]/20 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">Acoustic Authenticity</h3>
              <p className="text-xs text-[#2A1613] leading-normal">
                Emphasis on traditional dholak, tabla, and shehnai rhythms blended seamlessly with line-array audio systems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#E8DCCB]/60 border border-[#7A1B0C]/20 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">Safety & Crowd Care</h3>
              <p className="text-xs text-[#2A1613] leading-normal">
                Dedicated medical bays, 24/7 CCTV surveillance, female security stewards, and digital QR ticketing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#E8DCCB]/60 border border-[#7A1B0C]/20 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#7A1B0C] text-[#F2D18B] flex items-center justify-center">
                <Car className="w-4 h-4" />
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#7A1B0C]">Transit & Parking</h3>
              <p className="text-xs text-[#2A1613] leading-normal">
                Multi-thousand vehicle parking lots with designated drop-off lanes and valet services on major arterial routes.
              </p>
            </div>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Understanding Different Garba Experiences in Ahmedabad
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            Before deciding where to spend your festive nights, it helps to understand the three primary styles of Garba in Ahmedabad:
          </p>
          <ul className="space-y-3 font-poppins text-sm text-[#2A1613]">
            <li className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/15">
              <strong className="text-[#7A1B0C] font-semibold block text-base mb-1">1. Heritage Sheri Garba:</strong>
              Celebrated in historic residential courtyards (Pols) of Old Ahmedabad. Known for sacred circular movement around an earthen Garbi, devotional aartis, and deeply traditional community participation.
            </li>
            <li className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/15">
              <strong className="text-[#7A1B0C] font-semibold block text-base mb-1">2. Prestigious Club Garbas:</strong>
              Hosted by established civic clubs in western Ahmedabad. These provide intimate members-and-guests gatherings with curated access, lawn grounds, and refined food services.
            </li>
            <li className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/15">
              <strong className="text-[#7A1B0C] font-semibold block text-base mb-1">3. Thematic Open-Air Arenas (SG Highway):</strong>
              Large-scale grounds featuring artistic conceptual designs—such as Rudaah Garba&apos;s Panch Tatva theme—with expansive dancing rings, premium sound engineering, royal decor, and high-capacity amenities.
            </li>
          </ul>

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#7A1B0C] pt-6">
            Important Things to Consider Before Choosing an Event
          </h2>
          <p className="font-poppins text-base text-[#2A1613]/90">
            To ensure your 10 nights are memorable and stress-free, evaluate these practical details:
          </p>
          <ol className="list-decimal pl-5 space-y-2 font-poppins text-sm text-[#2A1613]">
            <li><strong>Flooring & Ground Care:</strong> Hours of continuous spinning require even, cushioned ground to prevent ankle fatigue. Look for natural turf or padded carpeting.</li>
            <li><strong>Parking Availability:</strong> Traffic on SG Highway during peak festival hours requires venues with on-site parking facilities (3,000+ slots) and disciplined traffic marshals.</li>
            <li><strong>Authentic Folk Vocalists:</strong> Check whether the event features authentic Gujarati folk musicians who understand traditional talas (beats) and keep the tempo balanced.</li>
            <li><strong>Security and Medical First Aid:</strong> Reputed organizers implement trained female security staff, bouncers, on-site ambulances, and lost-and-found stations.</li>
          </ol>
        </section>

        {/* Explore Related Guides */}
        <section className="my-14 p-6 sm:p-8 rounded-3xl bg-[#E8DCCB] border border-[#7A1B0C]/25">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#7A1B0C]">
                Explore More Navratri 2026 Guides
              </h2>
              <p className="font-poppins text-xs text-[#2A1613]">
                Navigate related guides to find the perfect venue, dates, and event tickets.
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
              href="/best-garba-in-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Editorial</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Best Garba in Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Criteria for the best Garba nights, music, and royal amenities.
              </p>
            </Link>

            <Link
              href="/garba-events-ahmedabad-2026"
              className="p-4 rounded-xl bg-[#F4EDE2] border border-[#7A1B0C]/20 hover:border-[#7A1B0C] transition-all group"
            >
              <span className="text-xs font-bold text-[#8B6914] block mb-1">Events Calendar</span>
              <h3 className="font-playfair text-sm font-bold text-[#7A1B0C] group-hover:text-[#5C1408]">
                Garba Events Ahmedabad 2026 &rarr;
              </h3>
              <p className="text-[11px] text-[#2A1613] mt-1">
                Timings, guidelines, and pass inquiry details for 2026.
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
                Popular Navratri events and Garba experiences across the city.
              </p>
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <SeoFaqAccordion
          title="Frequently Asked Questions: Navratri in Ahmedabad"
          subtitle="Essential insights for revelers attending Navratri 2026 events in Ahmedabad."
          faqs={faqs}
        />
      </article>
    </SeoPageLayout>
  );
}
