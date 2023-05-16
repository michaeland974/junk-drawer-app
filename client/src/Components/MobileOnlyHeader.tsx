import * as React from 'react';
import { decode } from 'html-entities';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const MobileOnlyHeader: React.FC<Props> = ({onClick}) => {
  const icon = decode('&#9633;');

  return(
    <div className='mobile-header'>
      <button onClick={onClick}>{icon}</button>
    </div>
  );
};