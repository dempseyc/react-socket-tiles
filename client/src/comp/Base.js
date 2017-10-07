import React, { Component } from 'react';

class Base extends Component {

  constructor(props) {
    super(props);

    this.location = this.props.location;

    this.state = {
      owned: false,
      ownedBy: {},
      gridcells: ["",""],
    }
  }

  render() {
    let className = "cell";

    return (
        <div className="base">{this.location}</div>
    );
  }
}

export default Base;
