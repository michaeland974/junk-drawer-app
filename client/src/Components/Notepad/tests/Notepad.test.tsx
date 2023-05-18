/** @jest-environment jsdom */
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { Notepad } from '../Notepad';
import { initializeLocalStorage } from '../../../utils/initializeLocalStorage';

describe(('Notepad componenet'), () => {
  beforeEach(() => {
    initializeLocalStorage('storedNotes', []);
  });
  
  test(('note added on click'), async() => {
    render(<Notepad/>);
    
    const add = await screen.findByTestId('add');
    await user.dblClick(add);
    await waitFor(() => {
      const list = screen.queryAllByTestId('list-items');
        expect(list).toHaveLength(2);
      });
  });
  test(('note deleted on click'), async() => {
    render(<Notepad/>);
    
    const add = await screen.findByTestId('add');
    await user.dblClick(add);
    await waitFor(async () => {
      const list = screen.queryAllByTestId('list-items');
      const deleteButton = screen.queryAllByTestId('delete')[0];
        await user.click(deleteButton);
        expect(list).toHaveLength(1);
      });
  });
});