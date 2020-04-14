### Access Locally
Clone and cd in. 
```
$ yarn
$ npm run develop
```

Do not NPM install as this will create errors. Use Yarn always. 

To test the CMS locally, you'll need:
```
$ npx netlify-cms-proxy-server
```
to start a local proxy server for the CMS


## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

