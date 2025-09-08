// src/__tests__/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Hello, world!', () => {
  render(<App />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
