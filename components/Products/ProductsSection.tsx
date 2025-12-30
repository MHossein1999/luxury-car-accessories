"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function ProductsSection() {
  return (
    <motion.section
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden bg-linear-to-b from-[oklch(0.10_0.01_240)] to-background py-18 lg:py-32"
    >
      {/* Background Blurs */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 h-150 w-150 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-125 w-125 rounded-full bg-accent/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-12">
        {/* Header */}
        <motion.div className="mb-5 text-center">
          <div className="space-y-6">
            <h2 className="font-semibold uppercase tracking-[0.35em] text-primary text-4xl md:text-6xl lg:text-7xl">
              پرفروش‌ترین محصولات
            </h2>

            <p className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-gray-200">
              محبوب‌ترین محصولات انتخاب شده توسط مشتریان ما
            </p>
          </div>

          {/* Desktop "View All" Button */}
          <div className="hidden lg:flex mt-10">
            <Button
              size="lg"
              className="hidden border-primary/40 bg-transparent text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 lg:flex cursor-pointer"
            >
              مشاهده همه
              <ChevronLeft className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
