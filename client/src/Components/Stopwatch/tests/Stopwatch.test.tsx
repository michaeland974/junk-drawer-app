/** @jest-environment jsdom */
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'; 
import user from '@testing-library/user-event';
import { icons } from '../Stopwatch';
import { Stopwatch } from '../Stopwatch';
import { initialState } from '../interfaces';

describe('button clicks', () => {
  beforeEach(() => {
    const {setItem} = window.localStorage;
           setItem('storedTime', JSON.stringify(initialState.state));
  });
  
  test(('toggle button changes text on click'), async() => {
    render(<Stopwatch/>);
    const {play, pause} = icons;

    const toggleButton = await screen.findByTestId('toggle-button');
      expect(toggleButton).toBeVisible();
        await user.click(toggleButton);
      expect(toggleButton).toHaveTextContent(pause);
        await user.click(toggleButton);
      expect(toggleButton).toHaveTextContent(play);
    });
  
  test(('reset button will reset time display on click'), async() => {
    render(<Stopwatch/>);
    
    const initialTimeState = '00:00:00:00';
    const toggleButton = await screen.findByTestId('toggle-button');
    const resetButton = await screen.findByTestId('reset-button');
    const timeDisplay = await screen.findByTestId('time-display');
      await user.click(toggleButton);//timer has started
      await waitFor(() => {
        expect(screen.queryByText(initialTimeState)).toBeNull();
      });
      await user.click(resetButton);
      await waitFor(() => {
        expect(timeDisplay).toHaveTextContent(initialTimeState);
      });
  });
});
