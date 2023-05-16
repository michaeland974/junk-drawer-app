import {useState} from 'react';

export const useToggle = (defaultCondition: boolean) => {
  const [value, setValue] = useState(defaultCondition);

  const toggle = (value?: boolean) => {
    return setValue(prevState => (typeof value==='boolean' ? value : !prevState));
  };
  return [value, toggle] as const;
};