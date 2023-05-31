import * as React from 'react';

type Props = {
  children: JSX.Element
  className: string
}

export const WrapperWithShadow: React.FC<Props> = ({children, className}) => {
  return(
    <div className={className}>
      {children}
    </div>
  );
};