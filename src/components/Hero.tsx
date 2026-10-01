import { useLayoutEffect, useRef } from "react";
import styles from "./Hero.module.css";
import heroBg from "../assets/images/hero-bg.jpg";
import arrowRight from "../assets/icons/arrow-right-white.svg";
import { ensureGsapRegistered, gsap } from "../lib/gsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const sideRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    ensureGsapRegistered();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(headingRef.current, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1 })
        .fromTo(sideRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9 }, "-=0.6");

      gsap.to(bgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="top" className={styles.hero}>
      <div className={styles.bgWrap}>
        <img ref={bgRef} src={heroBg} alt="Film crew lighting a set" className={styles.bg} />
        <div className={styles.scrim} />
      </div>
      <div className={styles.content}>
        <h1 ref={headingRef} className={styles.heading}>
          Continuity and timecode system for modern film production.
        </h1>
        <div ref={sideRef} className={styles.side}>
          <p className={`${styles.sub} ${styles.subDesktop}`}>
            Keep scenes, takes, blocking, continuity and production metadata connected from set to
            post.
          </p>
          <p className={`${styles.sub} ${styles.subMobile}`}>
            Capture continuity, blocking, takes, and timecode on set and carry that production
            intelligence all the way into post.
          </p>
          <div className={styles.buttons}>
            <a href="#pricing" className={styles.btnPrimary}>
              Get Continuo
              <img src={arrowRight} alt="" className={styles.btnIcon} />
            </a>
            <a href="#product" className={styles.btnSecondary}>
              Explore the product
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
