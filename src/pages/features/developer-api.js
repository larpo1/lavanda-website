import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Nav from "../../components/Nav"
import { Link } from "gatsby"

const ServicedApartmentsPage = () => (
  <Layout>
    <SEO title="Serviced Apartment Management Software" />

    <section className={"hero home is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body Aligner"}>
        <div className={"hero-text Aligner-item has-text-centered"}>
          <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
            Developer API
          </h1>
          <h2 className={"subtitle"}>
            Join our growing number of integration partners and build tools that integrate with Lavanda's powerful RESTful APIs.
          </h2>
          <Link to="/discuss-api-access" className={"button is-primary is-medium"}>
            <strong>Request Access</strong>
          </Link>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>

  </Layout>
)

export default ServicedApartmentsPage
