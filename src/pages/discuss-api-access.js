import React from "react"
import Nav from "../components/Nav"
import SEO from "../components/seo"
import HubspotMeeting from "../components/hubspot-meeting-api"
import Layout from "../components/Layout"

const BookMeetingPage = () => (
  <Layout>
    <SEO title="Book a demo meeting with Lavanda Sales." />
    <Nav />
    <div className={"has-margin-top-50"}>
      <HubspotMeeting />
    </div>
  </Layout>
)

export default BookMeetingPage
