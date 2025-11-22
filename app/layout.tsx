import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auto Glass Lebanon – Windshield & Glass Replacement in Beirut | Makoukji Auto Glass",
  description:
    "Makoukji Auto Glass in Dora, Beirut offers expert auto glass services in Lebanon: windshield and auto glass replacement for windshields, backlights, door glass, side glass, and roof glass across Greater Beirut.",
  keywords: [
    "Auto Glass Lebanon",
    "Windshield Replacement Beirut",
    "Windshield Replacement Lebanon",
    "Car Glass Lebanon",
    "Door Glass Replacement Lebanon",
    "Backlight Replacement Lebanon",
    "Side Glass Replacement Beirut",
    "Auto Glass Dora Highway",
    "Makoukji Auto Glass",
  ],
  openGraph: {
    title: "Makoukji Auto Glass | Auto Glass Lebanon & Windshield Replacement Beirut",
    description:
      "Trusted since 1964 for professional auto glass in Lebanon: windshield, backlight, door glass, side glass, and roof glass replacement from Dora, Beirut.",
    type: "website",
    locale: "en_LB",
    siteName: "Makoukji Auto Glass",
  },
  icons: {
    icon: "/makoukji-small-logo.png",
    shortcut: "/makoukji-small-logo.png",
    apple: "/makoukji-small-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
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
