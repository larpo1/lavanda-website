import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";
import MarkdownContent from "../components/MarkdownContent";

export const FeaturePageTemplate = ({
  description,
  tags,
  title,
  h1,
  category,
  helmet,
  featureSubtitle,
  logos,
  galleryImages,
  highlights,
}) => {
  return (
    <Layout>
      <Nav />
      <section className="hero is-fullheight wave-container">
        <div className="hero-body">
          {helmet || ""}
          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title is-size-1  is-size-3-mobile has-text-weight-bold is-bold-light has-text-centered-mobile ">
                  {h1}
                </h1>
                {featureSubtitle && featureSubtitle ? (
                  <MarkdownContent
                    content={featureSubtitle}
                    className={"subtitle has-margin-top-30 is-hidden-mobile"}
                  />
                ) : null}
              </div>
              <div className="column is-half">
                {galleryImages && galleryImages.length ? (
                  <div className="gallery">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="img-container browser-mockup with-url"
                      >
                        {!!image && !!image.childImageSharp ? (
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: image,
                              alt: `image`,
                            }}
                          />
                        ) : (
                          <div className="">
                            {image ? (
                              <img src={image.publicURL} alt={title} />
                            ) : null}
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

        <svg xmlns="http://www.w3.org/2000/svg" className="rising-wave" viewBox="0 0 1440 320">
          <path
            fill="#72c4b9"
            gradientTransform="rotate(180)"
            fillOpacity="0.3"
            d="M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>

          <path
            fill="#72c4b9"
            gradientTransform="rotate(180)"
            fillOpacity="0.7"
            d="M0,256L80,224C160,192,320,128,480,133.3C640,139,800,213,960,240C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>

      {highlights && highlights.length ? (
        <section className="wave-container" style={{ backgroundColor: `#f4f6fc` }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="falling-wave" viewBox="0 0 1440 320">
            <path
              fill="#72c4b9"
              fillOpacity="0.3"
              d="M0,64L80,85.3C160,107,320,149,480,138.7C640,128,800,64,960,42.7C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
            <path
              fill="#72c4b9"
              fillOpacity="0.7"
              d="M0,64L80,53.3C160,43,320,21,480,37.3C640,53,800,107,960,117.3C1120,128,1280,96,1360,80L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>

          {highlights.map((hl, index) => (
            <Feature
              key={index}
              titleContent={hl.titleContent}
              textContent={hl.textContent}
              linkTarget={hl.linkTarget}
              imageAlign={hl.imageAlign}
              featureImage={hl.image}
              imageClasses={hl.imageClasses}
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
                        alt: `logo for ${logo.title}`,
                      }}
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* {tags && tags.length ? (
        <section>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map((tag) => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null} */}
    </Layout>
  );
};

FeaturePageTemplate.propTypes = {
  subtitleContent: PropTypes.func,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
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
      h1={feature.frontmatter.h1}
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
    markdownRemark: PropTypes.object,
  }),
};

export default FeaturePage;

export const pageQuery = graphql`
  query FeaturePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        h1
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
          imageClasses
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
