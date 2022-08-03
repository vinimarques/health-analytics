import React, { createContext, useState } from 'react';
import { ActivitiesType, ActivitiesContextState } from './types';

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: ActivitiesContextState = {
  activities: [],
  //eslint-disable-next-line
  addActivities: () => {},
};

export const ActivitiesContext =
  createContext<ActivitiesContextState>(contextDefaultValues);

export const ActivitiesProvider = (props: Props) => {
  const [activities, setActivities] = useState<ActivitiesType>(
    contextDefaultValues.activities
  );

  const addActivities = (list: ActivitiesType) => setActivities(list);

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        addActivities,
      }}
    >
      {props.children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
