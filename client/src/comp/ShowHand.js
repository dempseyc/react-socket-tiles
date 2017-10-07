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
      player: this.props.player,
      held: this.props.held,
      tiles: []
    }

    this.heldTiles = this.state.held.map((tile,i) => {
      let prof = tile;
      return <HandCell key={i} id={tile} profile={prof} />
    })
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
