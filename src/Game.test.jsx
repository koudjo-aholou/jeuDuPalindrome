import React from 'react';
import {
  render, cleanup, fireEvent,
} from '@testing-library/react';
import Game from './Game';
import { startGame } from './data';

let renderContainer;
const palindrome = ['a', 'd', 'a'];
const checkTimer = jest.fn();
const handleClickLetter = jest.fn();
const handleClickSuppLettre = jest.fn();
const handleClickContinuer = jest.fn();
const handleClickFinDuJeu = jest.fn();

beforeEach(() => {
  renderContainer = render(<Game
    reponseJoueur=""
    checkTimer={checkTimer}
    scoreJoueur={0}
    jeu={{ ...startGame, start: true }}
    palindromeDecoupe={palindrome}
    handleClickLetter={handleClickLetter}
    handleClickSuppLettre={handleClickSuppLettre}
    reponsePalindrome={palindrome.join('')}
    handleClickContinuer={handleClickContinuer}
    handleClickPerdu={handleClickContinuer}
    handleClickFinDuJeu={handleClickFinDuJeu}
  />);
});
afterEach(cleanup);

it('Should display the component GAME', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.jeu')).toBeInTheDocument();
});

it('Should display the timer', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.wrapTimer h1')).toBeInTheDocument();
});

it('Should display the Score', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.containerST p')).toBeInTheDocument();
});

it('Should display the Score at 0', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.containerST p')).toHaveTextContent('Score : 0');
});

it('Should display the Rules', () => {
  const { container } = renderContainer;
  expect(container.querySelector('#regles')).toBeInTheDocument();
});

it('Should display letters already used', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.containerAffLettre')).toBeInTheDocument();
});

it('Should NOT display the letter  already used because they haven t', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.containerAffLettre')).toHaveTextContent('Lettres choisies :');
});

it('Should display letters that user can use to solve the palindrome', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.containerLJ')).toBeInTheDocument();
});

it('Should display the same amount of letters that the palindrome', () => {
  const { container } = renderContainer;
  expect(container.querySelectorAll('button.affLettre').length).toBe(palindrome.length);
});

it('Should display the element while can clear all letters already used by the player', () => {
  const { container } = renderContainer;
  expect(container.querySelector('.suppLettreStyle button')).toBeInTheDocument();
});

it('Should permit user to clean All the letters already used by clicking on an element', () => {
  const { getByText } = renderContainer;
  const node = getByText('Effacer');
  fireEvent.click(node);
  expect(handleClickSuppLettre).toHaveBeenCalledTimes(1);
});

it('Should NOT display the element while can clear all letters already used by the player', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelector('.suppLettreStyle button')).not.toBeInTheDocument();
});

it('Should NOT display the same amount of letters that the palindrome', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelectorAll('button.affLettre').length).toBe(0);
});

it('Should display player WIN', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame, win: true }} reponseJoueur="" scoreJoueur={1} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelector('#joueurAgagne')).toBeInTheDocument();
});

it('Should display an element to continue the party', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame, win: true }} reponseJoueur="" scoreJoueur={1} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelector('#joueurAgagne button')).toBeInTheDocument();
});

it('Should display the answer of the palindrome', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame, end: true }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelector('#reponsePalindrome')).toHaveTextContent(`${palindrome.join('')}`);
  expect(container.querySelector('#finPartie')).toBeInTheDocument();
});

it('Should permit user to continue to play by clicking on an element', () => {
  const { rerender, getByText } = renderContainer;
  rerender(<Game jeu={{ ...startGame, end: true }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} handleClickPerdu={handleClickContinuer} />);
  const node = getByText('Continuer');
  fireEvent.click(node);
  expect(handleClickContinuer).toHaveBeenCalledTimes(1);
});

it('Should display GAME OVER end of time', () => {
  const { container, rerender } = renderContainer;
  rerender(<Game jeu={{ ...startGame, end: true, endTime: true }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} />);
  expect(container.querySelector('#FinJeu')).toBeInTheDocument();
});

it('Should permit user to Play again by clicking on an element', () => {
  const { rerender, getByText } = renderContainer;
  rerender(<Game jeu={{ ...startGame, end: true, endTime: true }} reponseJoueur="" scoreJoueur={0} palindromeDecoupe={palindrome} reponsePalindrome={palindrome.join('')} handleClickFinDuJeu={handleClickFinDuJeu} />);
  const node = getByText('Play Again ?');
  fireEvent.click(node);
  expect(handleClickFinDuJeu).toHaveBeenCalledTimes(1);
});
