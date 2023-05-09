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
  const [time, setTime] = useState<Time>({ 
    state :{
      timeElapsed: 0,
      deciseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    }
  });
  const [activeTimer, setActiveTimer] = useState(false);

  const setState = (valueProp: keyof Time['state'], 
                    setFunction: React.Dispatch<React.SetStateAction<Time>>, 
                    action: 'increment' | 'reset') => {  
    if(action==='increment'){
        return setFunction(prevState => ({
          ...prevState,
          [prevState.state[valueProp]]: prevState.state[valueProp]++
        }));
    }
    else if(action==='reset'){
      return setFunction(prevState => ({
        ...prevState,
        [prevState.state[valueProp]]: prevState.state[valueProp]=0
      }));
    }
  };
  
  function incrementer () {
    setState('timeElapsed', setTime, 'increment');
    const {timeElapsed} = time.state;
    
    if(timeElapsed>9){
        if(timeElapsed%36000===0){
          setState('hours', setTime, 'increment');
        }
        else if(timeElapsed%600===0){
          setState('minutes', setTime, 'increment');
        }
        else if(timeElapsed%10===0){
          setState('seconds', setTime, 'increment');
          setState('deciseconds', setTime, 'reset');
        }
    }
      setState('deciseconds', setTime, 'increment'); 
  }

  useEffect(() => { 
    const interval = setInterval(function(isActive: boolean){
      if(isActive===false) clearInterval(interval);
      else{
        incrementer();
      }
    }, 100, activeTimer);  
    return () => clearInterval(interval);
  }, [activeTimer]);

  return [{activeTimer, setActiveTimer, time, setTime}];
};
