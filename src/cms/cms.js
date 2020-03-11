import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
// import { init } from "netlify-cms-app";

import AboutPagePreview from './preview-templates/AboutPagePreview'
import FeaturePagePreview from './preview-templates/FeaturePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import termsPreview from './preview-templates/TermsPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('terms', termsPreview)
CMS.registerPreviewTemplate('feature', FeaturePagePreview)

// window.CMS_MANUAL_INIT = true; // this doesn't do anything, at least in my testing

// // You will have to do some work to set some env variable (like BRANCH)
// // with the current git branch for local development. Netlify will automatically
// // populate this variable for you when doing CI builds.
// const { BRANCH } = process.env; 

//   const config = {
//     backend: {
//       name: "github",
//       repo: "repo/name",
//       // prefer the set BRANCH if available, or fallback to `master`
//       branch: BRANCH || "master" 
//     }
//   };

//   init({ config });