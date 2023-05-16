import * as React from 'react';
import { decode } from 'html-entities';
import styles from './styles/ButtonGroup.module.css';
import { Time } from './interfaces';

type Props = {
  actions: {
    timerControl: (value?: boolean | undefined) => void,
    time: React.Dispatch<React.SetStateAction<Time>>
  },
  condition: boolean,
  initialState: Time
}

export const icons = {
  play: decode('&#x25B8;'),
  pause: decode('&#10074;&#10074;'),
  reset: decode('&#8630;'),
};

export const ButtonGroup: React.FC<Props> = ({condition, actions, initialState}) => {
  return(
    <div className={styles['wrapper']}>
        <button id={condition ? styles['play'] : styles['pause']}
                onClick={() => actions.timerControl()} 
                className={styles['toggle-button1']}
                data-testid="toggle-button">{condition ? icons.play:  
                                                         icons.pause}
        </button>
        <button id={styles['reset']}
                onClick={() => { actions.timerControl(false);
                                 actions.time(initialState); }}
                data-testid="reset-button">{icons.reset}
        </button>
    </div>
  );
};