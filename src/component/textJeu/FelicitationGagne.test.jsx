import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FelicitationGagne from './FelicitationGagne';

it('Should allow player to continue to play', () => {
  const handleClickContinuer = jest.fn();
  const { getByText } = render(<FelicitationGagne continuerJeu={handleClickContinuer} />);
  const node = getByText(/^Un autre palindrome !/g);
  fireEvent.click(node);
  expect(handleClickContinuer).toHaveBeenCalledTimes(1);
});

it('Should start a new partie', () => {
  const handleClickContinuer = jest.fn();
  const { getByText } = render(<FelicitationGagne continuerJeu={handleClickContinuer} />);
  const node = getByText(/^Un autre palindrome !/g);
  fireEvent.click(node);
  const [statusContinueGame] = handleClickContinuer.mock.calls[0];
  expect(statusContinueGame).toBe(true);
});
