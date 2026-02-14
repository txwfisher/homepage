"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import gsap from "gsap";

export default function ThemeSelector() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);

  const themes = [
    {
      name: "light",
      icon: "line-md:sunny",
      label: "Light Mode",
      color: "text-amber-400",
    },
    {
      name: "dark",
      icon: "line-md:moon",
      label: "Dark Mode",
      color: "text-indigo-400",
    },
  ];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && !initialized) {
      const userSystemTheme =
        systemTheme ||
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      setTheme(userSystemTheme);
      setInitialized(true);
    }
  }, [mounted, initialized, setTheme, systemTheme]);

  useEffect(() => {
    if (!mounted || !highlightRef.current || !initialized) return;

    gsap.to(highlightRef.current, {
      x: theme === "dark" ? "100%" : "0%",
      duration: 0.5,
      ease: "elastic.out(1, 0.6)",
      overwrite: true,
    });
  }, [theme, mounted, initialized]);

  if (!mounted) return <div className="h-10 w-18" />;

  return (
    <div className="fixed bottom-5 left-5 z-10 grid h-8 w-18 grid-cols-2 gap-1 rounded-full bg-gray-300/50 p-1 backdrop-blur-lg dark:bg-gray-700/50">
      <div
        ref={highlightRef}
        className="pointer-events-none absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-white shadow-md backdrop-blur-lg dark:bg-gray-600"
      />
      {themes.map((option) => (
        <button
          key={option.name}
          onClick={() => setTheme(option.name)}
          className="relative z-5 grid place-self-center rounded-full transition-colors duration-200 hover:bg-white/20 dark:hover:bg-gray-600/20"
          aria-label={option.label}
        >
          <Icon
            icon={option.icon}
            className={`text-lg transition-all duration-300 ${
              theme === option.name
                ? `scale-110 ${option.color}`
                : "scale-90 text-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
