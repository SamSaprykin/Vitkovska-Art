require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Vitkovska Keteryna website`,
    description: `Vitkovska Keteryna website`,
    author: `SamS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2jei48uxgq2p`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vitkovskaya-art`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rgb(0, 0, 0)`,
        theme_color: `rgb(0, 0, 0)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-SNKXE8TBWF"],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
};
