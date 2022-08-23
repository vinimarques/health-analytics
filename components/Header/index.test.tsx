import React from 'react';
import { render } from '@testing-library/react';
import Header from '@components/Header';

test('renders a message', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Health Analytics/i)).toBeInTheDocument();
});
