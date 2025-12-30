"use client"

import { useState, useEffect } from "react"
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  Award,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock product data
const productData = {
  id: "1",
  title: "روکش فرمان چرم نوباک دست‌دوز",
  englishTitle: "Hand-Stitched Nubuck Leather Steering Wheel Cover",
  price: 3500000,
  originalPrice: 4200000,
  discount: 17,
  rating: 5,
  reviews: 128,
  inStock: true,
  sku: "SWC-2024-001",
  description:
    "روکش فرمان لوکس از چرم نوباک اصل با دوخت دستی و نخ‌های مقاوم ایتالیایی. طراحی ارگونومیک با لایه ضد عرق و لغزش، مناسب برای تمامی فصول. محصولی از برند معتبر اروپایی با گارانتی یک ساله.",
  images: [
    "/luxury-nubuck-leather-steering-wheel-cover.jpg",
    "/luxury-leather-steering-wheel-cover.jpg",
    "/premium-car-steering-wheel-cover-leather-with-gold.jpg",
    "/luxury-car-interior-with-premium-leather-steering-.jpg",
  ],
  specifications: [
    { label: "جنس", value: "چرم نوباک اصل" },
    { label: "دوخت", value: "دستی با نخ ایتالیایی" },
    { label: "قطر", value: "37-39 سانتی‌متر" },
    { label: "ضخامت", value: "5 میلی‌متر" },
    { label: "رنگ", value: "مشکی با دوخت طلایی" },
    { label: "وزن", value: "320 گرم" },
    { label: "کشور سازنده", value: "آلمان" },
    { label: "گارانتی", value: "یک سال" },
  ],
  features: [
    "ضد عرق و ضد لغزش",
    "طراحی ارگونومیک برای راحتی بیشتر",
    "مقاوم در برابر سایش و دماهای مختلف",
    "آسیب به فرمان اصلی را کاهش می‌دهد",
    "نصب آسان بدون نیاز به ابزار",
    "قابل شستشو و تمیز کردن",
  ],
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productData.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + productData.images.length) % productData.images.length)
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navigation Breadcrumb */}
      <div className="border-b border-border/30 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav
            className={`flex items-center gap-2 text-sm ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } transition-all duration-700`}
          >
            <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
              خانه
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <Link href="/products" className="text-muted-foreground transition-colors hover:text-primary">
              محصولات
            </Link>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{productData.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div
            className={`space-y-6 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            } transition-all duration-1000`}
          >
            {/* Main Image */}
            <div className="glossy-card group relative aspect-square overflow-hidden rounded-lg">
              <img
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/70 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/70 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Discount Badge */}
              {productData.discount && (
                <div className="absolute top-6 left-6 rounded-full bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground shadow-lg">
                  {productData.discount}٪ تخفیف
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`glossy-card aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                      : "hover:scale-105 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`تصویر ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div
            className={`space-y-8 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            } transition-all duration-1000 delay-300`}
          >
            {/* Rating & Stock */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({productData.reviews} نظر)</span>
              </div>
              {productData.inStock ? (
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  موجود در انبار
                </div>
              ) : (
                <div className="text-sm text-destructive">ناموجود</div>
              )}
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                {productData.title}
              </h1>
              <p className="text-lg text-muted-foreground">{productData.englishTitle}</p>
              <p className="text-sm text-muted-foreground">کد محصول: {productData.sku}</p>
            </div>

            {/* Price */}
            <div className="glossy-card space-y-2 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-bold text-primary">
                      {productData.price.toLocaleString("fa-IR")}
                    </span>
                    <span className="text-xl text-foreground">تومان</span>
                  </div>
                  {productData.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">
                        {productData.originalPrice.toLocaleString("fa-IR")}
                      </span>
                      <span className="text-sm text-muted-foreground">تومان</span>
                    </div>
                  )}
                </div>
                {productData.discount && (
                  <div className="rounded-full bg-destructive/20 px-6 py-3 text-xl font-bold text-destructive">
                    {productData.discount}٪
                  </div>
                )}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="glossy-card space-y-4 rounded-lg p-6">
              <label className="text-sm font-semibold text-muted-foreground">تعداد</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  -
                </button>
                <span className="min-w-[3rem] text-center text-2xl font-bold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 gap-3 bg-primary py-7 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/50"
              >
                <ShoppingBag className="h-5 w-5" />
                افزودن به سبد خرید
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 bg-transparent py-7 text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 bg-transparent py-7 text-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Truck, text: "ارسال رایگان" },
                { icon: Shield, text: "گارانتی اصالت" },
                { icon: Award, text: "کیفیت برتر" },
                { icon: Clock, text: "پشتیبانی ۲۴/۷" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="glossy-card flex items-center gap-3 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                >
                  <benefit.icon className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & Specifications */}
        <div
          className={`mt-16 space-y-8 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all duration-1000 delay-500`}
        >
          {/* Description */}
          <div className="glossy-card space-y-6 rounded-lg p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-white">توضیحات محصول</h2>
            <p className="leading-relaxed text-muted-foreground text-lg">{productData.description}</p>
          </div>

          {/* Features */}
          <div className="glossy-card space-y-6 rounded-lg p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-white">ویژگی‌های محصول</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="glossy-card space-y-6 rounded-lg p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-white">مشخصات فنی</h2>
            <div className="grid gap-4">
              {productData.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-border/30 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
