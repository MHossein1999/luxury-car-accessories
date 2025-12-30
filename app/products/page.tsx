"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  ChevronLeft,
  Star,
  SlidersHorizontal,
  Grid3x3,
  List,
} from "lucide-react";

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 20000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useState(() => {
    setTimeout(() => setIsLoaded(true), 100);
  });

  const categories = [
    { id: "steering", label: "روکش فرمان", count: 45 },
    { id: "interior", label: "داشبورد و کنسول", count: 38 },
    { id: "seats", label: "روکش صندلی", count: 52 },
    { id: "floor", label: "کفپوش و فرش", count: 29 },
    { id: "accessories", label: "لوازم جانبی", count: 67 },
  ];

  const brands = [
    { id: "luxury", label: "لوکس اتو پریمیوم" },
    { id: "italian", label: "چرم ایتالیایی" },
    { id: "german", label: "آلمانی کلاسیک" },
    { id: "sport", label: "اسپرت پلاس" },
  ];

  const products = [
    {
      id: 1,
      title: "روکش فرمان چرم نوباک",
      price: 4950000,
      originalPrice: 6500000,
      rating: 5,
      reviews: 124,
      image: "/luxury-nubuck-leather-steering-wheel-cover.jpg",
      tag: "پرفروش",
      discount: 24,
    },
    {
      id: 2,
      title: "کیت داشبورد دوخت دستی",
      price: 8750000,
      rating: 5,
      reviews: 89,
      image: "/hand-stitched-leather-dashboard-kit.jpg",
      tag: "جدید",
    },
    {
      id: 3,
      title: "روکش صندلی آلکانتارا",
      price: 12500000,
      originalPrice: 15000000,
      rating: 5,
      reviews: 156,
      image: "/alcantara-car-seat-covers-premium.jpg",
      tag: "تخفیف ویژه",
      discount: 17,
    },
    {
      id: 4,
      title: "کیت کامل داخلی اسپرت",
      price: 18900000,
      rating: 5,
      reviews: 73,
      image: "/complete-sport-car-interior-kit.jpg",
      tag: "پرمیوم",
    },
    {
      id: 5,
      title: "روکش فرمان چرم طبیعی",
      price: 5650000,
      rating: 5,
      reviews: 201,
      image: "/premium-car-steering-wheel-cover-leather-with-gold.jpg",
      tag: "پیشنهاد ویژه",
    },
    {
      id: 6,
      title: "پکیج لوکس داخلی",
      price: 15400000,
      originalPrice: 18000000,
      rating: 5,
      reviews: 94,
      image: "/luxury-car-interior-accessories.jpg",
      tag: "محبوب",
      discount: 14,
    },
    {
      id: 7,
      title: "روکش صندلی چرم ایتالیایی",
      price: 9850000,
      rating: 5,
      reviews: 167,
      image: "/luxury-car-seat-covers.jpg",
      tag: "برترین",
    },
    {
      id: 8,
      title: "کیت پریمیوم داشبورد",
      price: 7200000,
      rating: 5,
      reviews: 112,
      image: "/premium-car-dashboard-accessories.jpg",
      tag: "جدید",
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-background via-[oklch(0.10_0.01_240)] to-background text-foreground"
      dir="rtl"
    >
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/20 bg-gradient-to-b from-background/98 to-background/95 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-12">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground shadow-lg shadow-primary/50">
                0
              </span>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-primary text-shimmer">
              لوکس اُتو
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden text-sm font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground lg:block">
              خانه
            </button>
            <button className="hidden text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:scale-105 lg:block">
              فروشگاه
            </button>
            <button className="hidden text-sm font-medium tracking-wide text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground lg:block">
              درباره ما
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-24">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
          {/* Page Header */}
          <div
            className={`mb-16 space-y-6 text-center transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              محصولات پرمیوم
            </p>
            <h2 className="font-display text-balance text-6xl font-bold text-white lg:text-7xl">
              مجموعه <span className="text-shimmer">لوکس اتو</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-xl leading-relaxed text-[oklch(0.70_0.02_240)]">
              بهترین لوازم جانبی خودرو با کیفیتی بی‌نظیر و طراحی منحصربه‌فرد
            </p>
          </div>

          {/* Products Grid Layout */}
          <div className="flex gap-12">
            {/* Desktop Sidebar */}
            <aside
              className={`hidden w-80 flex-shrink-0 lg:block ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              } transition-all duration-1000 delay-200`}
            >
              <div className="glossy-card sticky top-32 space-y-8 rounded-lg p-8">
                <div>
                  <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
                    <SlidersHorizontal className="h-5 w-5 text-primary" />
                    فیلترها
                  </h3>
                </div>

                {/* Categories Filter */}
                <div className="space-y-4 border-t border-border/30 pt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    دسته‌بندی
                  </h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="group flex cursor-pointer items-center justify-between transition-all duration-300 hover:text-primary"
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                            className="border-border/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                          />
                          <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                            {category.label}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-6 border-t border-border/30 pt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    محدوده قیمت
                  </h4>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000000}
                      step={100000}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {formatPrice(priceRange[0])} تومان
                      </span>
                      <span className="text-muted-foreground">تا</span>
                      <span className="font-medium text-foreground">
                        {formatPrice(priceRange[1])} تومان
                      </span>
                    </div>
                  </div>
                </div>

                {/* Brands Filter */}
                <div className="space-y-4 border-t border-border/30 pt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    برند
                  </h4>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <label
                        key={brand.id}
                        className="group flex cursor-pointer items-center gap-3 transition-all duration-300 hover:text-primary"
                      >
                        <Checkbox
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrand(brand.id)}
                          className="border-border/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                        />
                        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                          {brand.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="border-t border-border/30 pt-6">
                  <Button
                    variant="outline"
                    className="w-full border-primary/40 bg-transparent text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedBrands([]);
                      setPriceRange([0, 20000000]);
                    }}
                  >
                    پاک کردن فیلترها
                  </Button>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div
                className={`glossy-card mb-8 flex flex-col items-center justify-between gap-4 rounded-lg p-6 sm:flex-row ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } transition-all duration-1000 delay-300`}
              >
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {products.length}
                    </span>{" "}
                    محصول یافت شد
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="transition-all duration-300"
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="transition-all duration-300"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  <select className="glossy-card rounded-md border-border/30 bg-transparent px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="newest" className="bg-card">
                      جدیدترین
                    </option>
                    <option value="price-low" className="bg-card">
                      ارزان‌ترین
                    </option>
                    <option value="price-high" className="bg-card">
                      گران‌ترین
                    </option>
                    <option value="popular" className="bg-card">
                      محبوب‌ترین
                    </option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                } ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } transition-all duration-1000 delay-400`}
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`glossy-card group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${
                      viewMode === "list"
                        ? "flex flex-col gap-6 sm:flex-row"
                        : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list"
                          ? "aspect-square w-full sm:w-64"
                          : "aspect-[3/4]"
                      }`}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {product.discount && (
                        <div className="absolute top-6 left-6 rounded-full bg-destructive px-3 py-1.5 text-xs font-bold text-destructive-foreground shadow-lg">
                          {product.discount}٪ تخفیف
                        </div>
                      )}
                      <div className="absolute top-6 right-6">
                        <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
                          {product.tag}
                        </span>
                      </div>
                      <button className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-12 items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-xl shadow-primary/40 opacity-0 transition-all duration-500 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100">
                        <ShoppingBag className="h-4 w-4" />
                        افزودن به سبد
                      </button>
                    </div>

                    <div
                      className={`p-8 ${
                        viewMode === "list"
                          ? "flex flex-1 flex-col justify-between"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="mb-3 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                          <span className="mr-2 text-xs text-muted-foreground">
                            ({product.reviews} نظر)
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-semibold leading-relaxed text-white transition-colors duration-300 group-hover:text-primary">
                          {product.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-3">
                            <span className="font-display text-2xl font-bold text-primary">
                              {formatPrice(product.price)} تومان
                            </span>
                          </div>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)} تومان
                            </span>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-primary/30 bg-transparent transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-16 text-center">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary via-primary to-primary/90 px-16 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(218,165,32,0.5)]"
                >
                  بارگذاری بیشتر
                  <ChevronLeft className="mr-2 h-5 w-5 transition-transform duration-500 group-hover:-translate-x-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
              <SlidersHorizontal className="h-6 w-6 text-primary" />
              فیلترها
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="space-y-8">
            {/* Categories Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                دسته‌بندی
              </h4>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="group flex cursor-pointer items-center justify-between transition-all duration-300 hover:text-primary"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                        className="border-border/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                      />
                      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {category.label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({category.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-6 border-t border-border/30 pt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                محدوده قیمت
              </h4>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={20000000}
                  step={100000}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">
                    {formatPrice(priceRange[0])} تومان
                  </span>
                  <span className="text-muted-foreground">تا</span>
                  <span className="font-medium text-foreground">
                    {formatPrice(priceRange[1])} تومان
                  </span>
                </div>
              </div>
            </div>

            {/* Brands Filter */}
            <div className="space-y-4 border-t border-border/30 pt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                برند
              </h4>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <label
                    key={brand.id}
                    className="group flex cursor-pointer items-center gap-3 transition-all duration-300 hover:text-primary"
                  >
                    <Checkbox
                      checked={selectedBrands.includes(brand.id)}
                      onCheckedChange={() => toggleBrand(brand.id)}
                      className="border-border/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                    />
                    <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {brand.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="space-y-4 border-t border-border/30 pt-8">
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary/90 font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-105"
                onClick={() => setIsSidebarOpen(false)}
              >
                اعمال فیلترها
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/40 bg-transparent text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedBrands([]);
                  setPriceRange([0, 20000000]);
                }}
              >
                پاک کردن فیلترها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
