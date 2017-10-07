import React, { Component } from 'react';
import BoardCell from './BoardCell.js';
import Base from './Base.js';


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
    this.bases = this.props.bases;
  }

  // other mentions of lifecycle functions

  render() {
    return (
      <div className="board-grid">
        {this.matrix.map((row, ri) => (
          row.map(cellId => <BoardCell key={cellId} id={cellId}>
            </BoardCell>
            )
        ))}
        <div className="base-container">
        {this.bases.map((base) =>
          <Base location={base}>
            </Base>
        )}
        </div>
      </div>
    );
  }
}

export default Board;
