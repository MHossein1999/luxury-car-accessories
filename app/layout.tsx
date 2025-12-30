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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
