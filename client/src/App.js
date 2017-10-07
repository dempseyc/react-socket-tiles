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
      board: {},
      player1: {},
      player2: {},
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

  componentWillMount () {
    this.setState({board: buildBoard(15)});
    this.setState({player1: buildPlayer()});
    this.setState({player2: buildPlayer()});
  }

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
