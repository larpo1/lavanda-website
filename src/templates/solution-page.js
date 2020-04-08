import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";

export const SolutionPageTemplate = ({
  description,
  tags,
  title,
  solutionHeading,
  category,
  helmet,
  solutionSubtitle,
  logos,
  galleryImages,
  highlights,
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
                  {solutionHeading}
                </h1>
                {solutionSubtitle && solutionSubtitle.length ? (
                  <div dangerouslySetInnerHTML={{ __html: solutionSubtitle }} />
                ) : null}
              </div>

              {galleryImages && galleryImages.length ? (
                <div className="column is-half">
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
                              alt: `image`,
                            }}
                          />
                        ) : (
                          <div className="browser-mockup with-url">
                            <img src={image.publicURL} alt={title} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {highlights && highlights.length ? (
        <section style={{ backgroundColor: `#f4f6fc` }}>
          {highlights.map((hl) => (
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

      {tags && tags.length ? (
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
      ) : null}
    </Layout>
  );
};

SolutionPageTemplate.propTypes = {
  subtitleContent: PropTypes.func,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
};

const SolutionPage = ({ data }) => {
  const { markdownRemark: solution } = data;

  return (
    <SolutionPageTemplate
      description={solution.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Page">
          <title>{`${solution.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${solution.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={solution.frontmatter.tags}
      title={solution.frontmatter.title}
      solutionHeading={solution.frontmatter.solutionHeading}
      category={solution.frontmatter.category}
      solutionSubtitle={solution.frontmatter.solutionSubtitle}
      logos={solution.frontmatter.logos}
      galleryImages={solution.frontmatter.galleryImages}
      highlights={solution.frontmatter.highlights}
    />
  );
};

SolutionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default SolutionPage;

export const pageQuery = graphql`
  query SolutionPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        solutionHeading
        description
        solutionSubtitle
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
      }
    }
  }
`;
