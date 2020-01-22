import React from "react"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

const ExpiredPage = () => (
  <Layout>
    <section className={"hero is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body Aligner"}>
        <div className={"hero-text Aligner-item has-text-centered"}>
          <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
            Sorry, that link you clicked is a bit old...
          </h1>
          <h2 className={"subtitle"}>
              Looks like you are trying to set a password using an old link. Please navigate to the log in page of the app you are trying to access and click FORGOT YOUR PASSWORD to generate a new email. 
          </h2>
          <Link to="/apps" className={"button is-primary is-medium"}>
            <strong>Select App</strong>
          </Link>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>

  </Layout>
)

export default ExpiredPage
