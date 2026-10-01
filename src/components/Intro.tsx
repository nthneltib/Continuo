import styles from "./Intro.module.css";
import introImage from "../assets/images/intro-image.jpg";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="div" className={styles.text}>
          <h2 className={styles.title}>Everything on set, connected.</h2>
          <p className={styles.body}>
            Capture, organize and carry every scene, take, continuity detail and timecode from set
            to post, all in one connected production record.
          </p>
        </Reveal>
        <Reveal as="div" className={styles.imageWrap} y={24} delay={0.15}>
          <img src={introImage} alt="Filmmaker reviewing a shot on a monitor" className={styles.image} />
        </Reveal>
      </div>
    </section>
  );
}
