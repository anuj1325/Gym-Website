import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Body Shape text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Body Shape/i);
  expect(linkElement).toBeInTheDocument();
});
