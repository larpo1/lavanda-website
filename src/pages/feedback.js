import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const FeedbackPage = () => (
  <Layout>
    <SEO title="We love feedback." />
    <div className={"hero is-fullheight bg-blob"}>
    <Nav />
      <div className={"hero-body"}>
        <div className={"container has-margin-top-100"}>
          <div className={"columns"}>
            <div className={"column"}>
              <h1 className={"title"}>Feedback</h1>
              <p className={"subtitle"}>
                We welcome and encourage all constructive feedback, so please
                feel free to get in touch with us to highlight improvements to
                our service or website by contacting us using the chat icon in
                the bottom right of your screen. All messages will be reviewed
                and responded to as swiftly as possible.
              </p>
            </div>

            <div className={"column"}>
            <h1 className={"title"}>Technical Support</h1>
              <p className={"subtitle"}>
                  The best way to receive technical support is in-app via the in-app chat in the bottom right corner of the screen. Please log into you account and contact us there. We will usually respond on the same day.
              </p>
              <h1 className={"title has-margin-top-30"}>Contact Us</h1>
              <p className={"subtitle"}>
                Plain email is the best way to contact us.
              </p>
              <h2 className={"is-size-3"}>info@getlavanda.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default FeedbackPage
