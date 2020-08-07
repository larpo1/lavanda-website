var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Lavanda`,
    description: `Multi-channel property management system for airbnb management, short-term rentals, serviced apartments, residential blocks`,
    author: `@davidlarpent`,
    siteUrl: `https://getlavanda.com`
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          { 
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "img"
            }
          }
        ]
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55165817-4",
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        // The CMS will be disabled on your production site
        enabled: process.env.NODE_ENV !== 'production',
        sidebar: true,
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
      },
    },
    // {
    //   resolve: 'remove-empty-fields',
    //   options: {
    //     path: `${__dirname}/src/plugins`,
    //     fieldsToRemove: [
    //       'image',
    //       'bgImage',
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `Wigcwr6HcgicUcUy7RLWaZ4EN5gJb0Jq`,
  
        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: `SEGMENT_DEV_WRITE_KEY`,
  
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,
  
        // boolean (defaults to false); whether to delay load Segment
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Segment to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Segment will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Segment
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: true,
  
        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000
      }
    },

    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        //manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     "/.netlify/functions/",
  //     proxy({
  //       target: "http://localhost:9000",
  //       pathRewrite: {
  //         "/.netlify/functions/": ""
  //       }
  //     })
  //   );
  // }
};
