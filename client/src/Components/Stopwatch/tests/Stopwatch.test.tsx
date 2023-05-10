/** @jest-environment jsdom */
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

import { Stopwatch } from '../Stopwatch';
describe('button clicks', () => {
  test(('toggle button changes text on click'), async() => {
    render(<Stopwatch/>);

    const toggleButton = await screen.findByTestId('toggle-button');
      expect(toggleButton).toBeVisible();
        await user.click(toggleButton);
      expect(toggleButton).toHaveTextContent('Stop');
        await user.click(toggleButton);
      expect(toggleButton).toHaveTextContent('Start');
    });
  test(('reset button will reset time display on click'), async() => {
    render(<Stopwatch/>);
    
    const initialTimeState = 'Time: 00:00:00:00';
    const toggleButton = await screen.findByTestId('toggle-button');
    const resetButton = await screen.findByText('Reset');
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
