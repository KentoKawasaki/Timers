/*
  Set Timers.
*/

import { NEW_TIMER, TOGGLE_TIMER, UPDATE, DELETE } from "../actions";
import Timer from "../Timer";

const timersReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      const name = action.payload.name
        ? action.payload.name
        : `Timer ${state.length}`;
      return [...state, new Timer(name)];

    case TOGGLE_TIMER:
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return { ...timer, isRunning: !timer.isRunning };
        }
        return timer;
      });

      return newState;

    case UPDATE:
      return state.map((timer) => {
        if (timer.isRunning) {
          timer = { ...timer, time: (timer.time += action.payload.deltaTime) };
        }
        return timer;
      });

    case DELETE:
      return state.filter((timer, index) => index !== action.payload.index);
    default:
      return state;
  }
};

export default timersReducer;
