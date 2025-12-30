"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";

export default function MobileMenu({
  menuOpen,
  closeMenu,
}: {
  menuOpen: boolean;
  closeMenu: () => void;
}) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={closeMenu}
          />

          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-64 bg-background shadow-lg md:hidden flex flex-col gap-6 p-6 z-50"
          >
            <button
              aria-label="Close menu"
              className="self-start p-1 rounded hover:bg-primary/20 transition"
              onClick={closeMenu}
            >
              <HiX className="w-6 h-6 text-foreground" />
            </button>

            {["فروشگاه", "مجموعه‌ها", "درباره ما", "تماس با ما"].map(
              (item, i) => (
                <button
                  key={i}
                  className="text-sm font-medium tracking-wide text-gray-200 transition-all duration-300 hover:scale-105 hover:text-foreground"
                  onClick={closeMenu}
                >
                  {item}
                </button>
              )
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
