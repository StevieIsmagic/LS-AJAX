import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { bindActionCreators } from 'redux';
//import { addFriend } from '../actions'
// import Friend from './Friend'
import Friend from '../components/Friend';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getAmigos();
  }

  render() {
    return (
      <div>
        <ul>                                       
          {this.props.amigo.slice(0).reverse().map((ami, indigo) => { // amigo coming from redux state, ami and indigo is a parameter                                        
            return (                              // in the callback function
              // replace all this with friend component.
              <Friend amico={ami} i={indigo}/>// Friend is or Friend component we made in Friend.js.                         
            );// We need to pass this data into our Friend component. We are in the parent and need to pass props to our Child. No need to export see we are passing props to the Chld.
          })} 
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => { // specifies what part of redux state tree does this individual component require/ need access to
  return {   
    amigo: state.friends // << this friends comes from redux state
 /* ^^^ this friends aka amigo will become props on map function */
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAmigos: getFriends}, dispatch);
                          // REACT side: REDUX side
                                      // getFriends is imported from actions
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList); 
// FriendsList is the component that is passed to f(x) that returns from connect. 

// connect turns dumb into smart component 