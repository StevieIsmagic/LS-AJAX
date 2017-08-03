import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    
    this.state = { // keeps track of all input fields
      name: '',
      age: '',
      email: ''
    }
    this.handleAgeChange = this.handleAgeChange.bind(this); // (1) explicit binding of method to 'this', AKA 'AddFriend' Class
  }

  handleNameChange = (e) => {              // arrow f(x) will automatically bind 'this' to the calling context;
    this.setState({name: e.target.value}); // in this particular case 'this' = 'AddFriend' class
  }                                       
  handleAgeChange(e) {                    // will require explicit 'this' binding (1) inside constructor; AKA line 14  
    this.setState({age: e.target.value}); // compare handleAgeChange() vs handleNameChange = (e) => {}
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value}); // our 'target' is the 'input' field; 'value' is w/e gets typed in input field
  }

  newFriend = (e) => {
    e.preventDefault(); // prevents default behavior of button to execute. In this case, we are rendering an SPA; 
    const friend = {    // so when user clicks button we don't want...?
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    this.props.dispatch(addFriend(friend)) // speficy which action creator f(x) you want to call, then pass in the object. This is how you send off data to other parts of redux.
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
                                                                                  // ^^ value will be set to a state variable
  }
}

export default connect()(AddFriend)