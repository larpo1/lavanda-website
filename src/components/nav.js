import { Link } from "gatsby"
import React from "react"
import "../../static/styles/main.scss"
import logo from "../../static/img/logo.svg"

const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </div>
)

export default class Nav extends React.Component {

componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
    let position = window.scrollY
    const nav = document.querySelector('#navbar');
    if(position <= 200) nav.classList.remove('filled'); else nav.classList.add('filled');
  }

  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return (
      <nav
        className={"navbar is-fixed-top"}
        role="navigation"
        aria-label="main navigation"
        id="navbar"
      >
        <div className="container">
          <div className={"navbar-brand"}>
            <Link to="/" className={"navbar-item"}>
              <div className={"logo"}>
                <img alt={"Logo"} src={logo} />
              </div>
            </Link>
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>

          <div
            id="lavandaNav"
            className={`navbar-menu ${
              this.state.activeMenu ? "is-active" : ""
            }`}
          >
            <div className={"navbar-end"}>
              <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/"
                  className={ "navbar-link is-uppercase is-family-secondary has-text-weight-medium" }>
                  Solutions
                </Link>

                <div className={"navbar-dropdown"}>
                  <Link to="/for/property-managers" className={"navbar-item"}>
                    For property managers
                  </Link>
                  <Link to="/for/serviced-apartments" className={"navbar-item"}>
                    For serviced apartments
                  </Link>
                  <Link to="/for/residential-assets" className={"navbar-item"}>
                    For residential assets
                  </Link>
                  <Link to="/for/student-housing" className={"navbar-item"}>
                    For student housing
                  </Link>
                  <hr className={"navbar-divider"} />
                  <Link to="/features/developer-api" className={"navbar-item"}>
                    For integration partners
                  </Link>
                </div>
              </div>

              {/* <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/"
                  className={
                    "navbar-link is-uppercase is-family-secondary has-text-weight-medium"
                  }
                >
                  Features
                </Link>

                <div className={"navbar-dropdown"}>
                  <p className={"heading has-padding-left-10"}>Growth</p>
                  <Link to="/" className={"navbar-item"}>
                    CRM
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Integrated Valuations
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Web Sales Toolkit
                  </Link>
                  <hr className={"navbar-divider"} />
                  <p className={"heading has-padding-left-10"}>Distribution</p>
                  <Link to="/" className={"navbar-item"}>
                    Channel Manager
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Corporate Travel
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Lavanda Affiliate Network
                  </Link>
                  <hr className={"navbar-divider"} />
                  <p className={"heading has-padding-left-10"}>Operations</p>
                  <Link to="/" className={"navbar-item"}>
                    Multi-Calendar
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Integrated Tickets
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Task Automation
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Workflow Automation
                  </Link>
                  <hr className={"navbar-divider"} />
                  <p className={"heading has-padding-left-10"}>
                    Guest Experience
                  </p>
                  <Link to="/" className={"navbar-item"}>
                    Direct Booking Website
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Unified Inbox
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Automated Guest Messaging
                  </Link>
                  <Link to="/" className={"navbar-item"}>
                    Guest Interface
                  </Link>
                </div>
              </div> */}

              <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/"
                  className={
                    "navbar-link is-uppercase is-family-secondary has-text-weight-medium"
                  }
                >
                  Company
                </Link>

                <div className={"navbar-dropdown"}>
                  <Link to="/blog" className={"navbar-item"}>
                    Blog
                  </Link>
                  <Link to="/careers" className={"navbar-item"}>
                    Work at Lavanda
                  </Link>
                  <Link to="/contact" className={"navbar-item"}>
                    Contact
                  </Link>
                  <hr className={"navbar-divider"} />
                  <Link to="/feedback" className={"navbar-item"}>
                    Report an issue
                  </Link>
                </div>
              </div>
            </div>

            <div className={"navbar-end"}>
              <div className={"navbar-item"}>
                <div className={"buttons"}>
                  <Link to="/book-a-demo" className={"button is-primary"}>
                    <strong>Request A Demo</strong>
                  </Link>
                  <Link to="/apps" className={"button is-light"}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
