import React from "react";
import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Content, { HTMLContent } from "../components/Content";

export const FeaturePageTemplate = ({
  content,
  contentComponent,
  title,
  helmet
}) => {
  const FeatureContent = contentComponent || Content;

  return (
    <Layout>
      <Nav />
      <section className="section has-margin-top-100">
        {helmet || ""}
        <div className="container content">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <FeatureContent content={content} />
        </div>
      </section>
    </Layout>
  );
};

FeaturePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const FeaturePage = ({ data }) => {
    const { markdownRemark: feature } = data

    return (
        <Layout>
            <FeaturePageTemplate
                contentComponent={HTMLContent}
                title={feature.frontmatter.title}
                content={feature.html}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                      <title>{`${feature.frontmatter.title}`}</title>
                      <meta
                        name="description"
                        content={`${feature.frontmatter.description}`}
                      />
                    </Helmet>
                  }
            
            />
        </Layout>
    )
}
