import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/copy-01.svg";
import photo from "../../assets/images/blocking-image.jpg";

export default function BlockingCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="Blocking"
      description="Capture blocking, approve it, and use it as the reference for every take."
    >
      <div className={styles.blockingImage}>
        <img src={photo} alt="Actor blocking reference on set" className={styles.blockingPhoto} />
        <div className={styles.blockingGrid} />
        <span className={`${styles.blockingCorner} ${styles.cornerTL}`} />
        <span className={`${styles.blockingCorner} ${styles.cornerTR}`} />
        <span className={`${styles.blockingCorner} ${styles.cornerBL}`} />
        <span className={`${styles.blockingCorner} ${styles.cornerBR}`} />
      </div>
      <div className={styles.row}>
        <span>Scene 25</span>
        <span className={styles.dot} />
        <span>Shot 01a</span>
        <span className={styles.dot} />
        <span>Take 03</span>
      </div>
      <div className={styles.blockingFooter}>
        <span className={styles.tag}>
          <span className={styles.tagDot} />
          Approved
        </span>
        <button type="button" className={styles.miniBtn}>
          View reference
        </button>
      </div>
    </FeatureItem>
  );
}
