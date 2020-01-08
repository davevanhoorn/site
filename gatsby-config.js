module.exports = {
  siteMetadata: {
    title: "Dave van Hoorn",
    titleTemplate: "%s - Dave van Hoorn",
    description: "Front-end developer",
    url: "https://davevanhoorn.com",
    twitterUsername: "@davevanhoorn",
    image: "src/assets/images/dave.jpg",
    author: "Dave van Hoorn",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dave-van-hoorn`,
        short_name: `Dave`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ejaqflao",
        dataset: "production",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
