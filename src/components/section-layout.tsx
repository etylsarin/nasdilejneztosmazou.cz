
import * as React from "react";
import * as styles from "./section-layout.module.scss";

export const SectionLayout = ({ children }) => {
  return (
  <section className={styles.section}>
    <div className={styles.text}>
      {children}
    </div>
  </section>
)};

export default SectionLayout;
