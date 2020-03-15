import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";
import HomeMocks from "../../static/img/mockups/homepage-mocks@2x.png"


export const IndexPageTemplate = ({
  description,
  title,
  subtitle,
  fgImage,
  bgImage,
  ctaText,
  ctaTarget,
  awards,
  highlights
}) => (
  <Layout>
    <SEO title={description} />

    <section
      className={"hero home is-fullheight bg-blob"}
    >
      <Nav />
      <div className={"hero-body has-margin-top-100"}>
        <div className={"container has-text-centered-mobile"}>
          <div className={"hero-text"}>
            <h1 className={"title is-size-1-tablet has-margin-bottom-35"}>
              {title}
            </h1>
            <h2 className="subtitle">{subtitle}</h2>
            <Link to={ctaTarget} className={"button is-primary is-medium"}>
              <strong>{ctaText}</strong>
            </Link>
          </div>
          <img src={HomeMocks} alt="PMS" className={"homepage-mocks"} />
        </div>
      </div>  

      <div className={"hero-foot"}>
        <div className={"container has-text-centered-mobile"}>
          {awards && awards.length ? (
            <div>
              {awards.map((award, index) => (
                <div className="awards awards-small" alt="awards" key={index}>
                  {award ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: award.awardImage,
                        alt: award.awardImageAlt
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <h1 className={"title is-size-2-tablet has-margin-bottom-50"}>
            Tell us where you want to go.
          </h1>
          <p className="subtitle">We'll show you how to get there.</p>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For residential assets</h2>
                <p className={"subtitle"}>
                  Optimise the performance of your build-to-rent (BTR) portfolio
                  by tapping into legitimate, high-value short and medium term
                  rental demand.
                </p>
                <Link
                  to="/for/residential-assets"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For student housing</h2>
                <p className={"subtitle"}>
                  Boost returns across your purpose built student housing
                  portfolio all year round, while offering student residents
                  unprecedented value and flexibility.
                </p>
                <Link
                  to="/for/student-housing"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
          </div>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For serviced apartments</h2>
                <p className={"subtitle"}>
                  Unlock operational efficiencies with intelligent automation
                  whilst attracting more profitable guests from unique
                  distribution channels.
                </p>
                <Link
                  to="/for/serviced-apartments"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For property managers</h2>
                <p className={"subtitle"}>
                  Discover a comprehensive SaaS toolkit designed to unlock scale
                  and profitability, whilst accelerating your growth through
                  industry partnerships.
                </p>
                <Link
                  to="/for/property-managers"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
          </div>
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
      <div className="container">
        <BlogRoll />
      </div>
    </section>
  </Layout>
);

IndexPageTemplate.propTypes = {
  bgImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fgImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        bgImage={frontmatter.bgImage}
        fgImage={frontmatter.fgImage}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        description={frontmatter.description}
        ctaText={frontmatter.ctaText}
        ctaTarget={frontmatter.ctaTarget}
        awards={frontmatter.awards}
        highlights={frontmatter.highlights}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        subtitle
        description
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        fgImage {
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ctaTarget
        ctaText
        awards {
          awardImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          awardURLTarget
          awardImageAlt
          awardTitle
        }
        highlights {
          imageAlign
          linkTarget
          textContent
          titleContent
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
