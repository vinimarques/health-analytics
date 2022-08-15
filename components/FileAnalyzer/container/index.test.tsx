import React from 'react';
import { render } from '@testing-library/react';
import { ActivitiesProvider } from '@context';

import FileAnalyzer from './';
import { ActivitiesContextState } from '@constants/types';

const initialState: ActivitiesContextState = {
  activities: [],
  addActivities: () => jest.fn(),
  isActive: false,
  startDate: new Date('2022-08-10'),
  finalDate: new Date('2022-08-20'),
};

describe('FileAnalyzer', () => {
  it('should render initial state with FileUpload', () => {
    const { getByText } = render(
      <ActivitiesProvider initial={initialState}>
        <FileAnalyzer />
      </ActivitiesProvider>
    );
    expect(getByText(/Select CSV File/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    const { getByText } = render(
      <ActivitiesProvider initial={{ ...initialState, isActive: true }}>
        <FileAnalyzer />
      </ActivitiesProvider>
    );
    expect(getByText('08/09/2022')).toBeInTheDocument();
  });
});
