/*
  All actions are defined here.
*/

/* Add Timer */

// Add a new timer object to an array of timer objects.

export const NEW_TIMER = "NEW_TIMER";
export const addTimer = (name) => ({
  type: NEW_TIMER,
  payload: { name },
});

/* Toggle Timer */

// Starts or stops a timer with the index of the timer.

export const TOGGLE_TIMER = "TOGGLE_TIMER";
export const toggleTimer = (index) => ({
  type: TOGGLE_TIMER,
  payload: { index },
});

/* Select Timer */

// Selects a timer with the index of the timer.
// Selecting a timer will display details about the timer.

export const SELECT_TIMER = "SELECT_TIMER";
export const selectTimer = (index) => ({
  type: SELECT_TIMER,
  payload: { index },
});
