import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactCTA from "@/components/common/ContactCTA";
import ScrollReveal from "@/components/common/ScrollReveal";
import { business } from "@/config/business";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Premium Dog Care in Sri Lanka`,
    template: `%s | ${business.name}`,
  },
  description: business.seo.defaultDescription,
  keywords: business.seo.keywords,
  authors: [{ name: business.name }],
  metadataBase: new URL("https://www.serendibpaws.lk"),
  icons: {
    icon: "/images/logo-mark.svg",
  },
  openGraph: {
    type: "website",
    title: `${business.name} | Premium Dog Care in Sri Lanka`,
    description: business.seo.defaultDescription,
    siteName: business.name,
    images: ["/images/scene-garden.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Premium Dog Care in Sri Lanka`,
    description: business.seo.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: business.name,
    description: business.seo.defaultDescription,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.line2,
      addressCountry: business.address.country,
    },
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
        <main>{children}</main>
        <ContactCTA />
        <Footer />
      </body>
    </html>
  );
}
