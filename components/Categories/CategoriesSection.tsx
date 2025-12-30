"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CategoriesSection() {
  return (
    <motion.section
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="scroll-mt-32 relative overflow-hidden bg-linear-to-b from-background to-[oklch(0.10_0.01_240)] py-15"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          className="lg:mb-15 space-y-6 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-semibold uppercase tracking-[0.35em] text-primary text-4xl md:text-6xl lg:text-7xl"
          >
            دسته‌بندی محصولات
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mb-5 mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-gray-200"
          >
            مجموعه کاملی از لوازم جانبی لوکس برای هر بخش از خودروی شما
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
