import React from 'react';
import {
  render, waitForElement,
} from '@testing-library/react';
import App from './App';

it('Should display an element showing that it is loading', () => {
  const { container } = render(<App />);
  const spinner = container.querySelector('article.spinner');
  expect(spinner).toBeVisible();
});

it('Should display the element which allow to start the game', async () => {
  const { container } = render(<App />);
  const elComPartie = await waitForElement(() => container.querySelector('#commencerUnePartie'));
  expect(elComPartie).toBeVisible();
});
