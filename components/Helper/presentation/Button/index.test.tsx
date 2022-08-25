import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider } from '@context';

import Button from './';
import { ActivitiesContextState } from '@constants/types';

const initialState: ActivitiesContextState = {
  activities: [],
  addActivities: () => jest.fn(),
  setModal: () => jest.fn(),
  isActive: false,
  startDate: new Date('2022-08-10 09:01'),
  finalDate: new Date('2022-08-20 10:12'),
  modalActived: false,
};

describe('Helper Button', () => {
  it('should render component', () => {
    render(<Button />);
    expect(screen.getByText(/\?/i)).toBeInTheDocument();
  });

  it('should change modal context', () => {
    const mockSetModal = jest.fn();
    render(
      <AppProvider initial={{ ...initialState, setModal: mockSetModal }}>
        <Button />
      </AppProvider>
    );
    const button = screen.getByText(/\?/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockSetModal).toBeCalled();
  });
});
