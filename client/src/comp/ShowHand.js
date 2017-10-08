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

    this.getTiles = function () {
      let held = this.props.held.map((tile,i) => {
        let prof = tile;
        return <HandCell key={i} player={this.props.player} profile={prof} />
      })
      return held;
    }

    this.heldTiles = this.getTiles();

    // this.getTiles = this.getTiles.bind(this);

  }

  componentWillReceiveProps() {
    this.heldTiles = this.getTiles();
    console.log(this.props.held);
  }

  render() {
    return (
      <div className="hand-grid">
        {this.heldTiles}
      </div>
    )
  }
}



export default ShowHand;

