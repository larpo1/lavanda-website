import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import "../../static/styles/main.scss";
import logo from "../../static/img/lavanda-logo.svg";

const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? "is-active" : ""}`}
    role="button"
    onKeyDown={props.toggleMenu}
    tabIndex={0}
  >
    <span />
    <span />
    <span />
  </div>
);

class Nav extends React.Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    let position = window.scrollY;
    const nav = document.querySelector("#navbar");
    if (position <= 200) nav.classList.remove("filled");
    else nav.classList.add("filled");
  };

  state = {
    activeMenu: false
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {

    const { data } = this.props;
    const { edges: pages } = data.allMarkdownRemark;
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
              {/* Product Section */}

              <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/"
                  className={
                    "navbar-link is-uppercase is-family-secondary has-text-weight-medium"
                  }
                >
                  Product
                </Link>
                <div className={"navbar-dropdown"}>
                  {pages &&
                    pages
                    .filter(({node: page}) => (page.frontmatter.templateKey === "feature-page"))
                    .map(({ node: page }) => (
                      <Link
                        key={page.fields.slug}
                        to={page.fields.slug}
                        className={"navbar-item"}
                      >
                        {page.frontmatter.title}
                      </Link>
                    ))}
                </div>
              </div>

              {/*  Solutions section */}

              <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/"
                  className={
                    "navbar-link is-uppercase is-family-secondary has-text-weight-medium"
                  }
                >
                  Solutions
                </Link>
                <div className={"navbar-dropdown"}>
                  {pages &&
                    pages
                    .filter(({node: page}) => (page.frontmatter.templateKey === "solution-page"))
                    .map(({ node: page }) => (
                      <Link
                        key={page.fields.slug}
                        to={page.fields.slug}
                        className={"navbar-item"}
                      >
                        For {page.frontmatter.title}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Company Section */}

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
                  <Link to="/about" className={"navbar-item"}>
                    About Lavanda
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
              {/* Company Section */}

              <div className={"navbar-item has-dropdown is-hoverable"}>
                <Link
                  to="/blog"
                  className={
                    "navbar-link is-uppercase is-family-secondary has-text-weight-medium"
                  }
                >
                  Resources
                </Link>

                <div className={"navbar-dropdown"}>
                  <Link to="/blog" className={"navbar-item"}>
                    Blog
                  </Link>
                  <a href="https://help.lavanda.app" target="_blank" className={"navbar-item"}>
                    Help Center
                  </a>
                </div>
              </div>
            

              <div className={"navbar-item"}>
                <Link
                  to="lp/covid-19-survival-for-property-managers"
                  className={
                    "is-uppercase is-family-secondary has-text-weight-medium has-text-danger"}>
                  COVID-19
                </Link>
              </div>
              

            </div>

            <div className={"navbar-end"}>
              <div className={"navbar-item"}>
                <div className={"buttons"}>
                  <Link to="/book-a-demo" className={"button is-primary"}>
                    <strong>Talk to Us</strong>
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
    );
  }
}
export default () => (
  <StaticQuery
    query={graphql`
      query PagesLinks {
        allMarkdownRemark(
          sort: { fields: frontmatter___category }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Nav data={data} count={count} />}
  />
);
