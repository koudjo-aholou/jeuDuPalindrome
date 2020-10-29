import React from 'react';
import { render, screen } from '@testing-library/react';
import Accueil from './Accueil';

it('Should display the component ACCUEIL', () => {
  const { container } = render(<Accueil />);
  expect(container.querySelector('#accueil')).toBeInTheDocument();
});

it('Should allow the user to start a Game', () => {
  const { container } = render(<Accueil />);
  screen.debug();
  expect(container.querySelector('#commencerUnePartie')).toBeInTheDocument();
});

it('Should allow the user to start a Game', () => {
  const { container } = render(<Accueil />);
  screen.debug();
  expect(container.querySelector('#regles')).toBeInTheDocument();
});
