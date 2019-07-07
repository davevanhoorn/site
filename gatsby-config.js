module.exports = {
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
        short_name: `DvH`,
        start_url: `/`,
        background_color: `#4fd1c5`,
        theme_color: `#4fd1c5`,
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
  ],
}
