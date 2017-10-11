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
      whosturn: "1",
      playerup: {},
      board: buildBoard(15),
      player1: buildPlayer(1),
      player2: buildPlayer(2),
    }

    this.switchPlayers = this.switchPlayers.bind(this);
    this.rotateTiles = this.rotateTiles.bind(this);

  }

  switchPlayers () {
    if (this.state.whosturn !== "2") {
      this.setState({
        whosturn: "2",
        playerup: this.state.player2
      });
    } else {
      this.setState({
        whosturn: "1",
        playerup: this.state.player1
      });
    }
  }

  rotateTiles () {
    let tiles = this.state.playerup.hand;
    let rotation = this.state.playerup.tilerotation;
    let player = this.state.playerup;

    function rotateString(str) {
      let len = str.length;
      let last = str.substring(len-1);
      let first = str.substring(0,len-1);
      return last + first;
    }

    tiles.forEach(tile => {
      let tilecode = tile.rotcode;
      tile.rotcode = rotateString(tilecode);
    })


    let newRotate = rotation+90;
    if (newRotate===360) {newRotate = 0};
    player.tilerotation = newRotate;
    this.setState({playerup: player});
  }

  componentWillMount () {
    this.setState({playerup: this.state.player1});
  }

  render() {
    // console.log(this.state.whosturn+" whosturn");
    // console.log(this.state.player2.hand);
    return (
      <div className="App">

        <Title />
        <button className="player-switch" onClick={this.switchPlayers}>p{this.state.whosturn}
        </button>
        <ShowHand
          num={4} player={this.state.whosturn} held={this.state.playerup.hand} rotate={this.rotateTiles} tilerotation={this.state.playerup.tilerotation}
        />
        <ShowBoard
          rows={15} columns={15} bases={this.state.board.bases}
        />
      </div>
    );
  }
}

export default App;
