import React, { Component } from 'react';

import './App.css';

import { buildBoard } from './game-init.js';
import { buildPlayer } from './game-init.js';
import Title from './comp/Title.js';
import ShowHand from './comp/ShowHand.js';
import ShowBoard from './comp/ShowBoard.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      whosturn: 1,
      board: buildBoard(15),
      player1: buildPlayer(),
      player2: buildPlayer(),
    }

    console.log(this.state);
  }

  switchPlayers () {
    if (this.state.player===1) {
      this.setState({whosturn: 2});
    } else {
      this.setState({whosturn: 1});
    }
  }

  // componentWillMount () {
  //   this.setState({board: });
  //   this.setState({player1: });
  //   this.setState({player2: buildPlayer()});
  // }

  render() {
    return (
      <div className="App">

        <Title />

        <ShowHand
          num={4} player={this.state.whosturn} held ={this.state.player1.hand}
        />
        <ShowBoard
          rows={15} columns={15} bases={this.state.board.bases}
        />
      </div>
    );
  }
}

export default App;
