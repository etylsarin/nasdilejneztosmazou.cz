import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
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
        <title>Sdílejte, než to zakážkou - Neubližujte svým dětem a budoucím generacím!</title>
        <meta name="description" content="A hlavně čtěte. Čtěte, protože na téhle stránce je to nejpodstatnější, abyste nenaletěli. Nikdy není pozdě dozvědět se pravdu, i když občas bolí!" />
        <meta name="google-site-verification" content="MUOrpoypPDrHGG_hngCAq-EOeOFahJFYH6LwFkVPm-M" />
      </Helmet>
      <main className={styles.page}>
        <header className={styles.header}>
          <h1>Sdílejte, než to zakážou! Aneb pravda občas bolí.</h1>
        </header>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter1 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-1.jpeg" alt="Ministerstvo financí" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter2 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-2.jpeg" alt="Andrej Babiš s manželkou Monikou" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter3 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-3.jpeg" alt="Centrála holdingu Agrofert" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter4 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-4.jpeg" alt="Chemička DEZA z holdingu Agrofert" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter5 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-5.jpeg" alt="Česko se propadá v žebříčku vnímání korupce" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter6 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-6.jpeg" alt="Staroměstské náměstí zaplnily kříže za oběti pandemie" />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter7 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-7.jpeg" alt="Billboard hnutí ANO - Nejsme jako politici. Makáme." />
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.text}>
            <Chapter8 />
          </div>
          <div className={styles.image}>
            <StaticImage src="../images/chapter-8.jpeg" alt="Manipulátoři" />
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
