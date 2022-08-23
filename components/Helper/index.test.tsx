import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '@context';

import { HelperModal, HelperButton } from './';
import { ActivitiesContextState } from '@constants/types';

const initialState: ActivitiesContextState = {
  activities: [],
  addActivities: () => jest.fn(),
  setModal: () => jest.fn(),
  isActive: false,
  startDate: new Date('2022-08-10 09:01'),
  finalDate: new Date('2022-08-20 10:12'),
  modalActived: true,
};

describe('Helper Modal', () => {
  it('should render component', () => {
    render(
      <AppProvider initial={initialState}>
        <HelperModal />
      </AppProvider>
    );
    expect(
      screen.getByText(
        /This project aims to analyze the data that is exported from the/i
      )
    ).toBeInTheDocument();
  });
});

describe('Helper Button', () => {
  it('should render component', () => {
    render(<HelperButton />);
    expect(screen.getByText(/\?/i)).toBeInTheDocument();
  });
});
