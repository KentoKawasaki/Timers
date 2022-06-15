import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import NewTimer from "./components/NewTimer";
import ListTimers from "./components/ListTimers";

import reducers from "./reducers";

import "./App.css";

const store = createStore(reducers);

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
