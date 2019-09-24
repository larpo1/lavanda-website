import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Nav from "../../components/nav"
import { Link } from "gatsby"
import Feature from "../../components/feature"
import featureCM from "../../../static/img/features/multi-channel-manager.png"
import featureIA from "../../../static/img/features/feature-ia.png"

const ServicedApartmentsPage = () => (
  <Layout>
    <SEO title="Serviced Apartment Management Software" />

    <section className={"hero residential is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body Aligner"}>
        <div className={"hero-text Aligner-item has-text-centered"}>
          <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
            Delight residents. <br />
            Eliminate voids. <br />
            Boost NOI.
          </h1>
          <h2 className={"subtitle"}>
            Lavanda is an award winning next-generation technology platform,
            designed from inception to optimize residential assets and realize
            hidden value across multifamily and build-to-rent (BTR) portfolios.
          </h2>
          <Link to="/book-a-demo" className={"button is-primary is-medium"}>
            <strong>Request A Callback</strong>
          </Link>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>
    <Feature
      titleContent="Asset optimization"
      textContent="Talk to our industry experts about how we leverage our proprietary data to conduct a bespoke Impact Analysis that quantifies the unrealised value across your residential portfolio."
      linkTarget="/book-a-demo"
      featureImage={featureIA}
      imageAlign="img-left"
    />
    <Feature
      titleContent="Multi-channel rental strategies"
      textContent="Maximise your occupancy and demand by marketing your unrented units across the optimal set of short-term rental channels and OTAs."
      linkTarget="/book-a-demo"
      featureImage={featureCM}
      imageAlign="img-right"
    />

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <h1 className={"title is-size-1"}>One platform. <br/>Three powerful solutions.</h1>
          <div className={"columns"}>
            <div className={"column"}>
              <div className={"card"}>
                <div className={"card-content"}>
                  <p className={"title"}>Lease-up</p>
                  <p className={"subtitle"}>
                    Generate rapid uplift in your yield expectations for the
                    first year of operation in a new development.
                  </p>
                </div>
              </div>
            </div>
            <div className={"column"}>
              <div className={"card"}>
                <div className={"card-content"}>
                  <p className={"title"}>Eliminate voids</p>
                  <p className={"subtitle"}>
                    Monetise any period between tenancies with fully vetted
                    short-term rental guests.
                  </p>
                </div>
              </div>
            </div>
            <div className={"column"}>
              <div className={"card"}>
                <div className={"card-content"}>
                  <p className={"title"}>Resident hosting</p>
                  <p className={"subtitle"}>
                    Offer a fully monitored and compliant resident hosting
                    amenity in which everyone wins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className={"subtitle"}>Find the yield maximising strategy for your multifamily portfolio. Book a free discovery consultation with one of our experts.</p>
          <Link to={"/book-a-demo"} className={"button is-primary is-medium"}>
            <strong>Request a Callback</strong>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default ServicedApartmentsPage
