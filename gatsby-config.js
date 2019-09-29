module.exports = {
  siteMetadata: {
    title: "Federica Piergiacomi",
    author: "Flavio Primo",
    description: "The most amazing set and light designer <3",
    siteUrl: "https://fedpiergiacomi.netlify.com",
    social: [
      {
        title: "Facebook",
        user: "federica.piergiacomi",
        baseurl: "https://www.facebook.com/"
      },
      {
        title: "Instagram",
        user: "fedebrica",
        baseurl: "https://www.instagram.com/"
      },
      {
        title: "Pinterest",
        user: "federicapiergia",
        baseurl: "https://www.pinterest.com/"
      }
    ]
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Federica Piergiacomi",
        short_name: "Federica Piergiacomi",
        description: "The most amazing set and light designer <3",
        start_url: "/",
        background_color: "red",
        theme_color: "black",
        display: "standalone",
        icon: `${__dirname}/static/logo.svg`
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-nprogress",
    "gatsby-plugin-feed",
    "gatsby-plugin-purgecss",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};