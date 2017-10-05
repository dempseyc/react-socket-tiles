import React, { Component } from 'react';
import HandCell from './HandCell.js';


// hand is interesting, should change its id and key with the player num, so maybe -0 -1 -2
class Hand extends Component {
  constructor(props) {
    super(props);

    this.array = [];

    for (let c = 0; c < this.props.num; c++) {
      this.array.push(`h-${c}`);
    }

    this.state = {
      player: this.props.player,
      held: this.props.held
    }

    this.tiles = this.array.map((tile,i) => {
      return <HandCell key={i} id={this.array[i]} className="hand-cell">{this.state.held[i]}></HandCell>
    })
  }


  render() {
    return (
      <div className="hand grid">
        {this.tiles}
      </div>
    );
  }
}

export default Hand;
