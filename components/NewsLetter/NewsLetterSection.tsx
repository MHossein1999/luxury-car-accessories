"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function NewsletterSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="
        relative overflow-hidden 
        bg-linear-to-b from-[oklch(0.10_0.01_240)] to-background
        py-16 sm:py-20 lg:py-28
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-1/2 right-1/2 h-200 w-200 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <motion.p
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-gray-200"
        >
          خبرنامه
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="font-semibold uppercase tracking-[0.35em] text-primary text-4xl md:text-6xl lg:text-7xl mt-4"
        >
          از جدیدترین محصولات باخبر شوید
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-pretty text-lg sm:text-xl leading-relaxed text-gray-300 mt-6"
        >
          با عضویت در خبرنامه ما، از تخفیف‌های ویژه و محصولات جدید مطلع شوید
        </motion.p>

        {/* Input + Button */}
        <motion.div
          variants={fadeInUp}
          className="
            glossy-card mx-auto mt-10 
            flex max-w-2xl flex-col items-center gap-4 
            rounded-lg p-2 sm:flex-row justify-end
            bg-white/5 backdrop-blur-md border border-white/10
          "
        >
          <input
            type="email"
            placeholder="آدرس ایمیل خود را وارد کنید"
            className="
              flex-1 bg-transparent px-6 py-4 
              text-foreground placeholder:text-muted-foreground 
              focus:outline-none
            "
          />
          <Button
            size="lg"
            className="
              bg-linear-to-r from-primary to-primary/90 
              px-10 font-semibold text-primary-foreground 
              shadow-lg transition-all duration-300 
              hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer
            "
          >
            عضویت
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
