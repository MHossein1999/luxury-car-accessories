"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartButton() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative text-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 cursor-pointer"
    >
      <ShoppingBag className="h-5 w-5" />
      <span className="absolute -top-1 -left-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground shadow-lg shadow-primary/50">
        0
      </span>
    </Button>
  );
}
