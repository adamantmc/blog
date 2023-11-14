/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: "adamantmc",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-mermaid',
          },
        ],
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
          {
            name: 'Roboto',
            file: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          }
        ],
      },
    },
  ],
};