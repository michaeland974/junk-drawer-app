import * as React from 'react';
import styles from './styles/ButtonGroup.module.css';

type Options = 'play' | 'pause' | 'reset';
type Props = {
  actions: Record<Options, React.MouseEventHandler<HTMLButtonElement>>
  icons: Record<Options, string>
  condition: boolean,
  status: string,
}

export const ButtonGroup: React.FC<Props> = ({icons, condition, actions, status}) => {
  const {play, pause, reset} = actions;
  
  const iconWithId = (icon: string, status: string) => {
    return <span id={styles[status]}>{icon}</span>;
  };
  return(
    <div className={styles['wrapper']}>
        <button onClick={(e) => {condition ? play(e) : 
                                             pause(e);}} 
                id={styles[status]}
                className={styles['toggle-button']}
                data-testid="toggle-button">{condition ? icons.play:  
                                                         icons.pause}
        </button>
        <button onClick={(e) => reset(e)}
                data-testid="reset-button">{iconWithId(icons.reset, 'reset')}
        </button>
    </div>
  );
};