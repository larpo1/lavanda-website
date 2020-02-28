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
        <div id="BambooHR"><script src="https://lavanda.bamboohr.com/js/jobs2.php" type="text/javascript"></script><div id="BambooHR-Footer">Powered by<a href="http://www.bamboohr.com" target="_blank" rel="noopener external nofollow noreferrer"><img src="https://resources.bamboohr.com/images/footer-logo.png" alt="BambooHR - HR software"/></a></div></div>

        {/* <div id="BambooHR">
          <object data="https://lavanda.bamboohr.com/jobs/embed2.php" title="Bamboo" className="bamboo-embed">
          </object>
        </div> */}
        </div>
      </div>
    </div>
  </Layout>
)

export default CareersPage
