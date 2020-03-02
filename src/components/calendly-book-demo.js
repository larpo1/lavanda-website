import React, { Component } from "react"
import { InlineWidget } from "react-calendly";

export default class Calendly extends Component
{ 
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render = () => {
    return ( 
      <div className="container">
        <InlineWidget url="https://calendly.com/book-lavanda/discovery-call?primary_color=0989d4" />
      </div>
    )
  }
}