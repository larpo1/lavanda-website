import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Feature from "../components/Feature";
import logo from "../../static/img/lavanda-logo.svg";

export const LandingPageTemplate = ({
  content,
  contentComponent,
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
  heroLightOrDark
}) => {
  const LandingContent = contentComponent || Content;

  return (
    <Layout>
      <section
        className={heroLightOrDark + " hero overlay " + heroSize}
        style={{
          backgroundImage: `url(${
            !!bgImage ? bgImage.childImageSharp.fluid.src : bgImage
          })`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`
        }}
      >
        {/* <nav
          className={"navbar"}
          role="navigation"
          aria-label="main navigation"
          id="navbar"
        >
          <div className="container">
            <div className={"navbar-brand"}>
              <Link to="/" className={"navbar-item"}>
                <div className={"logo"}>
                  <img alt={"Logo"} src={logo} />
                </div>
              </Link>
            </div>
          </div>
        </nav> */}
        <div className="hero-head ">
          <div className="container has-text-centered">
          <Link to="/" className={"navbar-item"}>
            <div className={"logo"}>
              <img alt={"Logo"} src={logo} />
            </div>
          </Link>
          </div>
        </div>
        <div className="hero-body">
          {helmet || ""}

          <div className="container content">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered ">
                  {title}
                </h1>

                {hero.code && hero.code.length ? (
                  <div
                    className="has-text-centered"
                    dangerouslySetInnerHTML={{ __html: hero.code }}
                  />
                ) : null}

                <LandingContent content={content} />
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
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  helmet: PropTypes.object
};

const LandingPage = ({ data }) => {
  const { markdownRemark: lp } = data;

  return (
    <LandingPageTemplate
      content={lp.html}
      contentComponent={HTMLContent}
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
      heroLightOrDark={lp.frontmatter.heroLightOrDark}
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
      html
      frontmatter {
        title
        description
        hero {
          code
        }
        heroLightOrDark
        heroSize
        bgImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
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
