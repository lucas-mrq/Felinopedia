module.exports = {
  siteMetadata: {
    title: "Felinopedia",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/felinopedia-icon.png",
      }
    },
  ],
};