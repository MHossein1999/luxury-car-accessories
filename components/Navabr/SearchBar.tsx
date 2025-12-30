"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SearchBar({ searchOpen }: { searchOpen: boolean }) {
  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full mt-2 w-64 bg-background/95 backdrop-blur-lg border border-border/30 rounded-lg p-2 shadow-xl"
        >
          <input
            type="text"
            placeholder="جستجو کنید..."
            className="
            w-full rounded-md 
            bg-gradient-to-r from-gray-800 to-gray-700 
            px-4 py-2 text-white 
           placeholder:text-gray-400 
            focus:outline-none focus:ring-2 focus:ring-primary/70
            text-sm"
            autoFocus
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
