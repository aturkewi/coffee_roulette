import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      count: 0
    }
    this.users = this.users.bind(this);
  }
  
  users(){
    return fetch('/api/usersCount', {
      accept: 'application/json'
    }).then(res => res.json())
      .then(json => this.setState(json))
  }

  componentWillMount(){
    this.users()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {`There are currently ${this.state.count} people in the DB`}
        </p>
      </div>
    );
  }
}

export default App;
