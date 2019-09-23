import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const ContactPage = () => (
  <Layout>
    <SEO title="We love feedback." />
    <div className={"hero is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body"}>
        <div className={"container has-margin-top-100"}>
          <div className={"container"}>
            <h1 className={"title"}>Contact Us</h1>
            <div className={"columns"}>
              <div className={"column"}>
                <p className={"subtitle"}>
                  We take our commitment to our users seriously. If you need our
                  help with your user account, have questions about how to use
                  Lavanda tools, any feedback or are experiencing technical
                  difficulties, please do not hesitate to contact us.
                </p>
              </div>

              <div className={"column"}>
                <div className={"contact-items"}>
                  <p className={"subtitle"}>
                    Plain email is the best way to contact us.
                  </p>
                  <h2 className={"is-size-3"}>info@getlavanda.com</h2>
                  <hr />
                  <p className={"subtitle"}>
                    ...unless you would like a product demo, in which case:
                  </p>
                  <Link
                    to="/book-a-demo"
                    className={"button is-primary is-medium"}
                  >
                    <strong>Request A Demo</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
