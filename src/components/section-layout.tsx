
import * as React from "react";
import * as styles from "./section-layout.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export const SectionLayout = ({ children, ...args }) => {
  console.log(args);
  return (
  <section className={styles.section}>
    <div className={styles.text}>
      {children}
    </div>
    <div className={styles.image}>
      {/* <StaticImage src={pageContext.frontmatter.imageSrc} alt={pageContext.frontmatter.imageAlt} /> */}
    </div>
  </section>
)};

export default SectionLayout;
