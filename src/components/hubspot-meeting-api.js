import React, { Component } from "react"

export default class APIMeet extends Component
{ 
  componentDidMount(){
    const script = document.createElement("script");
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.async = true;
    document.body.appendChild(script);
    }
  
    render = () => ( 
      <div className="container">
      <div
        className={"meetings-iframe-container"}
        data-src="https://app.hubspot.com/meetings/david1062/discuss-api-access?embed=true"
      />
    </div>
    )
  }
