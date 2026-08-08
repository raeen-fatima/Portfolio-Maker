"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (target) => {
  gsap.to(window, {
    duration: 1,
    ease: "power3.inOut",
    scrollTo: {
      y: target,
      offsetY: 90,
    },
  });
};