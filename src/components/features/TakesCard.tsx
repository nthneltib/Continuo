import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/file-02.svg";
import photo from "../../assets/images/takes-image.jpg";

const DETAILS = [
  { key: "Camera", value: "A Cam" },
  { key: "Duration", value: "00:00:31" },
  { key: "Timecode", value: "00:20:00:31" },
  { key: "Note", value: "Approved by director" },
  { key: "Metadata", value: "4k · 24fps · C Log" },
];

export default function TakesCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="Takes & Metadata"
      description="Track every take with its status, notes, timecode and metadata."
    >
      <img src={photo} alt="Camera operator capturing a take" className={styles.takesImage} />
      <div className={styles.row}>
        <span>Scene 25</span>
        <span className={styles.dot} />
        <span>Shot 01a</span>
        <span className={styles.dot} />
        <span>Take 03</span>
      </div>
      <span className={styles.tag}>
        <span className={styles.tagDot} />
        Good
      </span>
      <div className={styles.takesDetails}>
        {DETAILS.map((d) => (
          <div key={d.key} className={styles.detailRow}>
            <span className={styles.detailKey}>{d.key}</span>
            <span className={styles.detailValue}>{d.value}</span>
          </div>
        ))}
      </div>
    </FeatureItem>
  );
}
