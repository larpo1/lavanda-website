import React from 'react'
import PropTypes from 'prop-types'
import { TermsTemplate } from '../../templates/terms'

const TermsPreview = ({ entry, widgetFor }) => (
  <TermsTemplate
    content={entry.getIn(['data','termsContent'])}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TermsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TermsPreview
