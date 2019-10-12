import React from "react"
import { Link } from "gatsby"
import "../../static/styles/main.scss"

export default props => (
  <section className={"feature-item"}>
    <div className={"container"}>
      <div className={"columns " + props.imageAlign}>
        <div className={"column first"}>
          <div className={"Aligner"}>
            <img
              src={props.featureImage}
              className={"feature-image Aligner-item"}
              alt="Alt text for this one"
            />
          </div>
        </div>
        <div className={"column"}>
          <div className={"Aligner"}>
            <div className={"Aligner-item feature-content has-text-centered-mobile"}>
              <h2 className={"title"}>{props.titleContent}</h2>
              <p className={"subtitle"}>
                {props.textContent}
              </p>
              { props.linkTarget.length > 0 &&
              <Link to={props.linkTarget} className={"button is-secondary"}>
                Learn More &#10511;
              </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
