import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deluxe Auto Werks — Precision Auto Body Craft | West Chicago, IL",
  description:
    "West Chicago's trusted body shop since 2010. Collision repair, custom paint, and restoration done right the first time.",
  openGraph: {
    title: "Deluxe Auto Werks",
    description:
      "Precision auto body craft. Collision repair, custom paint, and restoration in West Chicago, IL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
