// helloWorld.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from '@components/Header';

test('renders a message', () => {
  const { getByText } = render(<HelloWorld />);
  expect(getByText(/Hello World/i)).toBeInTheDocument();
});
