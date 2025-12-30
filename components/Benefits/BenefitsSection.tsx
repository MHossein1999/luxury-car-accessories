"use client";

import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";
import { benefits } from "@/data/benefits";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function BenefitsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative overflow-hidden bg-linear-to-b from-background to-[oklch(0.10_0.01_240)] mb-18"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          className="mb-14 space-y-6 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-gray-200"
          >
            چرا اُتو لوکس؟
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="font-semibold uppercase tracking-[0.35em] text-primary text-4xl md:text-6xl lg:text-7xl"
          >
            مزایای خرید از ما
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <BenefitCard benefit={benefit} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
