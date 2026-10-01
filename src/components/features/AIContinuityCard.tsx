import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/ai-brain-01.svg";
import alertIcon from "../../assets/icons/alert-circle.svg";
import take1 from "../../assets/images/ai-take-2.jpg";
import take2 from "../../assets/images/blocking-image.jpg";

export default function AIContinuityCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="AI Continuity"
      description="Spot potential continuity changes by comparing each take with your approved references."
    >
      <div className={styles.aiTakes}>
        <img src={take1} alt="Reference take" />
        <img src={take2} alt="Latest take" />
      </div>
      <div className={styles.aiAlert}>
        <div className={styles.aiAlertHeader}>
          <img src={alertIcon} alt="" />
          <span className={styles.aiAlertTitle}>Potential issue detected</span>
        </div>
        <p className={styles.aiAlertBody}>No rings detected on this take.</p>
        <button type="button" className={styles.miniBtn} style={{ alignSelf: "flex-start" }}>
          View comparison
        </button>
      </div>
    </FeatureItem>
  );
}
