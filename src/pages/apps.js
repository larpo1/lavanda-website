import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const LoginPage = () => (
  <Layout>
    <SEO title="Sign in to Lavanda apps" />
    <div className={"hero is-fullheight bg-blob"}>
      <Nav />
      <div className={"hero-body"}>
        <div className={"container has-margin-top-100"}>
          <div className={"container has-text-"}>
            {/* <h1 className={"title"}>Sign In</h1> */}
            <div className={"columns"}>
              <div className={"column"}>
                <div className={"card"}>
                  <div className={"card-content"}>
                    <p className={"title"}>PMS</p>
                    <p className={"subtitle"}>
                    for <strong>property managers</strong> and <strong>serviced
                      apartment operators</strong>. Our revolutionary, next-generation property management system (PMS).
                    </p>
                  </div>
                  <footer className={"card-footer"}>
                    <a
                      target="_blank" rel="noopener noreferrer" href="https://pms.lavanda.app"
                      className={"card-footer-item"}
                    >
                      Sign In
                    </a>
                    <Link target="_blank" rel="noopener noreferrer" to={"/book-a-demo"} className={"card-footer-item"}>
                      Book A Demo
                    </Link>
                  </footer>
                </div>
              </div>
              <div className={"column"}>
                <div className={"card"}>
                  <div className={"card-content"}>
                    <p className={"title"}>Residential</p>
                    <p className={"subtitle"}>
                      for <strong>multifamily asset owners and operators</strong>. Track and manage the performance of your residential property portfolio on the short-term rental markets. 
                    </p>
                  </div>
                  <footer className={"card-footer"}>
                    <a
                      target="_blank" rel="noopener noreferrer" href="https://residential.lavanda.app"
                      className={"card-footer-item"}
                    >
                      Sign In
                    </a>
                    <Link target="_blank" rel="noopener noreferrer" to={"/book-a-demo"} className={"card-footer-item"}>
                      Book A Demo
                    </Link>
                  </footer>
                </div>
              </div>
              <div className={"column"}>
                <div className={"card"}>
                  <div className={"card-content"}>
                    <p className={"title"}>Home</p>
                    <p className={"subtitle"}>
                      for <strong>homeowners</strong> and <strong>independent landlords</strong>. Access multi-channel short-term rentals with a fully managed service via a Lavanda Accredited Partner.
                    </p>
                  </div>
                  <footer className={"card-footer"}>
                    <a
                      target="_blank" rel="noopener noreferrer" href="https://home.lavanda.app"
                      className={"card-footer-item"}
                    >
                      Sign In
                    </a>
                    <Link target="_blank" rel="noopener noreferrer" to={"/book-a-demo"} className={"card-footer-item"}>
                      Book A Demo
                    </Link>
                  </footer>
                </div>
              </div>
              <div className={"column"}>
                <div className={"card"}>
                  <div className={"card-content"}>
                    <p className={"title"}>Agent</p>
                    <p className={"subtitle"}>
                      for <strong>real estate agents</strong>. Conduct valuations and earn additional fee income for your agency and clients from instructions awaiting sale.
                    </p>
                  </div>
                  <footer className={"card-footer"}>
                    <a
                      target="_blank" rel="noopener noreferrer" href="https://agent.lavanda.co.uk"
                      className={"card-footer-item"}
                    >
                      Sign In
                    </a>
                    <Link target="_blank" rel="noopener noreferrer" to={"/book-a-demo"} className={"card-footer-item"}>
                      Book A Demo
                    </Link>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LoginPage
