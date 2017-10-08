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

    this.switchPlayers=this.switchPlayers.bind(this);

  }

  switchPlayers () {
    // console.log(this.state.whosturn);
    if (this.state.whosturn===1) {
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
    // console.log(this.state.player1.hand);
    // console.log(this.state.player2.hand);
    let held;
    if (this.state.whosturn===1) {
      held = this.state.player1.hand;
    } else {
      held = this.state.player2.hand;
    }

    return (
      <div className="App">

        <Title />
        <div className="player-switch" onClick={this.switchPlayers}>
        </div>
        <ShowHand
          num={4} player={this.state.whosturn} held={held}
        />
        <ShowBoard
          rows={15} columns={15} bases={this.state.board.bases}
        />
      </div>
    );
  }
}

export default App;
