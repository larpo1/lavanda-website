import React, { Component } from "react"
export default class Calendly extends Component
{ 
  componentDidMount() {
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render = () => {
    return ( 
      <div style={{ position: 'relative', minWidth: '320px', height: '600px'}}>
      <iframe
        style={{ height: "800px" }}
        title="calendly-widget"
        src="https://calendly.com/book-lavanda/discovery-call?primary_color=0989d4"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>

    )
  }
}