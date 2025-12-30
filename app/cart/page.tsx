"use client";

import { useState, useEffect } from "react";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  CreditCard,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  ArrowLeft,
  CheckCircle2,
  Tag,
  Shield,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock cart data
const initialCartItems = [
  {
    id: "1",
    title: "روکش فرمان چرم نوباک دست‌دوز",
    price: 3500000,
    quantity: 1,
    image: "/luxury-nubuck-leather-steering-wheel-cover.jpg",
    inStock: true,
  },
  {
    id: "2",
    title: "کیت چرمی داشبورد دوخت دستی",
    price: 5200000,
    quantity: 2,
    image: "/hand-stitched-leather-dashboard-kit.jpg",
    inStock: true,
  },
  {
    id: "3",
    title: "روکش صندلی آلکانتارا پریمیوم",
    price: 12500000,
    quantity: 1,
    image: "/alcantara-car-seat-covers-premium.jpg",
    inStock: true,
  },
];

export default function CartCheckoutPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyDiscount = () => {
    if (discountCode.toLowerCase() === "luxury20") {
      setAppliedDiscount(20);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 5000000 ? 0 : 350000;
  const discount = (subtotal * appliedDiscount) / 100;
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-[#1a1a1a]"
        dir="rtl"
      >
        <div
          className={`text-center ${
            isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } transition-all duration-700`}
        >
          <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground" />
          <h2 className="mt-6 font-display text-3xl font-bold text-white">
            سبد خرید شما خالی است
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            محصولات لوکس خود را انتخاب کنید
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="mt-8 gap-2 bg-primary px-8 py-6 text-lg font-bold shadow-lg shadow-primary/40"
            >
              <ArrowLeft className="h-5 w-5" />
              مشاهده محصولات
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]" dir="rtl">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#1f1f1f]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6">
          <div
            className={`flex items-center justify-between ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            } transition-all duration-700`}
          >
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              {showCheckout ? "تکمیل خرید" : "سبد خرید"}
            </h1>
            <Link href="/products">
              <Button
                variant="outline"
                className="gap-2 border-white/20 bg-transparent text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4" />
                بازگشت به فروشگاه
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items / Checkout Form */}
          <div className="lg:col-span-2">
            {!showCheckout ? (
              // Cart Items
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`glossy-card overflow-hidden rounded-xl transition-all duration-700 ${
                      isLoaded
                        ? "translate-x-0 opacity-100"
                        : "translate-x-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-6 p-6">
                      {/* Product Image */}
                      <div className="group relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                            {item.title}
                          </h3>
                          <div className="mt-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-500">
                              موجود در انبار
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-[2rem] text-center text-xl font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Price & Remove */}
                          <div className="flex items-center gap-6">
                            <div className="text-left">
                              <div className="font-display text-2xl font-bold text-primary">
                                {(item.price * item.quantity).toLocaleString(
                                  "fa-IR"
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                تومان
                              </div>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="rounded-lg p-3 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-destructive/20 hover:text-destructive"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Checkout Form
              <div
                className={`glossy-card space-y-8 rounded-xl p-8 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                } transition-all duration-1000`}
              >
                <h2 className="font-display text-2xl font-bold text-white">
                  اطلاعات خریدار
                </h2>

                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-white">
                        <User className="h-4 w-4 text-primary" />
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        placeholder="نام کامل خود را وارد کنید"
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Phone className="h-4 w-4 text-primary" />
                        شماره تماس
                      </label>
                      <input
                        type="tel"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Mail className="h-4 w-4 text-primary" />
                      ایمیل
                    </label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    آدرس تحویل
                  </h3>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-white">
                        <MapPin className="h-4 w-4 text-primary" />
                        استان
                      </label>
                      <select className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="" className="bg-[#1f1f1f]">
                          انتخاب استان
                        </option>
                        <option value="tehran" className="bg-[#1f1f1f]">
                          تهران
                        </option>
                        <option value="isfahan" className="bg-[#1f1f1f]">
                          اصفهان
                        </option>
                        <option value="shiraz" className="bg-[#1f1f1f]">
                          شیراز
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Home className="h-4 w-4 text-primary" />
                        شهر
                      </label>
                      <select className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="" className="bg-[#1f1f1f]">
                          انتخاب شهر
                        </option>
                        <option value="tehran" className="bg-[#1f1f1f]">
                          تهران
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      آدرس کامل
                    </label>
                    <textarea
                      rows={4}
                      placeholder="آدرس دقیق خود را وارد کنید"
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">
                      کد پستی
                    </label>
                    <input
                      type="text"
                      placeholder="۱۲۳۴۵۶۷۸۹۰"
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    روش پرداخت
                  </h3>
                  <div className="grid gap-4">
                    <label className="glossy-card group flex cursor-pointer items-center gap-4 rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="h-5 w-5 text-primary"
                      />
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold text-white">
                          پرداخت آنلاین
                        </div>
                        <div className="text-sm text-muted-foreground">
                          پرداخت امن از طریق درگاه بانکی
                        </div>
                      </div>
                    </label>
                    <label className="glossy-card group flex cursor-pointer items-center gap-4 rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                      <input
                        type="radio"
                        name="payment"
                        className="h-5 w-5 text-primary"
                      />
                      <Truck className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-semibold text-white">
                          پرداخت در محل
                        </div>
                        <div className="text-sm text-muted-foreground">
                          پرداخت هنگام تحویل کالا
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className={`glossy-card sticky top-6 space-y-6 rounded-xl p-8 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } transition-all duration-1000 delay-300`}
            >
              <h2 className="font-display text-2xl font-bold text-white">
                خلاصه سفارش
              </h2>

              {/* Discount Code */}
              {!showCheckout && (
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Tag className="h-4 w-4 text-primary" />
                    کد تخفیف
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="کد تخفیف خود را وارد کنید"
                      className="flex-1 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button
                      onClick={applyDiscount}
                      variant="outline"
                      className="border-primary/40 bg-transparent text-primary transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                    >
                      اعمال
                    </Button>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      تخفیف {appliedDiscount}٪ اعمال شد
                    </div>
                  )}
                </div>
              )}

              {/* Order Details */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>جمع کل محصولات ({cartItems.length})</span>
                  <span className="font-semibold">
                    {subtotal.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>هزینه ارسال</span>
                  {shipping === 0 ? (
                    <span className="font-semibold text-green-500">رایگان</span>
                  ) : (
                    <span className="font-semibold">
                      {shipping.toLocaleString("fa-IR")} تومان
                    </span>
                  )}
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex items-center justify-between text-green-500">
                    <span>تخفیف</span>
                    <span className="font-semibold">
                      -{discount.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="rounded-lg bg-primary/10 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">
                    مجموع نهایی
                  </span>
                  <div className="text-left">
                    <div className="font-display text-3xl font-bold text-primary">
                      {total.toLocaleString("fa-IR")}
                    </div>
                    <div className="text-sm text-muted-foreground">تومان</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 border-t border-white/10 pt-6">
                {[
                  { icon: Shield, text: "خرید امن و مطمئن" },
                  { icon: Truck, text: "ارسال سریع به سراسر کشور" },
                  { icon: CheckCircle2, text: "ضمانت اصالت کالا" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <benefit.icon className="h-5 w-5 text-primary" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              {!showCheckout ? (
                <Button
                  onClick={() => setShowCheckout(true)}
                  size="lg"
                  className="w-full gap-3 bg-primary py-7 text-lg font-bold shadow-xl shadow-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/50"
                >
                  <CreditCard className="h-5 w-5" />
                  ادامه فرآیند خرید
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="w-full gap-3 bg-primary py-7 text-lg font-bold shadow-xl shadow-primary/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/50"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  تکمیل خرید و پرداخت
                </Button>
              )}

              {showCheckout && (
                <Button
                  onClick={() => setShowCheckout(false)}
                  variant="outline"
                  className="w-full border-white/20 bg-transparent text-white transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
                >
                  بازگشت به سبد خرید
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
