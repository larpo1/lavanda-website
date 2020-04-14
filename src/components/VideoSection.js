import React from "react";
import { Link } from "gatsby";
import "../../static/styles/main.scss";

export default props => (
  <section className={"hero is-fullheight is-dark wave-container"} id="video">
    <div className={"hero-body"}>
      <div className={"container has-text-centered"}>
        <h1 className={"title is-size-1 has-margin-bottom-50"}>
          {props.title}
        </h1>
        {props.topText && props.topText.length ? (
          <p className="subtitle is-size-4-tablet has-margin-top-50 column is-half is-offset-one-quarter">
            {props.topText}
          </p>
        ) : null}
        <iframe
          className="video-frame"
          src={props.vimeoURL}
          title="Lavanda PMS Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        <div className="has-margin-top-50 column is-half is-offset-one-quarter">
          {props.bottomText && props.bottomText.length ? (
            <p className="subtitle is-size-4-tablet ">{props.bottomText}</p>
          ) : null}
          <Link to="/book-a-demo" className={"button is-primary is-medium"}>
            Talk To Us
          </Link>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f5f5f5"
        fillOpacity="0.6"
        d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
      <path
        fill="#f5f5f5"
        fillOpacity="0.2"
        d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,213.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
      <path
        fill="#f5f5f5"
        fillOpacity="1"
        d="M0,192L80,213.3C160,235,320,277,480,272C640,267,800,213,960,192C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </section>
);
