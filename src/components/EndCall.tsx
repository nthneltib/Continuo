import styles from "./EndCall.module.css";
import Reveal from "./Reveal";
import endCallImage from "../assets/images/hero-bg.jpg";
import arrowRight from "../assets/icons/arrow-right-white.svg";

export default function EndCall() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="div" className={styles.textCol}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Keep every take connected.</h2>
            <p className={styles.sub}>Continuity, timecode and production metadata — from set to post.</p>
          </div>
          <a href="#pricing" className={styles.btn}>
            Get Continuo
            <img src={arrowRight} alt="" className={styles.btnIcon} />
          </a>
        </Reveal>
        <Reveal as="div" className={styles.imageWrap} y={24} delay={0.15}>
          <img src={endCallImage} alt="Crew working on a lit film set" className={styles.image} />
        </Reveal>
      </div>
    </section>
  );
}
