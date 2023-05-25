import React from 'react';
import { Stopwatch } from './Components/Stopwatch/Stopwatch';
import { Notepad } from './Components/Notepad/Notepad';
import { MusicPlayer } from './Components/MusicPlayer/MusicPlayer';
import './assets/global-styles/reset.css';
import './assets/global-styles/App.css';

export const App = () => {
  return (
    <>
    <MusicPlayer url='/stream'/>
    <Notepad />
    <Stopwatch />
    </>
  );
};

