import * as React from 'react';
import styles from './styles/ButtonGroup.module.css';
import { Time } from '../../hooks/useTimer';

type Options = 'play' | 'pause' | 'reset';
type Props = {
  actions: {
    button: React.Dispatch<{type: Options}>,
    time: React.Dispatch<React.SetStateAction<Time>>
  },
  icons: Record<Options, string>
  condition: boolean,
  status: string,
  initialState: Time
}

export const ButtonGroup: React.FC<Props> = ({icons, condition, actions, 
                                              status, initialState}) => {
  return(
    <div className={styles['wrapper']}>
        <button id={styles[status]}
                onClick={() => {condition ? actions.button({type: 'play'}) : 
                                            actions.button({type: 'pause'});}} 
                className={styles['toggle-button']}
                data-testid="toggle-button">{condition ? icons.play:  
                                                         icons.pause}
        </button>
        <button id={styles['reset']}
                onClick={() => { actions.button({type: 'reset'});
                                 actions.time(initialState); }}
                data-testid="reset-button">{icons.reset}
        </button>
    </div>
  );
};