import React from "react"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import Calendly from "../components/calendly-book-demo"
import Layout from "../components/Layout"

const BookMeetingPage = () => (
  <Layout>
    <SEO title="Book a demo meeting with Lavanda Sales." />
    <Nav />
    <div className={"has-margin-top-100 has-margin-bottom-100"}>
      <Calendly />
    </div>
  </Layout>
)

export default BookMeetingPage
