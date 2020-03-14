import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export const FeaturePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  hero,
  logos
}) => {
  const FeatureContent = contentComponent || Content;

  return (
    <Layout>
      <Nav />
      <section className="section has-margin-top-100">
        {helmet || ""}
        <div className="container content">
          <div dangerouslySetInnerHTML={{ __html: hero.code }} />
          {/* <Fragment>{hero.code}</Fragment> */}

          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <div>
            {logos && logos.length ? (
              <ul>
                {logos.map((logo, index) => (
                  <li key={index}>
                    {/* <img src={logo.logo} alt={logo.title} />
                    {logo.title} */}
                    {logo.logo ? (
                      <div className="logo">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: logo.logo,
                            alt: `logo for ${logo.title}`
                          }}
                        />
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
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
  logos: PropTypes.object,
};

const FeaturePage = ({ data }) => {
  const { markdownRemark: feature } = data;

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
      logos={feature.frontmatter.logos}
    />
  );
};

FeaturePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default FeaturePage;

export const pageQuery = graphql`
  query FeaturePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        description
        hero {
          code
        }
        logos {
          logo 
          title
        }
        tags
        title
      }
    }
  }
`;
