import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import throttle from 'lodash/throttle'

import NewTimer from "./components/NewTimer";
import ListTimers from "./components/ListTimers";

import reducers from "./reducers";

import { loadState, saveState } from './utils'

import { update } from "./actions";


import "./App.css";

const persistedState = loadState()
const store = createStore(reducers, persistedState);
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

// const store = createStore(reducers)
// store.subscribe(() => {
//   console.log(store.getState())
// })

let lastUpdateTime = Date.now();
setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 50);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TMRZ</h1>
        <NewTimer />
        <ListTimers />
      </div>
    </Provider>
  );
}

export default App;
