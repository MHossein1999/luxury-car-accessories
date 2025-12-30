"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ShoppingBag, Star } from "lucide-react";
// import { fadeInUp } from "@/lib/animations";

function ProductCardComponent({
  product,
}: {
  product: {
    title: string;
    price: string;
    tag: string;
    image: string;
  };
}) {
  return (
    <motion.div
      // variants={fadeInUp}
      className="glossy-card group relative p-2 overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
    >
      <div className="relative aspect-[4/4] overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Tag */}
        <div className="absolute top-6 right-6">
          <span className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
            {product.tag}
          </span>
        </div>

        {/* Add to Cart */}
        <button className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-secondary">
          <ShoppingBag className="h-5 w-5 text-foreground" />
        </button>
      </div>

      <div className="p-4 md:p-8">
        {/* Stars */}
        <div className="mb-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg md:text-xl font-semibold leading-relaxed text-white">
          {product.title}
        </h3>

        {/* Price + Details */}
        <div className="flex items-center justify-between">
          <span className="font-display text-xl md:text-2xl font-bold text-primary">
            {product.price} تومان
          </span>

          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-primary"
          >
            جزئیات
            <ChevronLeft className="mr-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;
