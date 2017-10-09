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

    this.getTiles = this.getTiles.bind(this);

    this.heldTiles = this.getTiles(this.props);

    this.state = {
      rotation: this.props.tilerotation
    }
  }

  getTiles (props) {
    let held = props.held.map((tile,i) => {
      let prof = tile;
      return <HandCell key={i} player={props.player} profile={prof} />
    })
    return held;
  }


  componentWillReceiveProps(newProps) {
    this.heldTiles = this.getTiles(newProps);
    this.setState({rotation: newProps.tilerotation});
    // console.log(newProps.held);
  }

  render() {
    // console.log("showhand rendered")
    return (
      <div className="hand-grid">
        <button className="rotate-button" onClick={this.props.rotate}>{this.state.rotation}º
        </button>
        {this.heldTiles}
      </div>
    )
  }
}



export default ShowHand;

