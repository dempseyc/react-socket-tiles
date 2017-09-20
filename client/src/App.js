import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
import Title from './comp/Title';
import Hand from './comp/Hand';
import Board from './comp/Board';

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
