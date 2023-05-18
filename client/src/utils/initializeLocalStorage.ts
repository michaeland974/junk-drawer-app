import { Time } from '../Components/Stopwatch/interfaces';

export const initializeLocalStorage = (key: string, state: Time | string[]) => {
  return window.localStorage.setItem(key, JSON.stringify(state));
};
