import React, { Component } from 'react';

class Friend extends Component { // amico is prop which passes (ami) from FriendsList component to Friend component
  render() {
    return (
      <div>
        <h4>{`Friend ${this.props.i + 1}`}</h4>
        <h4>{`Name: ${this.props.amico.name}`}</h4>
        <h4>{`Age: ${this.props.amico.age}`}</h4>
        <h4>{`Email: ${this.props.amico.email}`}</h4>
      </div>
    )
  }
}
export default Friend;