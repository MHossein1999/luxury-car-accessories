"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FooterSection() {
  const socialIcons = [
    { id: "instagram", icon: Instagram },
    { id: "twitter", icon: Twitter },
    { id: "facebook", icon: Facebook },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="relative border-t border-border/30 bg-linear-to-b from-background to-[oklch(0.08_0.01_240)]"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-20 lg:px-12">
        <motion.div
          variants={staggerContainer}
          className="grid gap-16 text-center lg:grid-cols-4 lg:text-left"
        >
          {/* Brand + Social */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            <motion.h3
              variants={fadeInUp}
              className="font-display mb-6 text-3xl font-bold text-primary text-shimmer"
            >
              اُتو لوکس
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="mb-8 max-w-md leading-relaxed text-gray-200"
            >
              برترین فروشگاه آنلاین لوازم جانبی لوکس خودرو در ایران. ما به شما
              کمک می‌کنیم تا خودروی خود را به یک شاهکار هنری تبدیل کنید.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialIcons.map(({ id, icon: Icon }) => (
                <motion.button
                  key={id}
                  variants={fadeInUp}
                  className="
                    flex h-12 w-12 items-center justify-center 
                    rounded-full border border-border/50 text-gray-200 
                    transition-all duration-300 hover:scale-110 
                    hover:border-primary hover:bg-primary/10 cursor-pointer
                  "
                >
                  <Icon className="h-6 w-6" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Access */}
          <motion.div variants={fadeInUp}>
            <h4 className="mb-6 text-lg font-semibold text-white">
              دسترسی سریع
            </h4>
            <ul className="space-y-4">
              {[
                "درباره ما",
                "تماس با ما",
                "فروشگاه",
                "وبلاگ",
                "سوالات متداول",
              ].map((link) => (
                <motion.li key={link} variants={fadeInUp}>
                  <button className="text-gray-200 transition-all duration-300 hover:translate-x-2 hover:text-primary cursor-pointer">
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="mb-6 text-lg font-semibold text-white">
              خدمات مشتریان
            </h4>
            <ul className="space-y-4">
              {[
                "سیاست بازگشت",
                "حریم خصوصی",
                "شرایط و ضوابط",
                "راهنمای خرید",
                "پیگیری سفارش",
              ].map((link) => (
                <motion.li key={link} variants={fadeInUp}>
                  <button className="text-gray-200 transition-all duration-300 hover:translate-x-2 hover:text-primary cursor-pointer">
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 border-t border-border/30 pt-10 text-center"
        >
          <p className="text-sm text-gray-200">
            تمامی حقوق برای سایت اُتو لوکس محفوظ است.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
