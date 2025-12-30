"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function LuxuryHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#4a4a52] via-[#2a2a32] to-[#0a0a12] text-foreground">
      {/* Ambient Gradient Background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 bg-[#4a4a52] transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo - Left side for RTL */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <div className="text-center">
                <div className="text-[10px] font-bold leading-tight text-[#2a2a32]">اُتو</div>
                <div className="text-[10px] font-bold leading-tight text-[#2a2a32]">فورج</div>
              </div>
            </div>
          </div>

          {/* Navigation - Right side for RTL */}
          <div className="flex items-center gap-8">
            <button className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-white">
              تماس با ما
            </button>
            <button className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-white">
              فروش ویژه
            </button>
            <button className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-white">
              جدیدترین‌ها
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white/90 transition-all duration-300 hover:text-white">
              فروشگاه
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto grid min-h-screen max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 pt-24 lg:grid-cols-2 lg:px-12">
        {/* Left Content - Text Section */}
        <div
          className={`relative z-10 space-y-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          {/* Main Heading */}
          <h1 className="font-display text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            فراتر از محدودیت‌ها
            <br />
            برانید
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl font-medium leading-relaxed text-white/90 md:text-3xl">
            لاستیک، رینگ و لوازم جانبی
            <br />
            که شما را به حرکت درمی‌آورند
          </h2>

          {/* Description */}
          <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            خودروی خود را با لاستیک‌های درجه یک، رینگ‌های شیک و لوازم جانبی ضروری که برای عملکرد، دوام و سبک طراحی شده‌اند،
            ارتقا دهید.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="h-14 rounded-md bg-[#6366f1] px-10 text-base font-semibold text-white shadow-xl shadow-[#6366f1]/40 transition-all duration-300 hover:scale-[1.05] hover:bg-[#5558e3] hover:shadow-2xl hover:shadow-[#6366f1]/60"
            >
              مشاهده کاتالوگ
            </Button>
          </div>
        </div>

        {/* Right Content - Car Image with Product Card */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          {/* Car Image */}
          <div className="relative">
            <img
              src="/images/screenshot-202025-12-23-20140843.png"
              alt="خودروی لوکس"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Product Card Overlay */}
          <div
            className={`absolute left-8 bottom-12 w-64 rounded-lg bg-black/60 p-6 backdrop-blur-xl transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Product Image */}
            <div className="mb-4 flex justify-center">
              <div className="h-32 w-32 overflow-hidden rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-900">
                <img src="/luxury-car-wheel-hsr-myth03.jpg" alt="رینگ لوکس" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Product Title */}
            <h3 className="text-center text-lg font-bold text-white">HSR MYTH03 R20</h3>
            <p className="text-center text-sm text-white/60">(8MF/BO)</p>

            {/* Product Specs */}
            <div className="mt-4 space-y-1.5 text-right text-xs text-white/80">
              <p>• مجموعه ۵ عددی - بدون سنسور فشار لاستیک</p>
              <p>• رینگ ۱۷ × ۷.۵ اینچی با الگوی پیچ ۵ × ۵</p>
              <p>• لاستیک گودریچ ۲۵۵ ۷۵ R17 گل‌آفرود</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        className={`absolute bottom-12 right-1/2 translate-x-1/2 transition-all duration-1000 delay-[1100ms] ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium tracking-[0.35em] text-white/50">اسکرول</span>
          <div className="relative h-24 w-0.5 overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-0 h-1/3 w-full animate-scroll-pulse bg-gradient-to-b from-primary to-transparent shadow-lg shadow-primary/60" />
          </div>
        </div>
      </div>
    </div>
  )
}
