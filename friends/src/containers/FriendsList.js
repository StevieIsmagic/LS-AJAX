import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { bindActionCreators } from 'redux';

class FriendsList extends Component {
  //missing componentDidMount() ...wait for Antonio
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.trump.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i + 1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
              );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {   
    trump: state.friends // << this friends comes from redux state
 /* ^^^ this friends aka trump will become props on map function */
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getFriends: getFriends}, dispatch);
                          // REACT side: REDUX side
                                      // getFriends is imported from actions
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList); 
// FriendsList is the component that is passed to f(x) that returns from connect. 

// connect turns dumb into smart component 