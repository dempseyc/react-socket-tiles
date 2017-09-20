import React, { Component } from 'react';
import HandCell from './HandCell.js';

// hand is interesting, should change its id and key with the player num, so maybe -0 -1 -2
class Hand extends Component {
  constructor(props) {
    super(props);

    this.matrix = [];
    for (let r = 0; r < this.props.rows; r++) {
      let row = [];
      for (let c = 0; c < this.props.columns; c++) {
        row.push(`${r}-${c}`);
      }
      this.matrix.push(row);
    }
  }
  render() {
    return (
      <div className="hand grid">
        {this.matrix.map((row, ri) => (
          row.map(cellId => <HandCell key={cellId} id={cellId} className="hand-cell" />
          )
        ))}
      </div>
    );
  }
}

export default Hand;
