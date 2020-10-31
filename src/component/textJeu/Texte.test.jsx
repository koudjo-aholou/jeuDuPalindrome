import React from 'react';
import { render } from '@testing-library/react';
import Texte from './Texte';

it('Should display an title inside the element', () => {
  const { getByText } = render(<Texte titre="test" />);
  expect(getByText('test')).toBeVisible();
});

it('Should display an response inside the element', () => {
  const { getByText } = render(<Texte reponse="reponse" />);
  expect(getByText('reponse')).toBeVisible();
});

it('Should display an the good styling inside the element', () => {
  const { container } = render(<Texte roleId="idStyle" />);
  expect(container.querySelector('#idStyle')).toBeInTheDocument();
});

it('Should display tite response id', () => {
  const { container, getByText } = render(<Texte roleId="idStyle" reponse="reponse" titre="test" />);
  expect(getByText('test')).toBeVisible();
  expect(getByText('reponse')).toBeVisible();
  expect(container.querySelector('#idStyle')).toBeInTheDocument();
});
