import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";
import CustomFont from "next/font/local";
import Head from "next/head";

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
    "Enova ideathon",
    "Enova RC show",
    "Enova fashion show",
    "tech events 2025",
  ],
  title: {
    default: "Enova '25",
    template: "%s | Enova '25",
  },
  description:
    "Join Enova '25, a three-day tech fest by IEDC MEA SB with talks, ideathon, RC shows, cultural performances, and more. Register now for an unforgettable experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${punavuori.variable} antialiased dark scroll-smooth`}>
        <div>
          <NavBar />
        </div>
        {children}

        <Head>
          <meta property="og:title" content="Enova '25 | Tech Fest" />
          <meta
            property="og:description"
            content="Join Enova '25, a three-day tech fest by IEDC MEA SB with talks, ideathon, RC shows, cultural performances, and more!"
          />
          <meta property="og:image" content="/enova logo.png" />
          <meta property="og:url" content="https://enova.iedcmea.org" />
          <meta property="og:type" content="website" />

          <link rel="canonical" href="https://enova.iedcmea.org" />
        </Head>
      </body>
    </html>
  );
}
