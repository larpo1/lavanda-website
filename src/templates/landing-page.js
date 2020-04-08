import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import VideoSection from "../components/VideoSection";
import Feature from "../components/Feature";
import logo from "../../static/img/lavanda-logo.svg";

export const LandingPageTemplate = ({
  description,
  tags,
  title,
  helmet,
  hero,
  heroSize,
  logos,
  highlights,
  bgImage,
  fgImage,
  awards,
  heroLightOrDark,
  videoSection
}) => {
  return (
    <Layout>
      <section
        className={heroLightOrDark + " hero wave-container overlay " + heroSize}
        style={{
          backgroundImage: `url(${
            !!bgImage ? bgImage.childImageSharp.fluid.src : bgImage
          })`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top -200px right -300px`,
          backgroundSize: `110vh`
        }}
      >
        <div className="hero-head ">
          <div className="container">
            <Link to="/" className={""}>
              <div className={"logo has-margin-top-40 has-text-centered"}>
                <img alt={"Logo"} src={logo} width="200" />
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-body">
          {helmet || ""}

          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-half">
                <h1 className="title is-size-1 has-text-weight-bold is-bold-light has-text-centered ">
                  {title}
                </h1>

                {hero && hero.length ? (
                  <div
                    className="has-text-centered"
                    dangerouslySetInnerHTML={{ __html: hero }}
                  />
                ) : null}

              </div>
              <div className="column is-half">
                {fgImage ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: fgImage,
                      alt: `image`
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className={"hero-foot"}>
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

       
      </section>

      <VideoSection
        title={videoSection.title}
        topText={videoSection.topText}
        vimeoURL={videoSection.vimeoURL}
        bottomText={videoSection.bottomText}
      />

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

LandingPageTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object,
  bgImage: PropTypes.object,
};

const LandingPage = ({ data }) => {
  const { markdownRemark: lp } = data;

  return (
    <LandingPageTemplate
      description={lp.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Page">
          <title>{`${lp.frontmatter.title}`}</title>
          <meta name="description" content={`${lp.frontmatter.description}`} />
        </Helmet>
      }
      bgImage={lp.frontmatter.bgImage}
      fgImage={lp.frontmatter.fgImage}
      tags={lp.frontmatter.tags}
      title={lp.frontmatter.title}
      category={lp.frontmatter.category}
      hero={lp.frontmatter.hero}
      heroSize={lp.frontmatter.heroSize}
      logos={lp.frontmatter.logos}
      highlights={lp.frontmatter.highlights}
      awards={lp.frontmatter.awards}
      heroLightOrDark={lp.frontmatter.heroLightOrDark}
      videoSection={lp.frontmatter.videoSection}
    />
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default LandingPage;

export const pageQuery = graphql`
  query LandingPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        hero
        heroLightOrDark
        heroSize
        bgImage{
          publicURL
        }
        fgImage {
          childImageSharp {
            fluid(maxWidth: 650, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        videoSection {
          title
          topText
          vimeoURL
          bottomText
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
