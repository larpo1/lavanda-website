import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";

export const IndexPageTemplate = ({
  description,
  title,
  subtitle,
  fgImage,
  // bgImage,
  ctaText,
  ctaTarget,
  awards,
  highlights
}) => (
  <Layout>
    <SEO title={description} />

    <section className={"hero home is-fullheight wave-container"}>
      <Nav />
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <div className={"hero-text"}>
            <h1 className={"title is-size-1-tablet has-margin-bottom-35 lav-blue"}>
              {title}
            </h1>
            <div
              className="subtitle"
              dangerouslySetInnerHTML={{ __html: subtitle.code }}
            />
            <Link to={ctaTarget} className={"button is-primary is-medium has-margin-right-10"}>
              <strong>{ctaText}</strong>
            </Link>
            <Link to="#video" className={"button is-medium"}>
              <strong>Learn More</strong>
            </Link>
          </div>
          <img
            src={fgImage.childImageSharp.fluid.src}
            alt="PMS"
            className={"city-graphic"}
          />
        </div>
      </div>

      <div className={"hero-foot"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(0)">
              <stop offset="0%" stop-color="#11253b" />
              <stop offset="50%" stop-color="#183656" />
              <stop offset="100%" stop-color="#477fba" />
            </linearGradient>
          </defs>
          <path
            fill="url('#myGradient')"
            gradientTransform="rotate(180)"
            fill-opacity="1"
            d="M0,0L34.3,37.3C68.6,75,137,149,206,154.7C274.3,160,343,96,411,64C480,32,549,32,617,53.3C685.7,75,754,117,823,149.3C891.4,181,960,203,1029,208C1097.1,213,1166,203,1234,181.3C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
          <path
            fill="url('#myGradient')"
            fill-opacity="0.9"
            d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,48C560,32,640,32,720,42.7C800,53,880,75,960,90.7C1040,107,1120,117,1200,106.7C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
          <path
            fill="url('#myGradient')"
            fill-opacity="0.2"
            d="M0,32L34.3,32C68.6,32,137,32,206,48C274.3,64,343,96,411,96C480,96,549,64,617,48C685.7,32,754,32,823,74.7C891.4,117,960,203,1029,240C1097.1,277,1166,267,1234,266.7C1302.9,267,1371,277,1406,282.7L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
          <path
            fill="url('#myGradient')"
            fill-opacity="0.6"
            d="M0,96L40,90.7C80,85,160,75,240,64C320,53,400,43,480,64C560,85,640,139,720,133.3C800,128,880,64,960,58.7C1040,53,1120,107,1200,122.7C1280,139,1360,117,1400,106.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <div className={"container has-text-centered-mobile"}>
          {awards && awards.length ? (
            <div className="awards">
              {awards.map((award, index) => (
                <div className="award" alt={award.awardTitle} key={index}>
                  {award ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: award.awardImage,
                        alt: award.awardImageAlt
                      }}
                    />
                  ) : null}
                  <p className="award-title">{award.awardTitle}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>

    <section className={"hero is-fullheight is-dark wave-container"} id="video">
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <h1 className={"title is-size-1 has-margin-bottom-50"}>
            Not just another PMS
          </h1>
          <iframe
            className="video-frame"
            src="https://player.vimeo.com/video/371912890"
            title="Lavanda PMS Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <p className="subtitle is-size-4-tablet has-margin-top-50 column is-half is-offset-one-quarter">As a company who started out as a Property Manager, we understand the daily pressures around managing staff, profits, advertising, guest experience and financial reporting. So, we built a platform to automate your day-to-day, ready to integrate with you.</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fill-opacity="0.6"
          d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#f5f5f5"
          fill-opacity="0.2"
          d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <h1 className={"title is-size-1-tablet has-margin-bottom-50"}>
            What's your biggest challenge?
          </h1>
          <p className="subtitle">
            Let us show you a pain free way to grow your business.
          </p>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-3"}>Operational Complexity</h2>
                <p className={"subtitle"}>
                  So much complexity! Keeping track of the problems is a 24 hour
                  a day, 365 days a year headache.
                </p>
                <Link to="/tags/operations" className={"button is-secondary"}>
                  I Feel the Pain &#10511;
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="0.9"
          d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
          <path
            fill="#ffffff"
            fill-opacity="0.5"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,272C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
      </svg>
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

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className="container">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);

IndexPageTemplate.propTypes = {
  bgImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fgImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subtitle: PropTypes.object,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
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
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      frontmattermd: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        subtitle {
          code
        }
        description
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
              tracedSVG
            }
          }
        }
        fgImage {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        ctaTarget
        ctaText
        awards {
          awardImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100, grayscale: true) {
                src
                sizes
                srcSet
                base64
                aspectRatio
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
