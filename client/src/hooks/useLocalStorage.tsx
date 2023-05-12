import { useState, useEffect} from 'react';
import { Time } from '../Components/Stopwatch/interfaces';

const getStoredValue = (key: string): string|undefined => {
  return key ? localStorage.getItem(key) as string : undefined;
};

export const useLocalStorage = (key: string , dep: Time) => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dep.state));
}, [dep]);

  return [value, setValue];
};