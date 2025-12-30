"use client";

import { useState, useCallback } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import CartButton from "./CartButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 border-b border-[#a68b5b]/30 
                 bg-gradient-to-b from-[#1c1c1c]/95 to-[#2c2c2c]/80 
                 backdrop-blur-2xl transition-all duration-1000"
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-3 lg:px-12">
        {/* LEFT: Buttons + Links */}
        <div className="flex items-center gap-6 relative">
          {/* Mobile Menu Button (only < lg) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground transition-all duration-300 hover:scale-110 hover:text-primary md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className="text-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 cursor-pointer"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Search Bar */}
          <SearchBar searchOpen={searchOpen} />

          {/* Cart Button */}
          <CartButton />

          {/* Nav Links (only lg and above, inline beside icons) */}
          <div className="hidden md:flex items-center gap-6 ml-6">
            {["فروشگاه", "مجموعه‌ها", "درباره ما", "تماس با ما"].map(
              (item, i) => (
                <button
                  key={i}
                  className="text-sm font-medium tracking-wide text-gray-200 transition-all duration-300 hover:scale-105 hover:text-foreground cursor-pointer"
                  onClick={closeMenu}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* RIGHT: Logo */}
        <div className="flex items-center">
          <h1 className="font-display text-2xl font-semibold tracking-tight text-primary text-shimmer">
            اُتو لوکس
          </h1>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </nav>
  );
}
