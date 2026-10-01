import { useRef } from "react";
import styles from "./Pricing.module.css";
import Reveal from "./Reveal";
import { useStaggerReveal } from "../hooks/useStaggerReveal";
import arrowRightBlack from "../assets/icons/arrow-right-black.svg";
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";
import dollarCircle from "../assets/icons/dollar-circle.svg";
import checkIcon from "../assets/icons/checkmark-circle-04.svg";
import arrowUpRight from "../assets/icons/arrow-up-right.svg";

const FREE_FEATURES = [
  "Limited projects",
  "Basic continuity",
  "Scene and shot records",
  "Image references",
  "Digital slate",
];

const PRO_FEATURES = [
  "Unlimited projects",
  "Video continuity",
  "Advanced timecode",
  "Advanced metadata",
  "Production exports",
  "Post-production handoff",
];

const PRODUCTION_FEATURES = [
  "Shared workspaces",
  "Team collaboration",
  "Department workflows",
  "Permissions",
  "Advanced production records",
  "Organisation management",
];

function FeatureDivider() {
  return (
    <div className={styles.divider}>
      <span className={styles.dividerLabel}>Features</span>
      <span className={styles.dividerLine} />
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className={styles.featureList}>
      {items.map((item) => (
        <div key={item} className={styles.featureRow}>
          <img src={checkIcon} alt="" className={styles.checkIcon} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function Pricing() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  useStaggerReveal(gridRef, `.${styles.cardColumn}, .${styles.card}`, { y: 36, stagger: 0.12 });

  return (
    <section id="pricing" className={styles.section}>
      <div className="containerNarrow">
        <Reveal as="div" className={styles.header}>
          <h2 className={styles.title}>Plans</h2>
          <p className={styles.sub}>Start free, then unlock more tools as your productions and team grow.</p>
        </Reveal>

        <div ref={gridRef} className={styles.grid}>
          {/* Free */}
          <div className={styles.card}>
            <span className={styles.badge}>
              Free
              <img src={dollarCircle} alt="" />
            </span>
            <div className={styles.priceBlock}>
              <span className={styles.price}>$0.00</span>
              <span className={styles.priceDesc}>For filmmakers getting started.</span>
            </div>
            <div className={styles.featuresBlock}>
              <button type="button" className={`${styles.btn} ${styles.btnNeutral}`}>
                Get started free
                <img src={arrowRightBlack} alt="" className={styles.btnIcon} />
              </button>
              <FeatureDivider />
              <FeatureList items={FREE_FEATURES} />
            </div>
          </div>

          {/* Pro (featured) */}
          <div className={styles.cardColumn}>
            <div className={`${styles.card} ${styles.cardFeatured}`}>
              <span className={styles.badge}>
                Pro
                <img src={dollarCircle} alt="" />
              </span>
              <div className={styles.priceBlock}>
                <span className={styles.price}>$29.99</span>
                <span className={styles.priceDesc}>For professional filmmakers.</span>
              </div>
              <div className={styles.featuresBlock}>
                <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Buy now
                  <img src={arrowRightWhite} alt="" className={styles.btnIcon} />
                </button>
                <FeatureDivider />
                <FeatureList items={PRO_FEATURES} />
              </div>
            </div>
            <div className={styles.extension}>
              <p className={styles.extensionText}>Are you newbie or a company?</p>
              <button type="button" className={styles.discountLink}>
                Get a discount code
                <img src={arrowUpRight} alt="" />
              </button>
            </div>
          </div>

          {/* Production / Contact */}
          <div className={styles.card}>
            <span className={styles.badge}>
              Production
              <img src={dollarCircle} alt="" />
            </span>
            <div className={styles.priceBlock}>
              <span className={styles.price}>Contact Us</span>
              <span className={styles.priceDesc}>For professional production teams.</span>
            </div>
            <div className={styles.featuresBlock}>
              <a href="#footer" className={`${styles.btn} ${styles.btnNeutral}`}>
                Contact us
                <img src={arrowRightBlack} alt="" className={styles.btnIcon} />
              </a>
              <FeatureDivider />
              <FeatureList items={PRODUCTION_FEATURES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
