/* 
  TimerView
*/

import React from "react";
import { useDispatch } from "react-redux";
import { toggleTimer, del } from "../actions";

import { formatTime } from '../utils';

import './TimerView.css'

export default function TimerView(props) {
  const { index, timer } = props;
  const dispatch = useDispatch();
  const startStyle = {
    backgroundColor: "#5f8d70", 
  }
  const stopStyle = {
    backgroundColor: "#ff020c",
  }
  
  const switchStyle = timer.isRunning ?  stopStyle : startStyle
  const startOrStop = timer.isRunning ? "Stop" : "Start"

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))} style={switchStyle}>
        {startOrStop}
      </button>
      <button onClick={() => dispatch(del(index))}>
        Delete
      </button>
    </div>
  );
}
