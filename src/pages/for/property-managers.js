import React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import Nav from "../../components/Nav";
import { Link } from "gatsby";
import Feature from "../../components/Feature";
import featureCM from "../../../static/img/features/multi-channel-manager.png";
import featureCRM from "../../../static/img/features/CRM.png";
import featureOps from "../../../static/img/features/feature-operations.png";
import featureGuestComms from "../../../static/img/features/feature-guest-comms.png";

const PropertyManagersPage = () => (
  <Layout>
    <SEO title="Airbnb Property Mansagement Software" />

    <section className={"hero property-managers is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body container"}>
        <div className={" columns"}>
          <div className={"hero-text column has-text-centered"}>
            <h1 className={"title has-margin-bottom-35 is-size-1-tablet"}>
              The PMS that actively grows your business.
            </h1>
            <h2 className={"subtitle"}>
              Lavanda PMS (property management system) is a complete end-to-end
              management platform that unlocks efficiency while actively growing
              your short-term rental business.
            </h2>
            <Link to="/book-a-demo" className={"button is-primary is-medium"}>
              <strong>Request A Demo</strong>
            </Link>
          </div>
        </div>
      </div>

      <div className={"hero-foot"} />
    </section>

    <Feature
      titleContent="Multi-Channel Distribution"
      textContent="Maximise your occupancy and demand by marketing your property portfolio across the optimal set of channels and OTAs."
      linkTarget="/book-a-demo"
      featureImage={featureCM}
      imageAlign="img-left"
    />
    <Feature
      titleContent="Growth"
      textContent="Outstrip the competition with our unique combination of growth tools and an pipeline of qualified inventory from the Lavanda Partner Network"
      linkTarget="/book-a-demo"
      featureImage={featureCRM}
      imageAlign="img-right"
    />
    <Feature
      titleContent="Operations"
      textContent="Whether you outsource your operations or handle them in-house, we have a set of solutions to streamline your operational effectiveness while driving down your bottom line costs."
      linkTarget="/book-a-demo"
      featureImage={featureOps}
      imageAlign="img-left"
    />
    <Feature
      titleContent="Guest Experience"
      textContent="Powerful automations and a unified central inbox mean your guest facing team is able to scale an authentic and welcoming hospitality operation. "
      linkTarget="/book-a-demo"
      featureImage={featureGuestComms}
      imageAlign="img-right"
    />
  </Layout>
);

export default PropertyManagersPage;
