import React from "react";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const EngineeringPostTemplate = ({
  content,
  description,
  tags,
  title,
  featuredImage,
  helmet,
  date,
  metaTitle,
  blogCtaTitle,
  blogCtaText,
  blogCtaButtonText,
  blogCtaButtonTarget
}) => {
  return (
    <Layout>
      <SEO title={metaTitle} description={description} />
      <section
        className="hero"
        style={{
          height: `55vh`,
          backgroundImage: `url(${
            featuredImage
              ? featuredImage.childImageSharp.fluid.src
              : featuredImage
          })`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          // backgroundPosition: `top -200px right -300px`,
          // backgroundSize: `110vh`,
        }}
      >
        <Nav />
        <div className="hero-body">&nbsp;</div>
      </section>
      <section className="has-background-light">
        <article className="container blog-content">
          {helmet || ""}
          {/* {featuredImage && featuredImage.childImageSharp ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredImage,
              alt: { title },
            }}
          />
        ) : (
          <div className="">
            {featuredImage ? (
              <img src={featuredImage.publicURL} alt={title} />
            ) : null}
          </div>
        )} */}
          <div className="container content">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p className="subtitle">{date}</p>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {blogCtaTitle && blogCtaTitle.length ? (<div className="blog-cta">
                  <h3>{blogCtaTitle}</h3>
                  <p>
                    {blogCtaText}
                  </p>
                  <Link to={blogCtaButtonTarget} className={"button is-primary"}>
                    <strong>{blogCtaButtonText}</strong>
                  </Link>
                </div>) :null}
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

EngineeringPostTemplate.propTypes = {
  postContent: PropTypes.object,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const EngineeringPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <EngineeringPostTemplate
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Lavanda Engineering">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      content={post.frontmatter.postContent}
      featuredImage={post.frontmatter.featuredimage}
      blogCtaTitle={post.frontmatter.blogCtaTitle}
      blogCtaText={post.frontmatter.blogCtaText}
      blogCtaButtonText={post.frontmatter.blogCtaButtonText}
      blogCtaButtonTarget={post.frontmatter.blogCtaButtonTarget}
      metaTitle={post.frontmatter.metaTitle}
    />
  );
};

EngineeringPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default EngineeringPost;

export const pageQuery = graphql`
  query EngineeringPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        metaTitle
        description
        blogCtaTitle
        blogCtaText
        blogCtaButtonText
        blogCtaButtonTarget
        tags
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        postContent
      }
    }
  }
`;
