"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function useNavAnimation() {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const common = { duration: 0.7, ease: "power3.inOut" };

  const [open, setOpen] = useState(false);
  const onOpen = contextSafe(() => {
    setOpen(true);
    let t1 = gsap.timeline();
    t1.to("#line1", {
      rotate: 22,
      transformOrigin: "top-left",
      ...common,
    });
    t1.to("#line3", {
      rotate: -22,
      transformOrigin: "top-right",
      delay: -1,
      ...common,
    });
    t1.to("#line2", {
      opacity: 0,
      delay: -0.75,
    });
    t1.to(".sidebar", {
      right: 0,
      delay: -0.5,
      ...common,
    });
    t1.fromTo(
      ".sidebar a, .nav_socials a svg",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        delay: -0.6,
        ...common,
      }
    );
  });
  const onClose = contextSafe(() => {
    setOpen(false);
    let t1 = gsap.timeline();
    t1.fromTo(
      ".sidebar a, .nav_socials a svg",
      {
        scale: 1,
        opacity: 1,
        ...common,
      },
      {
        scale: 1.25,
        opacity: 0,
        stagger: 0.15,
        ...common,
      }
    );
    t1.to("#line1", {
      rotate: 0,
      transformOrigin: "top-right",
      delay: -1,
      ...common,
    });
    t1.to("#line3", {
      rotate: 0,
      transformOrigin: "top-left",
      delay: -1,
      ...common,
    });
    t1.to("#line2", {
      opacity: 1,
      delay: -0.5,
    });
    t1.to(".sidebar", {
      right: -350,
      delay: -0.75,
      ...common,
    });
  });
  const toggle = () => (open ? onClose() : onOpen());
  return { toggle, container };
}
