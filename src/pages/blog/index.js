import React from 'react'

import Layout from '../../components/Layout'
import Nav from '../../components/Nav'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Nav />
        <section className="section has-margin-top-100">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
