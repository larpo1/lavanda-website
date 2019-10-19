import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Content, { HTMLContent } from '../components/Content'

export const TermsTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const TermsContent = contentComponent || Content

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
            <TermsContent content={content} />
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

TermsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Terms = ({ data }) => {
  const { markdownRemark: terms } = data

  return (
    <Layout>
      <TermsTemplate
        content={terms.html}
        contentComponent={HTMLContent}
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
      }
    }
  }
`
