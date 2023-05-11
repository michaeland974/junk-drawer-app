import {decode} from 'html-entities';
import styles from './styles/Stopwatch.module.css';
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
    timerStatus, setTimerStatus}] = useTimer();
   
  const toggleActions = {
    play: () => setTimerStatus({isActive: true, toggleStatus: 'pause'}),
    pause: () => setTimerStatus({isActive: false, toggleStatus: 'play'}),
    reset: () => {
      setTime(initialState);
      setTimerStatus({isActive: false, toggleStatus: 'play'});
    }
  };

  return (
    <div className={styles['container']}>
      <TimeDisplay renderedTime={timeFormat(time.state.timeElapsed)}/>
      <ButtonGroup actions={toggleActions} 
                   condition={!timerStatus.isActive}
                   icons={icons}
                   status={timerStatus.toggleStatus}/>
    </div>
  );
};