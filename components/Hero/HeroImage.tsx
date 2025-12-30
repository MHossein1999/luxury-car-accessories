"use client";

import { motion, MotionValue } from "framer-motion";

export default function HeroImage({
  isLoaded,
  imageX,
}: {
  isLoaded: boolean;
  imageX: MotionValue<number>;
}) {
  return (
    <motion.div
      className={`relative order-first lg:order-last py-0 lg:py-24 ${
        isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
      }`}
      style={{ x: imageX }}
    >
      <div className="relative h-90 sm:h-100 lg:h-175 w-full max-w-md sm:max-w-lg mx-auto overflow-hidden rounded-3xl lg:max-w-none lg:w-full">
        <img
          src="/images/deniz-demirci-is0tujvfo28-unsplash.png"
          alt="BMW luxury interior"
          className="h-full w-full object-cover object-center"
          style={{
            filter: "contrast(1.15) saturate(0.8) brightness(0.92)",
            aspectRatio: "4/3",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
      </div>
    </motion.div>
  );
}
