import { useTimer } from '../../hooks/useTimer';
import { ButtonGroup } from './ButtonGroup';
import { timeFormat } from '../../utils/timeFormat';

export const Stopwatch = () => {
  const [{time, setTime, initialState, 
          timerStatus, setTimerStatus}] = useTimer();

  const startTimer = () => {
    setTimerStatus({isActive: true, toggle: 'Stop'});
  };
  const stopTimer = () => {
    setTimerStatus({isActive: false, toggle: 'Start'});
  };
  const resetTimer = () => {
    setTime(initialState);
    setTimerStatus({isActive: false, toggle: 'Start'});
  };
  
  return (
    <div className='container'>
      <ButtonGroup toggle={() => timerStatus.isActive? stopTimer() : startTimer()} 
                   reset={() => resetTimer()} 
                   buttonText={timerStatus.toggle}/>
      <span>{timeFormat(time.state.timeElapsed)}</span>
    </div>
  );
};