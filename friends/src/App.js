import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';  // design the state object - w props; build reducers w/ dummy data; create actions 
import FriendsList from './containers/FriendsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hiii world:)</h1>
    	<FriendsList />
      </div>
    );
  }
}

export default App;
