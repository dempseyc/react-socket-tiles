import React, { Component } from 'react';
import Cell from './Cell.js';


class Board extends Component {
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
      <div className="board grid">
        {this.matrix.map((row, ri) => (
          row.map(cellId => <Cell key={cellId} id={cellId} />
            )
        ))}
      </div>
    );
  }
}

export default Board;
