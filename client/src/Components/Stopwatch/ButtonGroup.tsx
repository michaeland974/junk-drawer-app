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
    <div className='button-group'>
        <button onClick={(e) => {condition ? play(e) : 
                                             pause(e);}} 
                data-testid="toggle-button">{condition ? iconWithId(icons.play, status):  
                                                         iconWithId(icons.pause, status)}
        </button>
        <button onClick={(e) => reset(e)}
                data-testid="reset-button">{iconWithId(icons.reset, 'reset')}
        </button>
    </div>
  );
};