import React from 'react'
import PropTypes from 'prop-types'
import { LandingPageTemplate } from '../../templates/landing-page'

const LandingPagePreview = ({ 
  entry, 
  widgetFor
}) => (
  <LandingPageTemplate
  title={entry.getIn(['data','lp.frontmatter.title'])}
  hero={entry.getIn(['data','hero'])}
/>
)

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LandingPagePreview
