import React from 'react';
import { render } from '@testing-library/react';
import { ActivitiesProvider } from '@context';
import ListActivities from './';
import { ActivitiesContextState } from '@constants/types';
import fileMock from '../../../../mock/activity';

const initialState: ActivitiesContextState = {
  activities: [fileMock],
  addActivities: () => jest.fn(),
  isActive: false,
  startDate: new Date('2022-08-10 09:01'),
  finalDate: new Date('2022-08-20 10:12'),
};

describe('ListActivities', () => {
  it('should render component', () => {
    const { getByText } = render(
      <ActivitiesProvider initial={initialState}>
        <ListActivities />
      </ActivitiesProvider>
    );

    expect(getByText('08/10/2022')).toBeInTheDocument();
    expect(getByText(/Traditional Strength Training/i)).toBeInTheDocument();
  });
});
