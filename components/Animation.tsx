"use client";

import { useEffect } from "react";
import gsap from "gsap";

const Animations = () => {
  useEffect(() => {
    const rotateElement = document.querySelector(".animate-rotate");
    const fadeInElements = document.querySelectorAll(".animate-fade-in-up");
    fadeInElements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 20 });
    });

    if (rotateElement) {
      gsap.fromTo(
        rotateElement,
        { rotation: 15 },
        {
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        },
      );
    }

    if (fadeInElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
              observer.unobserve(entry.target);
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
              });
            }
          });
        },
        {
          threshold: 0.25,
        },
      );

      fadeInElements.forEach((el) => observer.observe(el));
    }
  }, []);

  return null;
};

export default Animations;
