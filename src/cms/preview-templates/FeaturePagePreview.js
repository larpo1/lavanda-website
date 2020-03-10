import React from 'react'
import PropTypes from 'prop-types'
import { FeaturePageTemplate } from '../../templates/feature-page'

const FeaturePagePreview = ({ entry, widgetFor }) => (
  <FeaturePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeaturePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturePagePreview
