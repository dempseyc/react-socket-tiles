import React, { Component } from 'react';
import HandCell from './HandCell.js';


// hand is interesting, should change its id and key with the player num, so maybe -0 -1 -2
class ShowHand extends Component {
  constructor(props) {
    super(props);

    this.array = [];

    //  array only fills in ids
    for (let c = 0; c < this.props.num; c++) {
      this.array.push(`h-${c}`);
    }

    this.state = {
      rotation: this.props.tilerotation,
      style: {
        transform: `rotate(${this.props.tilerotation}deg)`,
        transition: "transform 0.5s"
      }
    }

    this.getTiles = this.getTiles.bind(this);

  }

  getTiles (props,state) {
    let style = this.state.style;
    let held = props.held.map((tile,i) => {
      let prof = tile;
      return <HandCell key={i} player={props.player} profile={prof} style={style} />
    })
    return held;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      rotation: newProps.tilerotation,
      style: {
        transform: `rotate(${newProps.tilerotation}deg)`,
        transition: "transform 0.5s"
      }
    });

    console.log(newProps.held);
  }

  render() {
    // console.log(this.state.heldTiles);
    return (
      <div className="hand-grid">
        <button className="rotate-button" onClick={this.props.rotate}>{this.state.rotation}º
        </button>
        {this.getTiles(this.props)}
      </div>
    )
  }
}



export default ShowHand;

