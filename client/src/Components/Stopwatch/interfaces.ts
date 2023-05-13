export type ButtonOptions = 'play' | 'pause' | 'reset';

export interface Time{
  state: {
    timeElapsed: number,
    deciseconds: number,
    seconds: number,
    minutes: number,
    hours: number,
  }
}

export type TimerStatus = {
  isActive: boolean, 
  toggle: 'play' | 'pause'
}

export const initialState: Time = {
  state: {
    deciseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    timeElapsed: 0,
  }
};