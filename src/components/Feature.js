import React from "react";
import { Link } from "gatsby";
import "../../static/styles/main.scss";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

export default props => (
  <section className={"feature-item"}>
    <div className={"container"}>
      <div className={"columns " + props.imageAlign}>
        <div className={"column first"}>
          <div className={"Aligner"}>
            <div style={{ width: '100%' }}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: props.featureImage,
                  alt: props.titleContent
                }}
              />
            </div>
          </div>
        </div>
        <div className={"column"}>
          <div className={"Aligner"}>
            <div
              className={
                "Aligner-item feature-content has-text-centered-mobile"
              }
            >
              <h2 className={"title"}>{props.titleContent}</h2>
              <p className={"subtitle"}>{props.textContent}</p>
              {props.linkTarget && props.linkTarget.length ? (
                <Link to={props.linkTarget} className={"button is-secondary"}>
                  Learn More &#10511;
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
