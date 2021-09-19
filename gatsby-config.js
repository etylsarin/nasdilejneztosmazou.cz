module.exports = {
  siteMetadata: {
    siteUrl: "https://www.nasdilejneztozakazou.cz",
    title: "Nasdílej, než to zakážou",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [ '/chapter-*' ]
     }
},
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
