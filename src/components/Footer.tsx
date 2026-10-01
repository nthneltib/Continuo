import styles from "./Footer.module.css";
import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <img src={logo} alt="Continuo" className={styles.logo} />
        <div className={styles.links}>
          <span>Continuo ©2026</span>
          <a href="#terms">Terms &amp; Privacy Policy</a>
          <span className={styles.muted}>
            Made by{" "}
            <a
              href="https://nathanieltibitus.framer.website/"
              target="_blank"
              rel="noreferrer"
              className={styles.author}
            >
              @nathaniel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
