import type React from "react";
import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Primary font: Vazirmatn
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
});

// Secondary fallback: Geist
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "لوازم جانبی خودرو",
  description: "فروشگاه آنلاین لوازم جانبی پرمیوم خودرو",
  icons: {
    icon: [
      {
        url: "/favicon-car.png",
        type: "image/png",
      },
      {
        url: "/favicon-car.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body
        className={`${vazirmatn.variable} ${geist.variable} font-sans antialiased dark`}
        style={{ fontFamily: "Vazirmatn, Geist, sans-serif" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
