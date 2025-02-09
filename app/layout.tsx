import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";
import CustomFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const punavuori = CustomFont({
  src: "../fonts/punavuori.woff",
  variable: "--font-punavuori",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enova.iedcmea.org"),
  keywords: [
    "Enova",
    "Enova tech fest",
    "Enova '25",
    "IEDC MEA SB events",
    "tech fest Kerala",
    "MEA Engineering College events",
    "student innovation events",
    "tech events 2025",
  ],
  title: {
    default: "Enova '25",
    template: "%s | Enova '25 Tech Fest",
  },
  description:
    "Join the Enova '25 tech fest at MEA Engineering College. Experience innovative talks, ideathon challenges, RC shows, and cultural performances at Enova '25.",
  openGraph: {
    type: "website",
    title: "Enova '25",
    description:
      "Join the Enova '25 tech fest at MEA Engineering College. Experience innovative talks, ideathon challenges, RC shows, and cultural performances at Enova '25.",
    url: "https://enova.iedcmea.org",
    siteName: "Enova '25",
    images: [
      {
        url: "/enova logo.png",
        width: 1200,
        height: 630,
        alt: "Enova '25 Tech Fest Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://enova.iedcmea.org",
  },
};

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Enova '25",
    description:
      "Join the Enova '25 tech fest at MEA Engineering College. Experience innovative talks, ideathon challenges, RC shows, and cultural performances at Enova '25.",
    image: "/enova logo.png",
    startDate: "2025-02-21",
    endDate: "2025-02-23",
    location: {
      "@type": "Place",
      name: "MEA Engineering College",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Perinthalmanna",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        postalCode: "679325",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "IEDC MEA SB",
      url: "https://iedcmea.org",
    },
    offers: {
      "@type": "Offer",
      url: "https://enova.iedcmea.org/#tickets",
      price: "799",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-02-9",
    },
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    performer: {
      "@type": "Organization",
      name: "IEDC MEA SB",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${punavuori.variable} antialiased dark scroll-smooth`}>
        <SchemaMarkup />
        <div>
          <NavBar />
        </div>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
