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

