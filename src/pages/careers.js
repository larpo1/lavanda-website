import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Nav from "../components/Nav"

const CareersPage = () => (
  <Layout>
    <SEO title="We are hiring." />
    <div className={"hero is-fullheight bg-blob"}>
    <Nav />
      <div className={"hero-body"}>
        <div className={"container has-margin-top-100"}>
        <div id="BambooHR">
          <object data="https://lavanda.bamboohr.com/jobs/" title="Bamboo" className="bamboo-embed">
          </object>
        </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default CareersPage
