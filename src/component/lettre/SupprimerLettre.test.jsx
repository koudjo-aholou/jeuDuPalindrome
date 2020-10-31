import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SupprimerLettre from './SupprimerLettre';

it('Should allow player to click on the element to cleared letters already used', () => {
  const handleClickSuppLettre = jest.fn();
  const { getByText } = render(<SupprimerLettre suppLettre={handleClickSuppLettre} />);
  const node = getByText(/^Effacer/g);
  fireEvent.click(node);
  expect(handleClickSuppLettre).toHaveBeenCalledTimes(1);
});

it('Should clear the letters already used', () => {
  const handleClickSuppLettre = jest.fn();
  const { getByText } = render(<SupprimerLettre suppLettre={handleClickSuppLettre} />);
  const node = getByText(/^Effacer/g);
  fireEvent.click(node);
  const [statusContinueGame] = handleClickSuppLettre.mock.calls[0];
  expect(statusContinueGame).toBe(true);
});
