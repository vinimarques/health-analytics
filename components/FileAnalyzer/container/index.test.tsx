import React from 'react';
import { render } from '@testing-library/react';
import { AppProvider } from '@context';

import FileAnalyzer from './';
import { ActivitiesContextState } from '@constants/types';

const initialState: ActivitiesContextState = {
  activities: [],
  addActivities: () => jest.fn(),
  setModal: () => jest.fn(),
  isActive: false,
  modalActived: false,
  startDate: new Date('2022-08-10'),
  finalDate: new Date('2022-08-20'),
};

describe('FileAnalyzer', () => {
  it('should render initial state with FileUpload', () => {
    const { getByText } = render(
      <AppProvider initial={initialState}>
        <FileAnalyzer />
      </AppProvider>
    );
    expect(getByText(/Select CSV File/i)).toBeInTheDocument();
  });

  it('should render components', () => {
    const { getByText } = render(
      <AppProvider initial={{ ...initialState, isActive: true }}>
        <FileAnalyzer />
      </AppProvider>
    );
    expect(getByText('08/09/2022')).toBeInTheDocument();
  });
});
