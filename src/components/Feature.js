import React from "react";
import { Link } from "gatsby";
import "../../static/styles/main.scss";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export default props => (
  <section className={"feature-item"}>
    <div className={"container"}>
      <div className={"columns is-vcentered " + props.imageAlign}>
        <div className={"column has-padding-50 feature-image " + props.imageClasses}>
          <PreviewCompatibleImage
            objectFit="contain"
            imageInfo={{
              image: props.featureImage,
              alt: props.titleContent
            }}
          />
        </div>
        <div className={"column has-padding-50"}>
          <div className={"feature-content has-text-centered-mobile"}>
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
  </section>
);
