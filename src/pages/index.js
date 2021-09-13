import * as React from "react";
import { Helmet } from "react-helmet";
import Chapter1 from "./chapter-1.mdx";
import Chapter2 from "./chapter-2.mdx";
import Chapter3 from "./chapter-3.mdx";
import Chapter4 from "./chapter-4.mdx";
import Chapter5 from "./chapter-5.mdx";
import Chapter6 from "./chapter-6.mdx";
import Chapter7 from "./chapter-7.mdx";
import Chapter8 from "./chapter-8.mdx";
import * as styles from "./styles.module.scss";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sdílejte než to zakážkou - Neubližujte svým dětem a budoucím generacím!</title>
        <meta name="description" content="A hlavně čtěte. Čtěte, protože na téhle stránce je to nejpodstatnější, abyste nenaletěli. Nikdy není pozdě dozvědět se pravdu, i když je občas nepříjemná!" />
      </Helmet>
      <main className={styles.page}>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter1 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter2 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter3 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter4 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter5 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter6 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter7 />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter8 />
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
