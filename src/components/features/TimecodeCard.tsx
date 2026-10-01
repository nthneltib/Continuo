import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/clock-hour-3.svg";
import cloudCheck from "../../assets/icons/cloud-check.svg";

const ROWS = [
  { label: "Camera A", value: "00:20:00:31" },
  { label: "Camera B", value: "00:20:00:31" },
  { label: "Audio", value: "00:20:00:31" },
];

export default function TimecodeCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="Timecode"
      description="Sync one master timecode across your slate, cameras and audio for faster, cleaner post."
    >
      <div className={styles.timecodeTop}>
        <span className={styles.timecodeBig}>00:20:00:31</span>
        <span className={styles.tag}>
          <img src={cloudCheck} alt="" width={13} height={13} />
          Synced
        </span>
      </div>
      <div className={styles.timecodeRows}>
        {ROWS.map((row) => (
          <div key={row.label} className={styles.timecodeRow}>
            <span className={styles.tag} style={{ color: "var(--color-text)" }}>
              <span className={styles.tagDot} />
              {row.label}
            </span>
            <span className={styles.timecodeValue}>{row.value}</span>
          </div>
        ))}
      </div>
    </FeatureItem>
  );
}
