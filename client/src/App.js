import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// also here
// import { subscribeToTimer } from './api.js';
import { drawHand } from './manage-hand.js';
// import { playerAction } from './player-action.js';
import { buildDeck } from './game-meta.js';
import Title from './comp/Title.js';
import Hand from './comp/Hand.js';
import Board from './comp/Board.js';

class App extends Component {
  constructor(props) {
    super(props);
    // subscribeToTimer((err, timestamp) => this.setState({
    //   timestamp
    // }));
    this.state = {
      player1deck: buildDeck(),
      player2deck: buildDeck(),
      player1hand: [],
      player2hand: [],
      boardTiles: [],
      player: 1
    }


    console.log(this.state);
  }

  switchPlayers () {
    if (this.state.player===1) {
      this.setState({player: 2});
    } else {
      this.setState({player: 1});
    }
  }

  componentWillMount() {
    this.setState({player2hand: drawHand(this.state.player2deck,4)});
    this.setState({player1hand: drawHand(this.state.player1deck,4)});
  }

  render() {
    let hand = [];
    if (this.state.player===1) {
      hand = this.state.player1hand;
      console.log(hand + " hand");
    } else {
      hand = this.state.player2hand;
      console.log(hand + " hand");
    }
    return (
      <div className="App">

        <Title />
        <Hand
          num={4} player={this.state.player} held={hand}
        />
        <Board
          rows={15} columns={15} money={5}
        />
      </div>
    );
  }
}

export default App;
