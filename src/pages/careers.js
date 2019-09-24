import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const CareersPage = () => (
  <Layout>
    <SEO title="We are hiring." />
    <div className={"hero is-fullheight bg-blob"}>
    <Nav />
      <div className={"hero-body"}>
        <div className={"container has-margin-top-100"}>
          <div className={"columns"}>
            <div className={"column"}>
              <h1 className={"title"}>We are hiring!</h1>
              <p className={"subtitle"}>
                We are currently hiring for the following roles:
              </p>
              <ul className={"subtitle"}>
                <li>Talented Ruby on Rails Engineers</li>
                <li>Talented Frontend Engineers with experience in Typescript and any modern FE framework (React, Angular 2+, Vue)</li>
                <li>Talented data scientists (Python, ETL, webscraping, warehousing, predictive modelling, visualisation, Tableau, Data Studio etc.)</li>
                <li>Experienced QA/engineers in test</li>
                <li>Experienced DevOps </li>
              </ul>

            </div>
            <div className={"column"}>
              <h1 className={"title"}>How to apply</h1>
              <p className={"subtitle"}>
                Please reach out to us with an update copy of your CV or LinkedIn profile. 
              </p>
              <h2 className={"is-size-3"}>people@getlavanda.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default CareersPage
