import React, { Component } from 'react';

class Cell extends Component {

  constructor(props) {
    super(props);
    this.location = props.id;
  }

  state = {
    occupied: false,
    occupiedby: {},
    hoveredbyplayer: false,
    bases: ["","","",""]
  }

  handleClick() {

  }

  render() {
    let className = "cell";

    return (
      <div id={this.props.id} className={className} onClick={this.handleClick.bind(this)}>
      </div>
    );
  }
}

export default Cell;
