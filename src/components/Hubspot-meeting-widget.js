import React, { Component } from "react"

export default class Hubspot extends Component
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
        data-src="https://app.hubspot.com/meetings/sam-symons/demo-call?embed=true"
      />
    </div>
    )
  }