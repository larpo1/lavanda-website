import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Nav from "../../components/Nav"
import { Link } from "gatsby"
import Feature from "../../components/Feature"
import featureCM from "../../../static/img/features/multi-channel-manager.png"
import featureOps from "../../../static/img/features/feature-operations.png"
import featureGuestComms from "../../../static/img/features/feature-guest-comms.png"
const ServicedApartmentsPage = () => (
  <Layout>
    <SEO title="Serviced Apartment Management Software" />

    <section className={"hero home is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body Aligner"}>
        <div className={"hero-text Aligner-item has-text-centered"}>
          <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
            Not just another<br/> Hotel Management System
          </h1>
          <h2 className={"subtitle"}>
          Lavanda is an award-winning modular platform that outperforms traditional hotel software, by optimizing the performance of your serviced apartment units.
          </h2>
          <Link to="/book-a-demo" className={"button is-primary is-medium"}>
            <strong>Request A Demo</strong>
          </Link>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>

    <Feature
      titleContent="Multi-Channel Distribution"
      textContent="Maximise your occupancy and demand by marketing your property portfolio across the optimal mix of short and medium-term channels, corporate travel networks and OTAs."
      linkTarget="/book-a-demo"
      featureImage={featureCM}
      imageAlign="img-left"
    />
    <Feature
      titleContent="Operations"
      textContent="Whether you outsource your operations or handle them in-house, we have a set of solutions to streamline your operational effectiveness while driving down your bottom line costs."
      linkTarget="/book-a-demo"
      featureImage={featureOps}
      imageAlign="img-right"
    />
    <Feature
      titleContent="Guest Experience"
      textContent="Powerful automations and a unified central inbox mean your guest facing team is able to scale an authentic and welcoming hospitality operation. "
      linkTarget="/book-a-demo"
      featureImage={featureGuestComms}
      imageAlign="img-left"
    />
  </Layout>
)

export default ServicedApartmentsPage
