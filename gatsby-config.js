module.exports = {
  siteMetadata: {
    title: "Dave van Hoorn",
    titleTemplate: "%s · Front-End Developer",
    description:
      "front-end developer, surf, mountainbiking, outdoors, my doggie, 030 represent",
    url: "https://davevanhoorn.com",
    twitterUsername: "@davevanhoorn",
    image: "/src/images/dave.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: false,
        tailwind: true,
        printRejected: true,
        whitelist: [`navigation__link--active`, `a`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dave van Hoorn`,
        short_name: `davevanhoorn.com`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ejaqflao`,
        dataset: `production`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MWKWKRX",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
