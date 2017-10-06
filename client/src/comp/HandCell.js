import React, { Component } from 'react';

class HandCell extends Component {

  constructor (props) {
    super(props);

    this.state = {
      id: props.id,
      profile: props.profile,
      value: props.value
    }
  }

  handleClick() {

  }

  render() {
    let className = "hand-cell";
    let prof = this.state.profile[Object.keys(this.state.profile)[0]];

    return (
      <div id={this.state.id} className={className} onClick={this.handleClick.bind(this)}>
        {prof}
      </div>
    );
  }
}

export default HandCell;
