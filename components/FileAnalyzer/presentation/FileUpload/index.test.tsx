import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AppProvider } from '@context';
import FileUpload from './';
import { ActivitiesContextState } from '@constants/types';

const initialState: ActivitiesContextState = {
  activities: [],
  addActivities: () => jest.fn(),
  setModal: () => jest.fn(),
  isActive: false,
  startDate: new Date('2022-08-10'),
  finalDate: new Date('2022-08-20'),
  modalActived: false,
};

describe('FileUpload', () => {
  let fileUploadMock: File;

  beforeEach(() => {
    fileUploadMock = new File(
      ['type,name\r\ntest,lorem\r\ntest2,lorem2'],
      'mock.csv',
      {
        type: 'text/csv',
      }
    );
  });

  it('should render component', () => {
    const { getByText } = render(<FileUpload />);
    const wrapper = getByText(/select csv file/i);
    expect(wrapper).toBeInTheDocument();
  });

  it('should select a file', async () => {
    const mockAddActivities = jest.fn();
    render(
      <AppProvider
        initial={{ ...initialState, addActivities: mockAddActivities }}
      >
        <FileUpload />
      </AppProvider>
    );
    const fileUpload = screen.getByTestId('file-upload');

    await waitFor(() =>
      fireEvent.change(fileUpload, {
        target: { files: [fileUploadMock] },
      })
    );

    const elementFileUpload = document.getElementById(
      'file-upload'
    ) as HTMLInputElement;

    const files = elementFileUpload.files;

    if (files != null) {
      expect(files[0].name).toBe('mock.csv');
      expect(files.length).toBe(1);
    }

    await waitFor(() => expect(mockAddActivities).toBeCalled());
  });
});
