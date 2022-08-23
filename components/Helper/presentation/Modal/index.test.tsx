import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '@context';

import Modal from './';
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
        <Modal />
      </AppProvider>
    );
    expect(
      screen.getByText(
        /This project aims to analyze the data that is exported from the/i
      )
    ).toBeInTheDocument();
  });

  it('should close modal', () => {
    const mockSetModal = jest.fn();
    render(
      <AppProvider initial={{ ...initialState, setModal: mockSetModal }}>
        <Modal />
      </AppProvider>
    );

    const btn = screen.getByTestId('close_moda_button');
    fireEvent.click(btn);

    expect(mockSetModal).toBeCalled();
  });
});
