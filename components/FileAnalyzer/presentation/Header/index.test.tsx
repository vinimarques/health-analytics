import React from 'react';
import { render } from '@testing-library/react';
import HeaderActivities from './';

describe('Header', () => {
  it('should render component', () => {
    const { getByText } = render(
      <HeaderActivities
        startDate={new Date('2022-08-02 08:56')}
        finalDate={new Date('2022-08-22 08:56')}
      />
    );
    expect(getByText('08/22/2022')).toBeInTheDocument();
  });
});
