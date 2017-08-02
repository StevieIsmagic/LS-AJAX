import axios from 'axios'; // actions get bound to individual components via mapDispatchToProps

export const GET_FRIENDS = 'GET_FRIENDS'; // exported to reducer; GET_FRIENDS variable created in order
// to safeguard against potential ^ string typos caused by typing string over and over again
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => { // getFriends() function will be mapped: mapDispatchToProps @ whichever component that needs it
	const promise = axios.get('http://localhost:5000/friends');
	return {
		type: GET_FRIENDS, // action type CAPS
		payload: promise   // action payload
	};
};

export const addFriend = (newFriend) => {
	console.log(newFriend);
	const promise = axios.post('http://localhost:5000/new-friend', newFriend);
	return {
		type: ADD_FRIENDS,
		payload: promise
	};
};