require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Vitkovskaya Keteryna website`,
    description: `Vitkovskaya Keteryna website`,
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
        background_color: `rgb(19, 20, 26)`,
        theme_color: `rgb(19, 20, 26)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,

        tracesSampleRate: 1,

        tracesSampler: (samplingContext) => {
          if ("...") {
            return 0.5; // These are important - take a big sample
          }
          if ("...") {
            return 0.01; // These are less important or happen much more frequently - only take 1% of them
          }
          if ("...") {
            return 0; // These aren't something worth tracking - drop all transactions like this
          }
          return 0.1; // Default sample rate
        },
      },
    },
  ],
};
