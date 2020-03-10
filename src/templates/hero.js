import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Nav from "../components/Nav"
import ReactRotatingText from "react-rotating-text"
import { Parallax } from 'react-scroll-parallax';

export default () => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <section className={"hero home is-fullheight bg-blob"}>
        <Nav />
        <div className={"hero-body has-margin-top-100"}>
          <div className={"container has-text-centered-mobile"}>
            <div className={"hero-text"}>
              <h1 className={"title is-size-1-tablet has-margin-bottom-35"}>
                {data.site.siteMetadata.title}
              </h1>
              <h2 className={"subtitle text-rotator"}>
                Award-winning SaaS platform for
                <br />{" "}
                <ReactRotatingText
                  items={[
                    "residential multi-family and BTR.",
                    "serviced apartments.",
                    "student accomodation (PBSA).",
                    "vacation rentals.",
                    "property management."
                  ]}
                />
              </h2>
              <Link to="/book-a-demo" className={"button is-primary is-medium"}>
                <strong>Request A Demo</strong>
              </Link>
            </div>
            <Parallax y={[-50, 50]}>
              <img src={HomeMocks} alt="PMS" className={"homepage-mocks"} />
            </Parallax>
          </div>
        </div>

        <div className={"hero-foot"}>
          <div className={"container has-text-centered-mobile"}>
            <img src={Awards} className="awards-small" alt="awards" />
          </div>
        </div>
      </section>
    )}
  />
);
