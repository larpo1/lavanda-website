import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature"


export const FeaturePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  category,
  helmet,
  hero,
  logos,
  galleryImages,
  highlights
}) => {
  const FeatureContent = contentComponent || Content;

  return (
    <Layout>
      <Nav />
      <section className="hero is-large">
        <div className="hero-body">
          {helmet || ""}
          <div className="container content">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered ">
              {title}
            </h1>

            {hero.code && hero.code.length ? (
              <div
                className="has-text-centered"
                dangerouslySetInnerHTML={{ __html: hero.code }}
              />
            ) : null}

            <div className="gallery">
              {galleryImages && galleryImages.length ? (
                <div>
                  {galleryImages.map((image, index) => (
                    <div key={index}>
                      {image ? (
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: image,
                            alt: `image`
                          }}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <FeatureContent content={content} />
          </div>
        </div>
      </section>

      {highlights && highlights.length ? (
        <div>
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
        </div>
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
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
  hero: PropTypes.string,
  galleryImages: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  highlights: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
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
      category={feature.frontmatter.category}
      hero={feature.frontmatter.hero}
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
        hero {
          code
        }
        galleryImages {
          childImageSharp {
            id
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
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
