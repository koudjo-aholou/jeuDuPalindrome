import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Should display the element while allow to start the game', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/^Commencer une partie/i, { selector: 'button.commencerTexte' });
  expect(buttonElement).toBeInTheDocument();
});
