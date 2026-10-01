import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/icons/logo.svg";
import arrowRight from "../assets/icons/arrow-right-white.svg";
import { ensureGsapRegistered, gsap } from "../lib/gsap";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Build the drawer's reveal once, paused. Opening plays it forward;
  // closing calls .reverse() so GSAP eases backwards along the same
  // curve instead of swapping to a separate "close" animation.
  useLayoutEffect(() => {
    ensureGsapRegistered();
    const ctx = gsap.context(() => {
      timelineRef.current = gsap
        .timeline({ paused: true })
        .fromTo(drawerRef.current, { autoAlpha: 0, y: -16 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" });
    });
    return () => {
      ctx.revert();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      timelineRef.current?.play();
    } else {
      timelineRef.current?.reverse();
    }
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" aria-label="Continuo home" onClick={(e) => handleNavClick(e, "#top")}>
          <img src={logo} alt="Continuo" className={styles.logo} />
        </a>
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#pricing" className={styles.cta} onClick={(e) => handleNavClick(e, "#pricing")}>
          Get Continuo
          <img src={arrowRight} alt="" className={styles.ctaIcon} />
        </a>
        <button
          type="button"
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        ref={drawerRef}
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        inert={!menuOpen || undefined}
      >
        <nav className={styles.drawerMenu} aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Fragment key={link.label}>
              <a href={link.href} className={styles.drawerLink} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && <div className={styles.drawerDivider} />}
            </Fragment>
          ))}
        </nav>
        <a href="#pricing" className={styles.drawerCta} onClick={(e) => handleNavClick(e, "#pricing")}>
          Get Continuo
          <img src={arrowRight} alt="" className={styles.ctaIcon} />
        </a>
      </div>
    </nav>
  );
}
