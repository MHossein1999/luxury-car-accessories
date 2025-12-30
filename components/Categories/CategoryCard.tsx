"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
// import { fadeInUp } from "@/lib/animations";

function CategoryCardComponent({
  category,
}: {
  category: {
    title: string;
    count: string;
    image: string;
  };
}) {
  return (
    <motion.div
      className="
        glossy-card group relative overflow-hidden rounded-lg cursor-pointer
        bg-background/40 backdrop-blur-sm
        transition-shadow duration-500
        hover:shadow-2xl hover:shadow-primary/20
      "
    >
      <div className="transition-transform duration-500 group-hover:scale-[1.03]">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent pointer-events-none" />
        </div>

        <div className="absolute bottom-0 right-0 left-0 p-4 md:p-8 pointer-events-none">
          <h3 className="mb-2 text-xl md:text-3xl font-bold text-white">
            {category.title}
          </h3>

          <p className="mb-6 text-sm text-[oklch(0.70_0.02_240)]">
            {category.count}
          </p>

          <div className="pointer-events-auto">
            <Button
              className="
                w-full border-primary/40 bg-transparent text-foreground backdrop-blur-sm
                transition-all duration-300
                hover:border-primary hover:bg-primary/10 cursor-pointer
              "
            >
              مشاهده محصولات
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const CategoryCard = memo(CategoryCardComponent);
export default CategoryCard;
