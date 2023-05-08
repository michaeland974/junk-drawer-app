import * as React from 'react';
import { useTimer } from '../../hooks/useTimer';

interface Time {
  state: {
    deciseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
  }
}

const timeFormat = (timeElapsed: number): string => {
  return timeElapsed.toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false });
};

export const Stopwatch = () => {
  const [{activeTimer, setActiveTimer, time, setTime}] = useTimer();
  const initialState = {
      state: {
        timeElapsed: 0,
        deciseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
      }
  };
  const startTimer = () => setActiveTimer(true);
  const stopTimer = () => setActiveTimer(false);
  
  const displayTime = `Time: ${timeFormat(time.state.hours)}: 
                             ${timeFormat(time.state.minutes)}: 
                             ${timeFormat(time.state.seconds)}:
                             ${timeFormat(time.state.deciseconds)}`;
  
  return (
    <div className='container'>
      <div className='buttonGroup'>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => stopTimer()}>Stop</button>
        <button onClick={() => {
            setTime(initialState);
            setActiveTimer(false);
          }
        }>Reset</button>
      </div>
      <span>{displayTime}</span>
    </div>
  );
};