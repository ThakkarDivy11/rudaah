import { SITE_CONFIG } from "@/lib/seo";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    sameAs: [SITE_CONFIG.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.event.address.street,
      addressLocality: SITE_CONFIG.event.address.city,
      addressRegion: SITE_CONFIG.event.address.state,
      postalCode: SITE_CONFIG.event.address.postalCode,
      addressCountry: SITE_CONFIG.event.address.country,
    },
  };

  return <JsonLd data={schema} />;
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Top 10 Navratri in Ahmedabad 2026 | Best Garba & Mandli Garba",
    alternateName: [
      "Rudaah Garba 2026",
      "Best Navratri in Ahmedabad",
      "Best Mandli Garba in Ahmedabad",
      "Ahmedabad Navratri 2026",
    ],
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.defaultDescription,
    inLanguage: SITE_CONFIG.locale,
  };

  return <JsonLd data={schema} />;
}

export function EventJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE_CONFIG.event.name,
    alternateName: [
      "Top Navratri in Ahmedabad 2026",
      "Best Navratri in Ahmedabad",
      "Best Garba in Ahmedabad",
      "Top Garba in Ahmedabad",
      "Best Mandli Garba in Ahmedabad",
      "Mandli Garba Ahmedabad",
      "Ahmedabad Navratri 2026",
    ],
    description: SITE_CONFIG.defaultDescription,
    image: [
      `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
      `${SITE_CONFIG.url}/images/extracted_img_23.jpg`,
    ],
    startDate: SITE_CONFIG.event.startDate,
    endDate: SITE_CONFIG.event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: SITE_CONFIG.event.venueName,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.event.address.street,
        addressLocality: SITE_CONFIG.event.address.city,
        addressRegion: SITE_CONFIG.event.address.state,
        postalCode: SITE_CONFIG.event.address.postalCode,
        addressCountry: SITE_CONFIG.event.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.event.geo.latitude,
        longitude: SITE_CONFIG.event.geo.longitude,
      },
      hasMap: SITE_CONFIG.event.mapsUrl,
    },
    organizer: {
      "@type": "Organization",
      name: SITE_CONFIG.contact.organizers,
      url: SITE_CONFIG.url,
    },
    offers: {
      "@type": "AggregateOffer",
      name: "Rudaah Garba 2026 Season Passes",
      url: "https://facepassevents.com/events/rudaah-garba-99847b3c7e77478eb1d294cec8956a29",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01T00:00:00+05:30",
    },
    url: `${SITE_CONFIG.url}/#passes`,
    inLanguage: "en-IN",
  };

  return <JsonLd data={schema} />;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${SITE_CONFIG.url}${crumb.item}`,
    })),
  };

  return <JsonLd data={schema} />;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={schema} />;
}
