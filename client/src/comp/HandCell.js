import React, { Component } from 'react';

class HandCell extends Component {

  constructor (props) {
    super(props);

    this.className = `hand-cell p${this.props.player}`;

    this.imageClassName = `p${this.props.player}${this.props.profile.name}`;

    this.style = this.props.style;

  }

  // componentWillMount() {
  //   this.imageClassName = `p${this.props.player}${this.props.profile.name}`;
  // }

  componentWillReceiveProps(newProps){
    this.className = `hand-cell p${newProps.player}`;
    this.imageClassName = `p${newProps.player}${newProps.profile.name}`;
    this.style = newProps.style;
  }

  handleClick() {
    console.log("tile clicked");
  }

  render() {
    // console.log("handcell renders", this.imageClassName);
    return (
      <div className={this.className} onClick={this.handleClick.bind(this)} style={this.style}>
        <div className={this.imageClassName}></div>
      </div>
    );
  }
}

export default HandCell;
