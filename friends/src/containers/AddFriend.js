import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleNameChange = (e) => {              // arrow f(x) will bind 'this' to the calling context;
    this.setState({name: e.target.value}) // in this particular case 'this' = 'AddFriend' class
  }
  handleAgeChange = (e) => {
    this.setState({age: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  newFriend = (e) => {
    e.preventDefault(); // prevents default behavior of button to execute. In this case, we are rendering an SPA; 
    const friend = {    // so when user clicks button we don't want...?
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.dispatch(addFriend(friend)) 
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <input onChange={this.handleNameChange} type='text' placeholder='Name' value={this.state.name} />

          <input onChange={this.handleAgeChange} type='number' placeholder='Age' value={this.state.age} />

          <input onChange={this.handleEmailChange} type='email' placeholder='Email' value={this.state.email} />

          <button onClick={this.newFriend} type="submit"> Add Friend! </button>  
        </form>
      </div>

    )
  }
}

export default connect()(AddFriend)