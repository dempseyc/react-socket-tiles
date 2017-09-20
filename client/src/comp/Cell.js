import React, { Component } from 'react';

class Cell extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {

  }

  render() {
    let className = "cell";

    return (
      <div key={this.props.key} id={this.props.id} className={className} onClick={this.handleClick.bind(this)}>
      </div>
    );
  }
}

export default Cell;
