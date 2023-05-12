import {decode} from 'html-entities';
import styles from './styles/Stopwatch.module.css';
import { useReducer } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { ButtonGroup } from './ButtonGroup';
import { timeFormat } from '../../utils/timeFormat';
import { TimeDisplay } from './TimeDisplay';

export const icons = {
  play: decode('&#x25B8;'),
  pause: decode('&#10074;&#10074;'),
  reset: decode('&#8630;'),
};

export const Stopwatch = () => {
  const [{time, setTime, initialState, 
          timerStatus, dispatch}] = useTimer();
  
  return (
    <div className={styles['container']}>
      <TimeDisplay renderedTime={timeFormat(time.state.timeElapsed)}/>
      <ButtonGroup actions={{button: dispatch, 
                             time: setTime}} 
                   condition={!timerStatus.isActive}
                   icons={icons}
                   initialState={initialState}
                   status={timerStatus.toggle}/>
    </div>
  );
};