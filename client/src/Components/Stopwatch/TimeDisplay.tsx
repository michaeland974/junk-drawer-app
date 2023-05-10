import * as React from 'react';

type Props = {
  renderedTime: string
};

export const TimeDisplay: React.FC<Props> = ({renderedTime}) => {
  const deciseconds = renderedTime.slice(-2);
  const display = renderedTime.slice(0, -2);

  return(
    <span className='display'
          data-testid='time-display'>
      {display}<span id='deciseconds'>{deciseconds}</span>
    </span>
  );
};