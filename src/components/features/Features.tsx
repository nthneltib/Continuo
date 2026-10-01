import { useRef } from "react";
import styles from "./features.module.css";
import Reveal from "../Reveal";
import { useStaggerReveal } from "../../hooks/useStaggerReveal";
import ContinuityCard from "./ContinuityCard";
import BlockingCard from "./BlockingCard";
import SlateCard from "./SlateCard";
import TimecodeCard from "./TimecodeCard";
import TakesCard from "./TakesCard";
import AIContinuityCard from "./AIContinuityCard";

export default function Features() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  useStaggerReveal(gridRef, `.${styles.item}`, { y: 32, stagger: 0.1 });

  return (
    <section id="features" className={styles.section}>
      <div className="containerNarrow">
        <Reveal as="div" className={styles.header}>
          <h2 className={styles.title}>Everything your production needs, connected.</h2>
          <p className={styles.sub}>
            Continuo brings continuity, blocking, timecode, takes and production metadata into one
            workflow from set to post.
          </p>
        </Reveal>
        <div ref={gridRef} className={styles.masonry}>
          <ContinuityCard />
          <BlockingCard />
          <SlateCard />
          <TimecodeCard />
          <TakesCard />
          <AIContinuityCard />
        </div>
      </div>
    </section>
  );
}
