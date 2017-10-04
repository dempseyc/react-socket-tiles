import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// also here
import { subscribeToTimer } from './api.js';
// import { playerAction } from './player-action.js';
import Title from './comp/Title.js';
import Hand from './comp/Hand.js';
import Board from './comp/Board.js';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet',
    users: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <p className="App-intro">
        This is the timer value: {this.state.timestamp}
        </p>
        <Title />
        <Hand
          rows={1} columns= {4}
        />
        <Board
          rows={15} columns={15} money={5}
        />
      </div>
    );
  }
}

export default App;
