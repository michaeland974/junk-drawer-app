import { useState, useEffect } from 'react';
import { Time } from '../Components/Stopwatch/interfaces';

type StorageKeys = {
  storedTime: string,
  storedNotes: string
}

const getStoredValue = (key: string): string|undefined => {
  return key ? localStorage.getItem(key) as string : undefined;
};

export const useLocalStorage = (key: keyof StorageKeys, dep: Time | any) => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key);
  });
 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dep.state ?? dep));
}, [dep]);

  return [value, setValue];
};