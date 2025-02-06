import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";
import CustomFont from "next/font/local";

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
  openGraph: {
    description:
      "Join Enova '25, a premier three-day tech fest by IEDC MEA SB, featuring inspiring talk sessions, ideathon, cultural performances, RC shows, and fashion show. Don't miss out, register your tickets now for an unforgettable experience!",
  },
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
      </body>
    </html>
  );
}
