import type { ReactNode } from "react";
import styles from "./features.module.css";

type FeatureItemProps = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function FeatureItem({ icon, iconAlt, title, description, children }: FeatureItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={icon} alt={iconAlt} className={styles.cardIcon} />
          <p className={styles.cardTitle}>{title}</p>
        </div>
        {children}
      </div>
      <div className={styles.itemText}>
        <p className={styles.itemTitle}>{title}</p>
        <p className={styles.itemDesc}>{description}</p>
      </div>
    </div>
  );
}
