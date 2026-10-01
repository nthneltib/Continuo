import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import { ensureGsapRegistered, gsap } from "../lib/gsap";

/** Fades + slides up all direct matches of `selector` inside containerRef, staggered, when the container enters the viewport. */
export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options?: { y?: number; stagger?: number; start?: string }
) {
  const { y = 28, stagger = 0.12, start = "top 80%" } = options ?? {};

  useLayoutEffect(() => {
    ensureGsapRegistered();
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(selector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, y, stagger, start]);
}
