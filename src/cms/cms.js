import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import FeaturePagePreview from './preview-templates/FeaturePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import termsPreview from './preview-templates/TermsPreview'

import {Widget as TinyMCEWidget} from './widget-tiny-mce'


CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('terms', termsPreview)
CMS.registerPreviewTemplate('feature', FeaturePagePreview)

CMS.registerWidget(TinyMCEWidget)