import React from 'react';
import { Stopwatch } from './Components/Stopwatch/Stopwatch';
import { Notepad } from './Components/Notepad/Notepad';
import './global-styles/App.css';

export const App = () => {
  return (
    <>
    <Stopwatch />
    <Notepad />
    </>
  );
};

