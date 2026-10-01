import { useLayoutEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 32,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, delay, duration, start, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
