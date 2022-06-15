/*
  Set the selectedTimer to the value passed in the payload of the SELECT_TIMER action
*/

import { SELECT_TIMER } from '../actions';

const selectedTimerReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TIMER:
      return state = action.payload.index;
    
    default:
      return state;
  }
}

export default selectedTimerReducer;