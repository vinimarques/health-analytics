import React from 'react';
import { render } from '@testing-library/react';
import { FileAnalyzer } from './';

describe('FileAnalyzer', () => {
  it('should render initial state with FileUpload', () => {
    const { getByText } = render(<FileAnalyzer />);
    expect(getByText(/Select CSV File/i)).toBeInTheDocument();
  });
});
