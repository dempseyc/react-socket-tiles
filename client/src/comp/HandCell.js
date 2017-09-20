import React, { Component } from 'react';

class HandCell extends Component {

  handleClick() {

  }

  render() {
    let className = "hand-cell";

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
      </div>
    );
  }
}

export default HandCell;
