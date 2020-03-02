import React, { Component } from "react"
export default class Calendly extends Component
{ 
  componentDidMount() {
  }

  componentWillMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
  }

  render = () => {
    return ( 
      <div>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/book-lavanda/discovery-call?primary_color=0989d4"
            style={{ position: 'relative', minWidth: '320px', height: '750px' }}
             />
        </div>
      </div>
    )
  }
}