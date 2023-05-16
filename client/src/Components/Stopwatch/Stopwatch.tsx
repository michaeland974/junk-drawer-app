import { decode } from 'html-entities';
import { useTimer } from '../../hooks/useTimer';
import { useToggle } from '../../hooks/useToggle';
import { timeFormat } from '../../utils/timeFormat';
/* Styles */
import styles from './styles/Stopwatch.module.css';
/* Components */
import { ButtonGroup } from './ButtonGroup';
import { TimeDisplay } from './TimeDisplay';
import { MobileOnlyHeader } from '../MobileOnlyHeader';

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
      <TimeDisplay renderedTime={timeFormat(time.state['timeElapsed'])}/>
      <ButtonGroup actions={{button: dispatch, 
                             time: setTime}} 
                   condition={!timerStatus.isActive}
                   icons={icons}
                   initialState={initialState}
                   status={timerStatus.toggle}/>
    </div>
  );
};