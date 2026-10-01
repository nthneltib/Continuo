import FeatureItem from "./FeatureItem";
import styles from "./features.module.css";
import icon from "../../assets/icons/clock-04.svg";
import checkIcon from "../../assets/icons/checkmark-circle-success.svg";
import mainImg from "../../assets/images/continuity-main.jpg";
import subImg from "../../assets/images/continuity-sub.jpg";

const ROWS = ["Wardrobe", "Props", "Blocking", "Framing"];

export default function ContinuityCard() {
  return (
    <FeatureItem
      icon={icon}
      iconAlt=""
      title="Continuity"
      description="Keep every detail consistent, from wardrobe and props to blocking and framing."
    >
      <div className={styles.continuityImages}>
        <img src={mainImg} alt="Set continuity reference photo" className={styles.continuityMain} />
        <div className={styles.continuitySub}>
          <img src={subImg} alt="" />
          <img src={subImg} alt="" />
          <img src={subImg} alt="" />
        </div>
      </div>
      <div className={styles.continuityRows}>
        {ROWS.map((label) => (
          <div key={label} className={styles.continuityRow}>
            <span className={styles.continuityLabel}>{label}</span>
            <span className={styles.tag}>
              <img src={checkIcon} alt="" className={styles.tagCheckIcon} />
              Match
            </span>
          </div>
        ))}
      </div>
    </FeatureItem>
  );
}
