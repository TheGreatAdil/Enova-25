import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";
import CustomFont from "next/font/local";

const punavuori = CustomFont({
  src: "../fonts/punavuori.woff",
  variable: "--font-punavuori",
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enova '25",
  description: "As distinct as you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased dark scroll-smooth"}>
        <div>
          <NavBar />
        </div>
        {children}
      </body>
    </html>
  );
}
