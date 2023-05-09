import * as React from 'react';

type Props = {
  toggle: React.MouseEventHandler<HTMLButtonElement>,
  reset: React.MouseEventHandler<HTMLButtonElement>,
  buttonText: string;
}

export const ButtonGroup: React.FC<Props> = ({toggle, reset, buttonText}) => {
  return(
    <div className='buttonGroup'>
        <button onClick={toggle} data-testid="toggle-button">{buttonText}</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
};