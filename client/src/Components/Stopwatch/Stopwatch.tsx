import * as React from 'react';
import { useState, useReducer, useEffect } from 'react';

type Time = {
  state: {
    decisecond?: number,
    seconds: number,
    minutes: number,
    hours?: number,
  }
}

const digitFormat = (number: number): string => {
  return number.toLocaleString('en-US', {
                                minimumIntegerDigits: 2,
                                useGrouping: false });
};

export const Stopwatch = () => {
  const [time, setTime] = useState<Time>({ 
    state :{
      seconds: 0,
      minutes: 0
    }
  });
  const initialState = {
      state: {
        seconds: 0,
        minutes: 0,
      }
  };
  const [activeTimer, setActiveTimer] = useState(false);
  const displayTime = `Time: ${digitFormat(time.state.minutes)}:
                             ${digitFormat(time.state.seconds)}`;
  
  const startTimer = () => setActiveTimer(true);
  const stopTimer = () => setActiveTimer(false);

  useEffect(() => { 
    function initialize () {
        setTime(prevState => ({
          ...prevState,
         [prevState.state.seconds]: prevState.state.seconds++
        }));
  }

    const interval = setInterval(function(isActive: boolean){
      if(isActive===false) clearInterval(interval);
      else{
        initialize();
      }
    }, 1000, activeTimer);  
  
  return () => clearInterval(interval);
  }, [activeTimer]);
  
  return (
    <div className='container'>
      <div className='buttonGroup'>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => stopTimer()}>Stop</button>
        <button onClick={() => setTime({...initialState})}>Reset</button>
      </div>
      <span>{displayTime}</span>
    </div>
  );
};