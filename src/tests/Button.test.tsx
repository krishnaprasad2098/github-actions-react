// src/components/__tests__/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('renders button and handles click', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);
  
  const button = screen.getByText('Click me');
  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
