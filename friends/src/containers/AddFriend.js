import React from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions';

let AddFriend = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addFriend(input.value));
          input.value = '';
        }}
      >

      <input type='text' placeholder='Name'
          ref={ node => { input = node
            }
          }
      />
      <input type='number' placeholder='Age'
          ref={ node => {
            input = node
            }
          }
      />
      <input type='email' placeholder='E-Mail'
          ref={ node => {
            input = node
            }
          }
      />
        <button type="submit">
          Add Friend
        </button>
      </form>
    </div>
  )
}

export default connect()(AddFriend)