"use client";

import { useEffect, useState } from "react";

export function EntryAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Always scroll to top on load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] transition-all duration-500 ease-out ${
        isAnimating
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-105 blur-sm"
      }`}
      onTransitionEnd={() => {
        if (!isAnimating) setIsVisible(false);
      }}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo Circle */}
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-transparent border-t-amber-500/40 border-r-amber-400/30" />
          <div className="absolute inset-2 animate-spin-reverse rounded-full border-2 border-transparent border-b-blue-500/40 border-l-blue-400/30" />
          <div className="absolute inset-4 animate-pulse rounded-full border border-white/20 bg-gradient-to-br from-amber-500/10 to-blue-500/10 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="h-12 w-12 text-white/90 animate-fade-in"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        {/* Persian Brand Text */}
        <div className="animate-fade-in-delay text-center">
          <h2 className="text-2xl font-bold tracking-wide text-white">
            اُتو لوکس
          </h2>
          <p className="mt-2 text-sm tracking-widest text-gray-400">
            LUXURY AUTO
          </p>
        </div>
        {/* Loading bar */}
        <div className="h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full w-full origin-left animate-loading-bar bg-gradient-to-r from-amber-500 via-blue-500 to-amber-500"
            onAnimationEnd={() => {
              setIsAnimating(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
