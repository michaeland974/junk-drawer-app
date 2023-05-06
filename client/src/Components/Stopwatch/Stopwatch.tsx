import * as React from 'react';
import { useState, useReducer, useEffect } from 'react';

type Time = {
  state: {
    deciseconds: number,
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
      deciseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    }
  });
  const initialState = {
      state: {
        deciseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
      }
  };
  const [activeTimer, setActiveTimer] = useState(false);
  const displayTime = `Time: ${digitFormat(time.state.minutes)}:
                             ${digitFormat(time.state.seconds)}:
                             ${digitFormat(time.state.deciseconds)}`;
  
  const startTimer = () => setActiveTimer(true);
  const stopTimer = () => setActiveTimer(false);

  useEffect(() => { 

    function initialize () {
      if(time.state.deciseconds>=10){
        if(time.state.deciseconds%600===0){
          setTime(prevState => ({
            ...prevState,
            [prevState.state.minutes]: prevState.state.minutes++
          }));
        }
        else if(time.state.deciseconds%10===0){
          setTime(prevState => ({
            ...prevState,
            [prevState.state.seconds]: prevState.state.seconds++
          }));
        }

      }

      setTime(prevState => ({
        ...prevState,
        [prevState.state.deciseconds]: prevState.state.deciseconds++
      }));
    }

    const interval = setInterval(function(isActive: boolean){
      if(isActive===false) clearInterval(interval);
      else{
        initialize();
      }
    }, 100, activeTimer);  
  
  return () => clearInterval(interval);
  }, [activeTimer]);
  
  return (
    <div className='container'>
      <div className='buttonGroup'>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => stopTimer()}>Stop</button>
        <button onClick={() => {
            setTime({...initialState});
            setActiveTimer(false);
          }
        }>Reset</button>
      </div>
      <span>{displayTime}</span>
    </div>
  );
};