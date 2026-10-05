"use client";

import { useEffect } from "react";

export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("active"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach((element) => observer.observe(element));

    let framePending = false;
    const updateParallax = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>(".parallax-y").forEach((element, index) => {
        const speed = 0.06 + (index % 4) * 0.01;
        element.style.setProperty("--parallax-y", `${(scrollY * speed * -1).toFixed(1)}px`);
      });
      framePending = false;
    };
    const handleScroll = () => {
      if (!framePending) {
        window.requestAnimationFrame(updateParallax);
        framePending = true;
      }
    };
    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
