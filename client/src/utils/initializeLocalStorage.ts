import { Time } from '../Components/Stopwatch/interfaces';

export const initializeLocalStorage = (key: string, state: Time) => {
  return window.localStorage.setItem(key, JSON.stringify(state));
};
