import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import NewTimer from "./components/NewTimer";
import ListTimers from "./components/ListTimers";

import reducers from "./reducers";

import { update } from './actions'

import "./App.css";

const store = createStore(reducers);

let lastUpdateTime = Date.now()
setInterval(() => {
  const now = Date.now()
  const deltaTime = now - lastUpdateTime
  lastUpdateTime = now
  store.dispatch(update(deltaTime))
}, 50)
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
