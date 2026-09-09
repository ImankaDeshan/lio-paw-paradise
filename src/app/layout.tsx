import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactCTA from "@/components/common/ContactCTA";
import ScrollReveal from "@/components/common/ScrollReveal";
import { business } from "@/config/business";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://liospawparadise.com"),
  title: {
    default: `${business.name} | Dog Boarding, Housing & Care in Ahangama, Galle & Matara`,
    template: `%s | ${business.name}`,
  },
  description: business.seo.defaultDescription,
  keywords: business.seo.keywords,
  authors: [{ name: business.name, url: "https://liospawparadise.com" }],
  creator: business.name,
  publisher: business.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-mark.svg",
    apple: "/images/logo-mark.svg",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liospawparadise.com",
    siteName: business.name,
    title: `${business.name} | Dog Boarding, Housing & Care in Ahangama, Galle & Matara`,
    description: business.seo.defaultDescription,
    images: [
      {
        url: "/images/Hero/Image1.jpg",
        width: 1200,
        height: 630,
        alt: "Happy dog relaxing at Lio's Paw Paradise in Ahangama, Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Dog Boarding, Housing & Care in Ahangama, Galle & Matara`,
    description: business.seo.defaultDescription,
    images: ["/images/Hero/Image1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://liospawparadise.com/#business",
        name: business.name,
        image: "https://liospawparadise.com/images/Hero/Image1.jpg",
        url: "https://liospawparadise.com",
        telephone: business.phoneDisplay,
        email: business.email,
        priceRange: "$$",
        description: business.seo.defaultDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.line1,
          addressLocality: business.address.line2,
          addressRegion: "Southern Province",
          addressCountry: "LK",
        },
        areaServed: [
          { "@type": "City", name: "Galle" },
          { "@type": "City", name: "Matara" },
          { "@type": "AdministrativeArea", name: "Ahangama" },
          { "@type": "AdministrativeArea", name: "Weligama" },
          { "@type": "AdministrativeArea", name: "Unawatuna" },
          { "@type": "AdministrativeArea", name: "Mirissa" },
          { "@type": "AdministrativeArea", name: "Southern Province, Sri Lanka" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dog Boarding & Pet Care Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dog Boarding & Housing",
                description:
                  "Safe, supervised overnight, short-term, and long-term accommodation for dogs in Ahangama, Southern Sri Lanka.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dog Care & Daycare",
                description:
                  "Loving daily attention, secure garden play, and personalized companionship for dogs.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Nutrition & Medicine Management",
                description:
                  "Freshly prepared meals matched to your dog's diet and exact veterinary medication administration.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://liospawparadise.com/#website",
        url: "https://liospawparadise.com",
        name: business.name,
        publisher: {
          "@id": "https://liospawparadise.com/#business",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollReveal />
        <Navbar />
        <main id="main-content">{children}</main>
        <ContactCTA />
        <Footer />
      </body>
    </html>
  );
}
