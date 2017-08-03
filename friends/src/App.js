import React, { Component } from 'react';
import './App.css';  
import FriendsList from './containers/FriendsList';
import AddFriend from './containers/AddFriend';
//BASIC PROJECT WORKFLOW >> design the state object - w/ props >> build reducers w/ dummy data >> create actions 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hiii world:)</h1>
    	<AddFriend />
    	<FriendsList />
      </div>
    );
  }
}

export default App;
