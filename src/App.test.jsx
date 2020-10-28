import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('Should display the element while allow to start the game', () => {
  const { container } = render(<App />);
  const spinner = container.querySelector('article.spinner');
  expect(spinner).toBeInTheDocument();
});
