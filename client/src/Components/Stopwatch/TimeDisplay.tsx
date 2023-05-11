import * as React from 'react';
import styles from './styles/TimeDisplay.module.css';

type Props = {
  renderedTime: string
};

export const TimeDisplay: React.FC<Props> = ({renderedTime}) => {
  const deciseconds = renderedTime.slice(-2);
  const display = renderedTime.slice(0, -2);

  return(
    <span className={styles['display']}
          data-testid='time-display'>
      {display}<span id={styles['deciseconds']}>{deciseconds}</span>
    </span>
  );
};