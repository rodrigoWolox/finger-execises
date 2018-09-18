import React, { Component } from 'react';

import UserRow from './components/UserRow';

import logo from './logo.svg';
import './styles.css';
import { DATA } from './constants';

class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {DATA.map(user => <UserRow user={user} />)}
      </div>
    );
  }
}

export default Dashboard;
