import { Link } from "gatsby"
import React from "react"
import "../../static/styles/main.scss"
import logo from "../../static/img/logo.svg"
import iconTwitter from "../../static/img/icon-twitter.svg"
import iconLinkedin from "../../static/img/icon-linkedin.svg"
import iconInstagram from "../../static/img/icon-instagram.svg"

const Footer = () => (
  <footer>
    <section className={"hero is-medium is-light"}>
      <div className={"hero-body"}>
        <div className="container">
        <div className={"columns"}>
          <div className={"column"}>
          <div className={"links"}>
              <ul>
                <li>
                  <Link to="/contact" title={"Contact Us"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" title={"Contact Us"}>
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" title={"Privacy Policy"}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms/terms" title={"Terms Of Use"}>
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"column has-text-centered"}>
          <Link to="/" title={"Lavanda"}>
              <img alt={"Logo"} className={"footer-logo"} src={logo} />
            </Link> 
          </div>
          <div className={"column has-text-right"}>
            <div className={"social"}>
              <a
                href="https://twitter.com/getlavanda"
                target={"_blank"}
                title={"Twitter"}
              >
                <img alt={"Twitter"} src={iconTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/company/lavanda"
                target={"_blank"}
                title={"LinkedIn"}
              >
                <img alt={"LinkedIn"} src={iconLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/getlavanda/"
                target={"_blank"}
                title={"Instagram"}
              >
                <img alt={"Instagram"} src={iconInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className={"copyright"}>
          <p>Lavanda is a member of ARLA and registered with the Property Redress Scheme.</p>
          <p> 
            Copyright {new Date().getFullYear()}, {` `}{" "}
            <a href="https://getlavanda.com" title={"Lavanda"}>
              Lavanda</a>. All rights reserved.
          </p>
        </div>
      </div>
      </div>
    </section>
  </footer>
)

export default Footer
