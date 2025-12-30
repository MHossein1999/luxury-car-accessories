"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import Navbar from "./Navabr/Navbar";
import HeroSection from "./Hero/HeroSection";
import HeroImage from "./Hero/HeroImage";

import CategoriesSection from "./Categories/CategoriesSection";
import ProductsSection from "./Products/ProductsSection";
import BenefitsSection from "./Benefits/BenefitsSection";
import NewsletterSection from "./NewsLetter/NewsLetterSection";
import FooterSection from "./Footer/FooterSection";

export function LuxuryLanding() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const imageX = useTransform(
    scrollY,
    [0, 500],
    [0, prefersReducedMotion ? 0 : -10]
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-background text-foreground"
      dir="rtl"
    >
      {/* NAVBAR */}
      <Navbar />
      {/* HERO SECTION */}
      <div className="relative min-h-screen overflow-hidden bg-[oklch(0.08_0.01_240)]">
        <div className="relative mx-auto grid max-w-screen-2xl items-start gap-10 sm:gap-8 lg:grid-cols-2 lg:gap-20 px-6 lg:px-12">
          {/* LEFT: TEXT */}
          <HeroSection isLoaded={isLoaded} />
          {/* RIGHT: IMAGE */}
          <HeroImage isLoaded={isLoaded} imageX={imageX} />
        </div>
      </div>
      {/* CATEGORIES SECTION */}
      <CategoriesSection />

      {/* PRODUCTS SECTION */}
      <ProductsSection />

      {/* BENEFITS SECTION */}
      <BenefitsSection />

      {/* NEWSLETTER */}
      <NewsletterSection />

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}
