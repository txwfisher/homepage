"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import gsap from "gsap";

type ThemeOption = {
  name: string;
  icon: string;
  label: string;
};

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isAnimating = useRef(false);

  const themeInitialized = useRef(false);
  const indicatorInitialized = useRef(false);

  const themeOptions: ThemeOption[] = [
    {
      name: "light",
      icon: "line-md:sunny",
      label: "浅色模式",
    },
    {
      name: "dark",
      icon: "line-md:moon",
      label: "暗色模式",
    },
    {
      name: "system",
      icon: "line-md:computer-twotone",
      label: "系统主题",
    },
  ];

  useEffect(() => {
    setMounted(true);

    if (!themeInitialized.current) {
      setTheme("system");
      themeInitialized.current = true;
    }
  }, [setTheme]);

  useEffect(() => {
    if (theme) {
      if (theme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        document.documentElement.setAttribute(
          "data-theme",
          prefersDark ? "dark" : "light",
        );
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    }
  }, [theme]);

  useLayoutEffect(() => {
    if (!mounted || !containerRef.current || !indicatorRef.current) return;
    if (buttonRefs.current.some((ref) => !ref)) return;

    const activeIndex = themeOptions.findIndex(
      (option) => option.name === theme,
    );
    const index = activeIndex === -1 ? 0 : activeIndex;
    const activeButton = buttonRefs.current[index];
    if (!activeButton) return;

    const buttonRect = activeButton.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const padding = 2.5;

    if (!indicatorInitialized.current) {
      gsap.set(indicatorRef.current, {
        x: buttonRect.left - containerRect.left + padding,
        y: buttonRect.top - containerRect.top + padding,
        width: buttonRect.width - padding * 2,
        height: buttonRect.height - padding * 2,
        opacity: 1,
      });
      indicatorInitialized.current = true;
    } else if (!isAnimating.current) {
      gsap.set(indicatorRef.current, {
        x: buttonRect.left - containerRect.left + padding,
        y: buttonRect.top - containerRect.top + padding,
        width: buttonRect.width - padding * 2,
        height: buttonRect.height - padding * 2,
      });
    }
  }, [mounted, theme, themeOptions]);

  const handleThemeChange = (themeName: string) => {
    if (isAnimating.current || !containerRef.current || !indicatorRef.current)
      return;

    setTheme(themeName);

    const activeIndex = themeOptions.findIndex(
      (option) => option.name === themeName,
    );
    if (activeIndex === -1 || !buttonRefs.current[activeIndex]) return;

    isAnimating.current = true;

    const buttonRect = buttonRefs.current[activeIndex]!.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const padding = 2.5;

    gsap.to(indicatorRef.current, {
      keyframes: [
        {
          width: buttonRect.width - padding * 2 * 1.25,
          height: buttonRect.height - padding * 2 * 0.75,
          duration: 0.1,
          ease: "power2.out",
        },
        {
          x: buttonRect.left - containerRect.left + padding,
          y: buttonRect.top - containerRect.top + padding,
          width: buttonRect.width - padding * 2,
          height: buttonRect.height - padding * 2,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false;
          },
        },
      ],
    });
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 left-5 grid h-7.5 w-25 grid-cols-3 place-content-center gap-1 rounded-full bg-white/30 p-1 backdrop-blur transition-colors dark:bg-gray-800/30"
      aria-label="主题切换"
    >
      <div
        ref={indicatorRef}
        className="absolute rounded-full bg-sky-100 opacity-0 shadow-sm transition-colors dark:bg-gray-600"
      />

      {themeOptions.map((option, index) => {
        const isActive = theme === option.name;
        return (
          <button
            key={option.name}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => handleThemeChange(option.name)}
            aria-label={option.label}
            aria-pressed={isActive}
            className={`relative z-5 grid place-self-center rounded-full p-1 transition-colors ${
              isActive
                ? "text-cyan-500"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            <Icon icon={option.icon} width={20} height={20} />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSelector;
