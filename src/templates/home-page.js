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
        <div className={"container"}>
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className={"hero-text has-text-centered-mobile "}>
                <h1
                  className={
                    "title is-size-3-touch is-size-2-tablet lav-blue has-text-centered-mobile "
                  }
                >
                  {title}
                </h1>
                <div
                  className="subtitle is-hidden-mobile has-margin-top-20"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
                <Link
                  to={ctaTarget}
                  className={"button is-primary is-medium has-margin-right-10"}
                >
                  <strong>{ctaText}</strong>
                </Link>
                <Link to="#video" className={"button is-medium"}>
                  <strong>Learn More</strong>
                </Link>
              </div>
            </div>
            <div className="column is-half is-hidden-mobile">
              <img
                src={fgImage.childImageSharp.fluid.src}
                alt="PMS"
                className={""}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={"hero-foot"}>
        <div className={"container has-text-centered-mobile"}>
          {awards && awards.length ? (
            <div className="awards has-padding-40-mobile">
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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(0)">
            <stop offset="0%" stopColor="#11253b" />
            <stop offset="50%" stopColor="#183656" />
            <stop offset="100%" stopColor="#477fba" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient')"
          gradientTransform="rotate(180)"
          fillOpacity="0.5"
          d="M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="url('#myGradient')"
          gradientTransform="rotate(180)"
          fillOpacity="0.7"
          d="M0,320L80,288C160,256,320,192,480,192C640,192,800,256,960,282.7C1120,309,1280,299,1360,293.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="url('#myGradient')"
          gradientTransform="rotate(180)"
          fillOpacity="0.2"
          d="M0,288L80,288C160,288,320,288,480,272C640,256,800,224,960,229.3C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="url('#myGradient')"
          gradientTransform="rotate(180)"
          fillOpacity="0.2"
          d="M0,256L80,224C160,192,320,128,480,133.3C640,139,800,213,960,240C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="url('#myGradient')"
          gradientTransform="rotate(180)"
          fillOpacity="1"
          d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
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
          <p className="subtitle is-size-4-tablet has-margin-top-50 column is-half is-offset-one-quarter">
            As a company who started out as a Property Manager, we understand
            the daily pressures around managing staff, profits, advertising,
            guest experience and financial reporting. So, we built a platform to
            automate your day-to-day, ready to integrate with you.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f5"
          fillOpacity="0.6"
          d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#f5f5f5"
          fillOpacity="0.2"
          d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#f5f5f5"
          fillOpacity="1"
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
                <h2 className={"title is-size-3"}>Pain Point #2</h2>
                <p className={"subtitle"}>
                  Lots of problems and excruciating pain that we can solve with
                  something clever like our owner leads funnel.
                </p>
                <Link to="/tags/growth" className={"button is-secondary"}>
                  Learn More &#10511;
                </Link>
              </article>
            </div>
          </div>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-3"}>Pain Point #3</h2>
                <p className={"subtitle"}>
                  Lots of problems and excruciating pain that we can solve with
                  something clever like our direct bookings sites.
                </p>
                <Link
                  to="/tags/direct-bookings"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-3"}>Pain Point #4</h2>
                <p className={"subtitle"}>
                  Lots of problems and excruciating pain that we can solve with
                  something clever like our owner workflow tools.
                </p>
                <Link to="/tags/workflows" className={"button is-secondary"}>
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
          fillOpacity="0.9"
          d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#ffffff"
          fillOpacity="0.5"
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
        subtitle
        description
        bgImage
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
