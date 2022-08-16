import React from 'react';
import { render } from '@testing-library/react';
import ActivityCard from './';
import fileMock from '../../../../mock/activity';
import { ActivitiesItemType } from '@constants/types';

describe('ActivityCard', () => {
  it('should render component', () => {
    const data: ActivitiesItemType = fileMock;

    const { getByText } = render(<ActivityCard data={data} />);
    expect(getByText(/Traditional Strength Training/i)).toBeInTheDocument();
  });
});
