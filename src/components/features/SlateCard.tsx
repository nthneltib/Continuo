import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/film-slate.svg";

export default function SlateCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="Digital Slate"
      description="Slate every take and keep its scene, shot, camera, and timecode connected."
    >
      <div className={styles.slateCard}>
        <div className={styles.slateData}>
          <span className={styles.slateField}>
            <span className={styles.slateFieldLabel}>Scene</span>
            <span className={styles.slateFieldValue}>25</span>
          </span>
          <span className={styles.slateDivider} />
          <span className={styles.slateField}>
            <span className={styles.slateFieldLabel}>Shot</span>
            <span className={styles.slateFieldValue}>01a</span>
          </span>
          <span className={styles.slateDivider} />
          <span className={styles.slateField}>
            <span className={styles.slateFieldLabel}>Take</span>
            <span className={styles.slateFieldValue}>03</span>
          </span>
        </div>
        <span className={styles.slateTimecode}>00:20:00:31</span>
      </div>
      <span className={styles.tag}>
        <span className={styles.tagDot} />
        Slated
      </span>
    </FeatureItem>
  );
}
