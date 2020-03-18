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
  logos,
  highlights
}) => {
  const LandingContent = contentComponent || Content;

  return (
    <Layout>

      <section className="hero is-fullheight">
      <nav
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
      </nav>
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

            <LandingContent content={content} />
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
      tags={lp.frontmatter.tags}
      title={lp.frontmatter.title}
      category={lp.frontmatter.category}
      hero={lp.frontmatter.hero}
      logos={lp.frontmatter.logos}
      galleryImages={lp.frontmatter.galleryImages}
      highlights={lp.frontmatter.highlights}
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
