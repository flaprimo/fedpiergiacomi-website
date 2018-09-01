module.exports = {
  siteMetadata: {
    title: "Federica Piergiacomi",
    author: "Flavio Primo",
    description: "The most amazing set and light designer <3",
    siteUrl: "https://fedpiergiacomi.netlify.com",
    nav: [
      {
        title: "Home",
        url: "/"
      },
      {
        title: "Portfolio",
        url: "/portfolio"
      },
      {
        title: "About",
        url: "/about"
      }
    ],
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/portfolio`,
        name: "portfolio"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              quality: 90,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
          // {
          //   resolve: 'gatsby-remark-external-links',
          //   options: {
          //     target: '_blank',
          //     rel: 'nofollow noopener noreferrer',
          //   }
          // }
        ]
      }
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Federica Piergiacomi",
        short_name: "Federica Piergiacomi",
        description: "The most amazing set and light designer <3",
        start_url: "/",
        background_color: "red",
        theme_color: "red",
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