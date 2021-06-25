module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Kuzure's blog`,
    author: `kuzure-东山`,
    description: `Kuzure's blog`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kuzure',
        short_name: 'kuzure',
        start_url: `/`,
        icon: require.resolve('./images/favicon.png')
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'
      },
    },
  ],
}
