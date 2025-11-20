import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Glass Lebanon – Windshield Repair in Beirut | Makoukji Auto Glass",
  description:
    "Makoukji Auto Glass in Dora, Beirut offers expert auto glass services in Lebanon: windshield repair and replacement, car window tinting, chip repair, and mobile glass service across Greater Beirut.",
  keywords: [
    "Auto Glass Lebanon",
    "Windshield Repair Beirut",
    "Windshield Replacement Lebanon",
    "Car Tinting Lebanon",
    "Window Tinting Beirut",
    "Mobile Glass Service Lebanon",
    "Auto Glass Dora Highway",
    "Makoukji Auto Glass",
  ],
  openGraph: {
    title: "Makoukji Auto Glass | Auto Glass Lebanon & Windshield Repair Beirut",
    description:
      "Trusted since 1964 for professional auto glass in Lebanon: windshield repair, chip repair, car window tinting, and mobile glass service from Dora, Beirut.",
    type: "website",
    locale: "en_LB",
    siteName: "Makoukji Auto Glass",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SchemaMarkup />
        <header>
          <Navbar />
        </header>
        <WhatsAppButton />
        <main id="main-content">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
