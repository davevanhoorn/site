module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: true,
        tailwind: true,
        printRejected: true,
        whitelist: [`navigation__link--active`],
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
