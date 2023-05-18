import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Time } from '../Components/Stopwatch/interfaces';
import { useToggle } from './useToggle';

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
  const [toggleValue, toggle] = useToggle(false);
  const durationLimit = (time.state.timeElapsed===432000);//12 Hours
  
  const incrementer = () => {
    setTime((prevState) => {
      return {...prevState,
             [time.state.timeElapsed]: time.state.timeElapsed++};
    }); 
  };

  useEffect(() => {
    const localTime: Time['state'] = JSON.parse(localStorageTime as string) ?? 
                                     initialState['state'];
    setTime({state: localTime});
  }, []);

  useEffect(() => { 
    const interval = setInterval(function(isActive: boolean){
      if(isActive===false || durationLimit){
        clearInterval(interval);
        toggle(false);
        durationLimit && setTime(initialState);
      }else{
        incrementer();
      }
  }, 100, (toggleValue));
   
  return () => clearInterval(interval);
}, [toggleValue]);
  
  return [{time, setTime, initialState, toggleValue, toggle}];
};
