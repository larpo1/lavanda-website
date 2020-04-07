import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

export const TermsTemplate = ({
  content,
  title,
  helmet,
}) => {
  return (
    <Layout>
    <Nav />
    <section className="section has-margin-top-100">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

TermsTemplate.propTypes = {
  title: PropTypes.string,
  helmet: PropTypes.object,
  termsContent: PropTypes.object,
}

const Terms = ({ data }) => {
  const { markdownRemark: terms } = data

  return (
    <Layout>
      <TermsTemplate
        description={terms.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Terms">
            <title>{`${terms.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${terms.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={terms.frontmatter.tags}
        title={terms.frontmatter.title}
        content={terms.frontmatter.termsContent}
      />
    </Layout>
  )
}

Terms.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Terms

export const pageQuery = graphql`
  query TermsByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        termsContent
      }
    }
  }
`
