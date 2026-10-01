import { useLayoutEffect, useRef, useState } from "react";
import styles from "./InAction.module.css";
import Reveal from "./Reveal";
import panelBg from "../assets/images/production-log-bg.jpg";
import { ensureGsapRegistered, ScrollTrigger } from "../lib/gsap";

const TABS = ["Scenes", "Continuity", "Blocking", "Slate", "Takes", "Production Log"];

type Row = {
  scene: string;
  shot: string;
  take: string;
  status: "Good" | "Hold" | "NG";
  timecode: string;
  camera: string;
  duration: string;
  continuity: string;
  note: string;
};

const ROWS: Row[] = [
  { scene: "Scene 25", shot: "01b", take: "Take 07", status: "Good", timecode: "00:53:00:03", camera: "B Cam", duration: "00:00:43", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01b", take: "Take 06", status: "Hold", timecode: "00:00:00:43", camera: "A Cam", duration: "00:00:40", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01b", take: "Take 05", status: "NG", timecode: "00:04:00:43", camera: "B Cam", duration: "00:00:37", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01b", take: "Take 04", status: "Hold", timecode: "00:50:00:09", camera: "A Cam", duration: "00:00:34", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01b", take: "Take 03", status: "Good", timecode: "00:20:00:21", camera: "B Cam", duration: "00:00:31", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01b", take: "Take 02", status: "Hold", timecode: "00:00:00:43", camera: "A Cam", duration: "00:00:28", continuity: "Reviewed", note: "Hair matches ref" },
  { scene: "Scene 25", shot: "01b", take: "Take 01", status: "Good", timecode: "00:00:26:43", camera: "B Cam", duration: "00:00:40", continuity: "Clear", note: "New take registered" },
  { scene: "Scene 25", shot: "01a", take: "Take 04", status: "NG", timecode: "00:40:00:02", camera: "A Cam", duration: "00:00:33", continuity: "Potential issue", note: "Actor off blocking mark" },
  { scene: "Scene 25", shot: "01a", take: "Take 03", status: "Good", timecode: "00:47:03:11", camera: "A Cam", duration: "00:00:18", continuity: "Clear", note: "Approved by director" },
  { scene: "Scene 25", shot: "01a", take: "Take 01", status: "Good", timecode: "00:46:02:14", camera: "A Cam", duration: "00:00:43", continuity: "Reviewed", note: "Wardrobe checked" },
];

const STATUS_CLASS: Record<Row["status"], string> = {
  Good: styles.statusGood,
  Hold: styles.statusHold,
  NG: styles.statusNG,
};

export default function InAction() {
  const [activeTab, setActiveTab] = useState("Production Log");
  const [activeRow, setActiveRow] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowsRef = useRef<HTMLTableSectionElement | null>(null);

  useLayoutEffect(() => {
    ensureGsapRegistered();
    const section = sectionRef.current;
    if (!section) return;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
      onUpdate: (self) => {
        const idx = Math.min(ROWS.length - 1, Math.floor(self.progress * ROWS.length));
        setActiveRow(idx);
      },
    });

    return () => st.kill();
  }, []);

  useLayoutEffect(() => {
    const row = rowsRef.current?.children[activeRow] as HTMLElement | undefined;
    const scrollContainer = row?.closest(`.${styles.panelCard}`) as HTMLElement | null;
    if (!row || !scrollContainer) return;

    const rowTop = row.offsetTop;
    const rowBottom = rowTop + row.offsetHeight;
    const viewTop = scrollContainer.scrollTop;
    const viewBottom = viewTop + scrollContainer.clientHeight;

    if (rowTop < viewTop) {
      scrollContainer.scrollTop = rowTop;
    } else if (rowBottom > viewBottom) {
      scrollContainer.scrollTop = rowBottom - scrollContainer.clientHeight;
    }
  }, [activeRow]);

  return (
    <section ref={sectionRef} id="product" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Reveal as="div" className={styles.text}>
            <h2 className={styles.title}>See Continuo in action.</h2>
            <p className={styles.sub}>Explore the production workspace.</p>
          </Reveal>
          <Reveal as="div" className={styles.tabsBlock} delay={0.1}>
            <p className={styles.scrollHint}>Scroll to roll the takes</p>
            <div className={styles.tabs} role="tablist" aria-label="Production workspace views">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal as="div" className={styles.panelWrap} y={24} delay={0.15}>
          <img src={panelBg} alt="Production set backdrop" className={styles.panelBg} />
          <div className={styles.panelCard}>
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Scene</th>
                    <th>Shot</th>
                    <th>Take</th>
                    <th>Status</th>
                    <th>Timecode</th>
                    <th>Camera</th>
                    <th>Duration</th>
                    <th>Continuity</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody ref={rowsRef}>
                  {ROWS.map((row, i) => (
                    <tr key={`${row.take}-${i}`} className={i === activeRow ? styles.activeRow : ""}>
                      <td>{row.scene}</td>
                      <td>{row.shot}</td>
                      <td>{row.take}</td>
                      <td className={STATUS_CLASS[row.status]}>{row.status}</td>
                      <td className={styles.timecodeCell}>{row.timecode}</td>
                      <td>{row.camera}</td>
                      <td className={styles.durationCell}>{row.duration}</td>
                      <td className={row.continuity === "Potential issue" ? styles.continuityIssue : undefined}>
                        {row.continuity}
                      </td>
                      <td>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
