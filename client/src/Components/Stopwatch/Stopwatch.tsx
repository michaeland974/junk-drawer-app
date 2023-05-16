import { useTimer } from '../../hooks/useTimer';
import { timeFormat } from '../../utils/timeFormat';
/* Styles */
import styles from './styles/Stopwatch.module.css';
/* Components */
import { ButtonGroup } from './ButtonGroup';
import { TimeDisplay } from './TimeDisplay';

export const Stopwatch = () => {
  const [{time, setTime, initialState, 
          toggleValue, toggle}] = useTimer();

  return (
    <div className={styles['container']}>
      <TimeDisplay renderedTime={timeFormat(time.state['timeElapsed'])}/>
      <ButtonGroup actions={{timerControl: toggle, 
                             time: setTime}} 
                   condition={!toggleValue}
                   initialState={initialState}/>
    </div>
  );
};