import * as React from 'react';
import {useState} from 'react';
import { useTimer } from '../../hooks/useTimer';
import { ButtonGroup } from './ButtonGroup';
import { timeFormat } from '../../utils/timeFormat';

interface Time {
  state: {
    deciseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
  }
}

export const Stopwatch = () => {
  const [{activeTimer, setActiveTimer, time, setTime, initialState}] = useTimer();
  const [buttonStatus, setButtonStatus] = useState<'Start'|'Stop'>('Start');
 
  const startTimer = () => {
    setActiveTimer(true);
    setButtonStatus('Stop');
  };
  const stopTimer = () => {
    setActiveTimer(false);
    setButtonStatus('Start');
  };
  const resetTimer = () => {
    setTime(initialState);
    setActiveTimer(false);
    setButtonStatus('Start');
  };
  
  return (
    <div className='container'>
      <ButtonGroup toggle={() => activeTimer ? stopTimer() : startTimer()} 
                   reset={() => resetTimer()} 
                   buttonText={buttonStatus}/>
      <span>{timeFormat(time.state.timeElapsed)}</span>
    </div>
  );
};