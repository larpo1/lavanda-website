import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Content, { HTMLContent } from '../components/Content'

export const FeaturePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  hero,
}) => {
  const FeatureContent = contentComponent || Content;

  return (
    <Layout>
      <Nav />
      <section>
        {hero}
      </section>
      <section className="section has-margin-top-100">
        {helmet || ""}
        <div className="container content">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p className="article-body">{description}</p>
          <FeatureContent content={content} />
          {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
        </div>
      </section>
    </Layout>
  );
};

FeaturePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  hero: PropTypes.object,
}

const FeaturePage = ({ data }) => {
    const { markdownRemark: feature } = data

    return (
      <FeaturePageTemplate
        content={feature.html}
        contentComponent={HTMLContent}
        description={feature.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Page">
            <title>{`${feature.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${feature.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={feature.frontmatter.tags}
        title={feature.frontmatter.title}
        hero={feature.frontmatter.hero}
      />
    )
}

FeaturePage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  }
  
  export default FeaturePage

  export const pageQuery = graphql`
    query FeaturePageByID($id: String!) {
      markdownRemark(id: { eq: $id }) {
        id
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  `