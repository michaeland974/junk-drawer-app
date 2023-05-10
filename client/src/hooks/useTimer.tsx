import { useState, useEffect} from 'react';
import { decode } from 'html-entities';

type Time = {
  state: {
    timeElapsed: number,
    deciseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
  }
}

type TimerStatus = {
  isActive: boolean, 
  toggleStatus: 'play' | 'pause',
}

export const useTimer = () => {
  const [timerStatus, setTimerStatus] = useState<TimerStatus>({
    isActive: false,
    toggleStatus: 'play'
  });
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
  const durationLimit = (time.state.timeElapsed===432000);//12 Hours
  
  const incrementer = () => {
    setTime((prevState) => {
      return {...prevState,
             [time.state.timeElapsed]: time.state.timeElapsed++};
    }); 
  };

  useEffect(() => { 
    const interval =  setInterval(function(isActive: boolean){
      if(isActive===false || durationLimit){
        clearInterval(interval);
        setTimerStatus({isActive: false, toggleStatus: 'play'});
        durationLimit && setTime(initialState);
      }else{
        incrementer();
      }
    }, 100, (timerStatus.isActive));  
  return () => clearInterval(interval);
  }, [timerStatus]);
  
  return [{time, setTime, initialState, 
           timerStatus, setTimerStatus}];
};
