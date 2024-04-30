import * as React from "react"
import * as styles from "./section-layout.module.scss"

export const SectionLayout = ({ sections }) => (
  <>
    {sections.map((Item, index) => (
      <section className={styles.section} key={index}>
        <div className={styles.text}>
          <Item />
        </div>
      </section>
    ))}
  </>
)

export default SectionLayout
