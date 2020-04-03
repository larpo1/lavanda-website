import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";
import MarkdownContent from "../components/MarkdownContent"


export const FeaturePageTemplate = ({
  description,
  tags,
  title,
  category,
  helmet,
  featureSubtitle,
  logos,
  galleryImages,
  highlights
}) => {
  return (
    <Layout>
      <Nav />
      <section className="hero is-fullheight">
        <div className="hero-body">
          {helmet || ""}
          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title is-size-1 has-text-weight-bold is-bold-light has-text-centered-mobile ">
                  {title}
                </h1>
                {featureSubtitle && featureSubtitle ? (
                  <MarkdownContent content={featureSubtitle} className={"subtitle has-margin-top-20"} />
                ) : null}
              </div>
              <div className="column is-half">
                {galleryImages && galleryImages.length ? (
                  <div className="gallery">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="img-container">
                        {/* {image ? (
                            <PreviewCompatibleImage
                              imageInfo={{
                                image: image,
                                alt: `image`
                              }}
                            />
                          ) : null} */}
                        {!!image && !!image.childImageSharp ? (
                          <PreviewCompatibleImage
                          imageInfo={{
                            image: image,
                            alt: `image`
                          }}
                          />
                        ) : (
                          <div className="browser-mockup with-url">
                            <img src={image.publicURL} alt={title}  />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {highlights && highlights.length ? (
        <section>
          {highlights.map(hl => (
            <Feature
              key={hl}
              titleContent={hl.titleContent}
              textContent={hl.textContent}
              linkTarget={hl.linkTarget}
              imageAlign={hl.imageAlign}
              featureImage={hl.image}
            />
          ))}
        </section>
      ) : null}

      <section>
        {logos && logos.length ? (
          <ul>
            {logos.map((logo, index) => (
              <li key={index}>
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
      </section>

      {tags && tags.length ? (
        <section>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Layout>
  );
};

FeaturePageTemplate.propTypes = {
  subtitleContent: PropTypes.func,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object
};

const FeaturePage = ({ data }) => {
  const { markdownRemark: feature } = data;

  return (
    <FeaturePageTemplate
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
      category={feature.frontmatter.category}
      featureSubtitle={feature.frontmatter.featureSubtitle}
      logos={feature.frontmatter.logos}
      galleryImages={feature.frontmatter.galleryImages}
      highlights={feature.frontmatter.highlights}
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
        title
        description
        featureSubtitle
        galleryImages {
          childImageSharp {
            id
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        highlights {
          titleContent
          textContent
          linkTarget
          imageAlign
          image {
            childImageSharp {
              id
              fluid(maxWidth: 450, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        tags
        title
      }
    }
  }
`;
