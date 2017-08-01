import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';

const dummyState = [
	{
		name: 'Tai',
		age: 30,
		email: 'ben@lambdaschool.com',
	},
	{
		name: 'Stevie',
		age: 45,
		email: 'austen@lambdaschool.com',
	}];

const friendsReducer = (state = dummyState, action) => {
	switch(action.type) {
		case GET_FRIENDS:
			return action.payload.data;
		default:
			return state;
	}
};

export default friendsReducer;