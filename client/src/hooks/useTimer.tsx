import { useState, useEffect, useReducer} from 'react';
import { useLocalStorage } from './useLocalStorage';
import { TimerStatus, Time } from '../Components/Stopwatch/interfaces';

const reducer = (_state: TimerStatus, 
                 action:{type:'play'|'pause'|'reset'}):TimerStatus => {
  switch (action.type) {
    case 'play': return {isActive: true, toggle: 'pause'};
    case 'pause': return {isActive: false, toggle: 'play'};
    case 'reset': return {isActive: false, toggle: 'play'};
  }
};

export const useTimer = () => {
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
  const [localStorageTime] = useLocalStorage('storedTime', time);
  const [timerStatus, dispatch] = useReducer(reducer, {
    isActive: false,
    toggle: 'play'
  });
  const durationLimit = (time.state.timeElapsed===432000);//12 Hours
  
  const incrementer = () => {
    setTime((prevState) => {
      return {...prevState,
             [time.state.timeElapsed]: time.state.timeElapsed++};
    }); 
  };

  useEffect(() => {
    const localTime: Time['state'] = JSON.parse(localStorageTime as string);
    setTime({state: localTime});
  }, []);

  useEffect(() => { 
    const interval = setInterval(function(isActive: boolean){
      if(isActive===false || durationLimit){
        clearInterval(interval);
        dispatch({ type: 'reset' }); 
        durationLimit && setTime(initialState);
      }else{
        incrementer();
      }
    }, 100, (timerStatus.isActive)); 
  return () => clearInterval(interval);
}, [timerStatus]);
  
  return [{time, setTime, initialState, timerStatus, dispatch}];
};
