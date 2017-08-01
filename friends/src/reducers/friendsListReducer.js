import { GET_FRIENDS } from '../actions';
import { ADD_FRIENDS } from '../actions';
// when do we know to make a new action / reducer ?

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
		case ADD_FRIENDS:
			return action.payload.data;
		default:
			return state;
	}
};

export default friendsReducer;