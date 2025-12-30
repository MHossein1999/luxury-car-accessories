"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection({ isLoaded }: { isLoaded: boolean }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="lg:h-screen"
    >
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-right py-0 lg:py-24 lg:h-full lg:justify-center"
      >
        {/* TITLE */}
        <motion.h1
          variants={fadeInUp}
          className={`hero-title text-balance text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-normal text-white transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          لوازم جانبی لوکس خودرو
          <br />
          انتخابی برای رانندگان خاص و متفاوت
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeInUp}
          className={`hero-text mx-auto text-center lg:mx-0 lg:text-right max-w-xl lg:max-w-none text-pretty sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 transition-all duration-1000 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          مجموعه‌ای منحصر به فرد از لوازم جانبی خودرو که با دقت برای افزایش
          زیبایی، راحتی و عملکرد داخلی خودرو شما طراحی شده است. کیفیت و سبک را
          در هر جزئیات تجربه کنید.
        </motion.p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap items-center lg:justify-start justify-center gap-5 pt-4 md:-mt-4 mt-10">
          {/* CTA 1 */}
          <motion.div
            variants={fadeInUp}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#products">
              <Button
                size="lg"
                className="group h-12 bg-[#6366f1] px-8 text-base font-semibold text-white shadow-2xl shadow-[#6366f1]/40 transition-all duration-300 hover:scale-[1.03] hover:bg-[#5558e3] hover:shadow-[0_0_30px_rgba(15,44,44,0.6)] cursor-pointer"
              >
                مشاهده محصولات
                <ChevronLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-2" />
              </Button>
            </a>
          </motion.div>
          {/* CTA 2 */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="
            h-12 border-2 border-white/20 bg-black px-6 text-base font-semibold text-white 
            backdrop-blur-sm transition-all duration-300 
            hover:scale-[1.03] hover:border-white/40 hover:bg-[#1E1B4B] cursor-pointer"
            >
              درباره ما
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
