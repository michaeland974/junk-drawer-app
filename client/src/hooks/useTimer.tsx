import * as React from 'react';
import { useState, useEffect } from 'react';

interface Time {
  state: {
    timeElapsed: number,
    deciseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
  }
}

export const useTimer = () => {
  const [activeTimer, setActiveTimer] = useState(false);
  const initialState: Time = {
    state: {
      timeElapsed: 0,
      deciseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    }
  };
  const [time, setTime] = useState<Time>(initialState);
  
  const incrementer = () => {
    setTime((prevState) => {
      return {...prevState,
             [prevState.state.timeElapsed]: prevState.state.timeElapsed++};
    }); 
  };

  const resetOnLimit = (stateValue: number) => {
    if(stateValue===20){
      setActiveTimer(false);
      setTime(initialState);
    }
  };
  //useEffect(() => resetOnLimit(time.state.timeElapsed), [time]);
  useEffect(() => { 
    const interval = setInterval(function(isActive: boolean){
      if(isActive===false) clearInterval(interval);
      else{
        incrementer();
      }
    }, 100, activeTimer);  
    return () => clearInterval(interval);
  }, [activeTimer]);

  return [{activeTimer, setActiveTimer, 
           time, setTime, initialState}];
};
