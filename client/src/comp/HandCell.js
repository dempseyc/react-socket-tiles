import React, { Component } from 'react';

class HandCell extends Component {

  constructor (props) {
    super(props);

    this.imageClassName = `p${this.props.player}${this.props.profile.name}`;
  }

  componentWillMount() {
    this.imageClassName = `p${this.props.player}${this.props.profile.name}`;
  }

  componentWillReceiveProps(){
    this.imageClassName = `p${this.props.player}${this.props.profile.name}`;
  }

  handleClick() {
    console.log("tile clicked");
  }

  render() {
    let className = `hand-cell p${this.props.player}`;

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
        <div className={this.imageClassName}></div>
      </div>
    );
  }
}

export default HandCell;
