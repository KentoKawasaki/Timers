const TMRZ_STATE = "TMRZ_STATE";

// Load State
export const loadState = () => {
  try {
    // Grab the state from local storage
    const serializedState = localStorage.getItem(TMRZ_STATE);
    if (serializedState === null) {
      console.log("undefined")
      return undefined;
    }
    // convert the string into JSON for the Redux store
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save State
export const saveState = (state) => {
  try {
    // convert the state from JSON, into a string
    const serializedState = JSON.stringify(state);
    // save the state to local storage
    localStorage.setItem(TMRZ_STATE, serializedState);
  } catch (err) {
    console.log("error saving data");
  }
};
export const formatTime = (time) => {
  let convertedTime = 0
  const timeArray = [1000, 60, 60, 24].map((timeElement, index,) => {
    let remainder = time % timeElement;
    convertedTime = index === 0 ? Math.floor((remainder) / 100) : remainder;
    time = Math.floor(time / timeElement);
    return Math.floor(convertedTime);
  });
  const [ ms, secs, mins, hrs ] = timeArray;
  console.log(ms, secs, mins, hrs);
  // const ms = Math.round(time / 100) % 10;
  // const secs = Math.floor(time / 1000) % 60;
  // const mins = Math.floor(time / 1000 / 60) % 60;
  // const hrs = Math.floor(time / 1000 / 60 / 60);
  return `${hrs}:${mins}:${secs}.${ms}`;
};
