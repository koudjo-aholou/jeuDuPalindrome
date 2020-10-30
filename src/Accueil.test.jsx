import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accueil from './Accueil';

it('Should display the component ACCUEIL', () => {
  const { container } = render(<Accueil />);
  expect(container.querySelector('#accueil')).toBeInTheDocument();
});

it('Should allow the user to start a Game', () => {
  const { container } = render(<Accueil />);
  expect(container.querySelector('#commencerUnePartie')).toBeInTheDocument();
});

it('Should allow the user to start a Game', () => {
  const { container } = render(<Accueil />);
  expect(container.querySelector('#regles')).toBeInTheDocument();
});

it('Should permit user to START the Game by clicking on an element', async () => {
  const handleClickCommencerJeu = jest.fn();
  const { getByText } = render(<Accueil handleClickCommencerJeu={handleClickCommencerJeu} />);
  const node = getByText(/^Commencer une partie/g);
  fireEvent.click(node);
  expect(handleClickCommencerJeu).toHaveBeenCalledTimes(1);
});
