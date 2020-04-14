import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const BlogPostTemplate = ({
  content,
  description,
  tags,
  title,
  featuredImage,
  helmet,
  date,
}) => {
  return (
    <Layout>
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
        <div className="hero-body">
          &nbsp;
        </div>
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

BlogPostTemplate.propTypes = {
  postContent: PropTypes.object,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Blog">
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
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
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
