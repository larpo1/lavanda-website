import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import ReactRotatingText from "react-rotating-text"
import HomeMocks from "../../static/img/mockups/homepage-mocks@2x.png"
import Awards from "../../static/img/awards.png"
import Feature from "../components/Feature"
//import PlaceholderImage from "../../static/img/placeholders/350x250.png"
import featureCM from "../../static/img/features/multi-channel-manager.png"
import featureIA from "../../static/img/features/feature-ia.png"
import featureOps from "../../static/img/features/feature-operations.png"
import featureGuestComms from "../../static/img/features/feature-guest-comms.png"

const IndexPage = () => (
  <Layout className={"bg-blob"}>
    <SEO title="Multi-channel Short-term Rental and Airbnb Property Management Software" />
    <section className={"hero home is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body has-margin-top-100"}>
        <div className={"container has-text-centered-mobile"}>
          <div className={"hero-text"}>
            <h1 className={"title is-size-1-tablet has-margin-bottom-35"}>
              Where real estate meets hospitality.
            </h1>
            <h2 className={"subtitle text-rotator"}>
              Lavanda is a next-generation proptech platform. Our award-winning
              SaaS is shaping the future of{" "}
              <ReactRotatingText
                items={[
                  "residential multi-family and BTR.",
                  "serviced apartments.",
                  "student accomodation (PBSA).",
                  "vacation rentals.",
                  "property management.",
                ]}
              />
            </h2>
            <Link to="/book-a-demo" className={"button is-primary is-medium"}>
              <strong>Request A Demo</strong>
            </Link>
          </div>
          <img src={HomeMocks} alt="PMS" className={"homepage-mocks"} />
        </div>
      </div>

      <div className={"hero-foot"}>
        <div className={"container has-text-centered-mobile"}>
          <img src={Awards} className="awards-small" alt="awards" />
        </div>
      </div>
    </section>

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <h1 className={"title is-size-2-tablet has-margin-bottom-50"}>
            Powering innovation
          </h1>
          <p className={"subtitle has-margin-bottom-50"}>
            The once separate industries of real estate, hospitality and travel
            are rapidly converging. Lavanda enables landlords and property
            managers to now capitalize on this trend globally.
          </p>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For residential assets</h2>
                <p className={"subtitle"}>
                  Optimise the performance of your build-to-rent (BTR) portfolio
                  by tapping into legitimate, high-value short and medium term
                  rental demand.
                </p>
                <Link
                  to="/for/residential-assets"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For student housing</h2>
                <p className={"subtitle"}>
                  Boost returns across your purpose built student housing
                  portfolio all year round, while offering student residents
                  unprecedented value and flexibility.
                </p>
                <Link
                  to="/for/student-housing"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
          </div>
          <div className={"columns"}>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For serviced apartments</h2>
                <p className={"subtitle"}>
                  Unlock operational efficiencies with intelligent automation
                  whilst attracting more profitable guests from unique
                  distribution channels.
                </p>
                <Link
                  to="/for/serviced-apartments"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
            <div className={"column is-half-tablet"}>
              <article className={"is-child notification box-shadow is-white"}>
                <h2 className={"title is-size-4"}>For property managers</h2>
                <p className={"subtitle"}>
                  Discover a comprehensive SaaS toolkit designed to unlock scale
                  and profitability, whilst accelerating your growth through
                  industry partnerships.
                </p>
                <Link
                  to="/for/property-managers"
                  className={"button is-secondary"}
                >
                  Learn More &#10511;
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Feature
      titleContent="Asset optimization"
      textContent="Our industry experts leverage proprietary data to conduct a bespoke Impact Analysis that quantifies the unrealised value across your residential portfolio."
      linkTarget="/for/residential-assets"
      featureImage={featureIA}
      imageAlign="img-right"
    />
    <Feature
      titleContent="Multi-channel rental strategies"
      textContent="Optimize the distribution of your residential units across short, medium and long-term rental channels - including Lavanda’s unique Booking Network."
      linkTarget="/for/residential-assets"
      featureImage={featureCM}
      imageAlign="img-left"
    />
    <Feature
      titleContent="Hospitality"
      textContent="Build community by delivering a seamless, authentic and welcoming experience for both long-term residents and short-term guests."
      linkTarget="/for/residential-assets"
      featureImage={featureGuestComms}
      imageAlign="img-right"
    />
    <Feature
      titleContent="Operations"
      textContent="Leverage our property management system (PMS) to manage operations in-house, or choose to partner with an accredited, best-in-class local operator."
      linkTarget="/for/serviced-apartments"
      featureImage={featureOps}
      imageAlign="img-left"
    />
    {/* <Feature
      titleContent="Performance"
      textContent="Powerful automations and a unified central inbox mean your guest facing team is able to scale an authentic and welcoming hospitality operation. "
      linkTarget="/for/residential-assets"
      featureImage={PlaceholderImage}
      imageAlign="img-right"
    /> */}

    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className={"container has-text-centered"}>
          <p className={"title"}>Industry Recognition</p>
          <p className={"subtitle"}>
            Lavanda has been recognised as a leading innovator in global real
            estate.
          </p>
          <img src={Awards} className="awards" alt="awards" />
        </div>
      </div>
    </section>

    <section className={"press"} />

    <section className={"left-feature is-fullheight"}>
      <div className={"container"}>
        <div className={"columns"}>
          <div className={"column"} />
          <div className={"column"} />
        </div>
      </div>
    </section>
    <section className={"right-feature"} />
  </Layout>
)

export default IndexPage
