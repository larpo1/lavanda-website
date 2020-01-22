import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { Link } from "gatsby"

const ExpiredPage = () => (
  <Layout>
    <section className={"hero is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body Aligner"}>
        <div className={"hero-text Aligner-item has-text-centered"}>
          <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
            Oh dear... sorry.
          </h1>
          <h2 className={"subtitle"}>
              Looks like you are trying to set a password using a link that has expired. Please navigate to the log in page of the app you are trying to access and click FORGOT YOUR PASSWORD to generate a new email. 
          </h2>
          <Link to="/apps" className={"button is-primary is-medium"}>
            <strong>Try Again</strong>
          </Link>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>

  </Layout>
)

export default ExpiredPage
