module.exports = {
  siteMetadata: {
    title: `UX em Movimento`,
    description: `Animações melhorando a experiência de usuário`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4C157F`,
        theme_color: `#4C157F`,
        display: `minimal-ui`,
        icon: `src/images/uxem-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145264326-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-533B2PQ",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "uxemmovimento.com",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
