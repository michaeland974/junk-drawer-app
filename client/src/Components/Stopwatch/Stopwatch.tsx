import * as React from 'react';
import {useState} from 'react';
import { useTimer } from '../../hooks/useTimer';
import { ButtonGroup } from './ButtonGroup';

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
  const [buttonStatus, setButtonStatus] = useState<'Start' | 'Stop'>('Start');
  const initialState = {
      state: {
        timeElapsed: 0,
        deciseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
      }
  };
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
  
  const displayTime = `Time: ${timeFormat(time.state.hours)}: 
                             ${timeFormat(time.state.minutes)}: 
                             ${timeFormat(time.state.seconds)}:
                             ${timeFormat(time.state.deciseconds)}`;
  
  return (
    <div className='container'>
      <ButtonGroup toggle={() => activeTimer ? stopTimer() : startTimer()} 
                   reset={() => resetTimer()} 
                   buttonText={buttonStatus}/>
      <span>{displayTime}</span>
    </div>
  );
};