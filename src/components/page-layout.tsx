
import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./page-layout.module.scss";

export const PageLayout = ({ children }) => {
  const { site: { siteMetadata }} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const TITLE = `${siteMetadata.title} | Neubližujte svým dětem a budoucím generacím!`;
  const DESC = siteMetadata.description;  

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={TITLE}
        meta={[
          {
            name: `description`,
            content: DESC,
          },
          {
            property: `og:title`,
            content: TITLE,
          },
          {
            property: `og:image`,
            content: `../images/sorry-jako.jpg`
          },
          {
            property: `og:description`,
            content: DESC,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:title`,
            content: TITLE,
          },
          {
            name: `twitter:description`,
            content: DESC,
          },
        ]}
      />
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Sdílejte, než to zakážou! Aneb pravda občas bolí.</h1>
        </header>
        <main>
          {children}
        </main>
        <footer className={styles.footer}>
          <small>Podporujeme: <a href="https://www.volby-kscm.cz/">Komunisti z kola ven</a> a <a href="https://www.petletzpet.cz/">Největší přešlapy současného prezidenta</a></small>
        </footer>
      </div>
    </>
  );
};

export default PageLayout;
