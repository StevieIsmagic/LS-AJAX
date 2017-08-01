import { combineReducers } from 'redux';
import friendsReducer from './friendsListReducer';

const rootReducer = combineReducers({
    friends: friendsReducer
    // 'friends:' is a property on the state and also the key on the object
    // 'friends:' will be used in smart component via mapStateToProps
    // EXAMPLE:
    // const mapStateToProps = (state) => {
    // return {
    //     friends: state.friends << this one. State is passed from redux and friends is prop of State.
    // };
});

export default rootReducer;