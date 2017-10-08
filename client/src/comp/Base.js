import React, { Component } from 'react';

class Base extends Component {

  constructor(props) {
    super(props);

    this.location = this.props.location;
    this.style= {
      width : "10px",
      height: "10px",
      background: "#008",
      top: 30*this.location.split('-')[0]-5,
      left: 30*this.location.split('-')[1]-5
      }
    this.state = {
      owned: false,
      ownedBy: {},
      gridcells: ["",""],
    }
  }

  render() {
    let className = "base";

    return (
        <div className={className} style={this.style}>{this.location}</div>
    );
  }
}

export default Base;
