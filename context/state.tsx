import React, { createContext, useState } from 'react';
import moment from 'moment';
import {
  ActivitiesType,
  ActivitiesContextState,
  ActivityType,
} from '@constants/types';

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: ActivitiesContextState = {
  activities: [],
  //eslint-disable-next-line
  addActivities: () => {},
  isActive: false,
  startDate: null,
  finalDate: null,
};

export const ActivitiesContext =
  createContext<ActivitiesContextState>(contextDefaultValues);

export const ActivitiesProvider = (props: Props) => {
  const [activities, setActivities] = useState<ActivitiesType>(
    contextDefaultValues.activities
  );

  const [isActive, setActive] = useState<boolean>(
    contextDefaultValues.isActive
  );

  const [startDate, setStartDate] = useState<Date | null>(
    contextDefaultValues.startDate
  );

  const [finalDate, setFinalDate] = useState<Date | null>(
    contextDefaultValues.finalDate
  );

  const addActivities = (list: ActivityType[]) => {
    type activitiesMapType = {
      [key: string]: ActivityType[];
    };
    const activitiesMap: activitiesMapType = {};
    let tempStart: Date | null = null;
    let tempFinal: Date | null = null;

    list.forEach((activity, index) => {
      const type = activity.Type.replace(/ /g, '');
      const date = activity.Start;

      if (index === 0) {
        tempStart = date;
        tempFinal = date;
      } else {
        if (tempStart !== null && moment(date).isBefore(moment(tempStart)))
          tempStart = date;

        if (tempFinal !== null && moment(date).isAfter(moment(tempFinal)))
          tempFinal = date;
      }

      if (!activitiesMap[type]) activitiesMap[type] = [];
      activitiesMap[type].push(activity);
    });

    setActive(true);

    setStartDate(tempStart);
    setFinalDate(tempFinal);

    setActivities(
      Object.keys(activitiesMap).map((name) => {
        return {
          type: name,
          list: activitiesMap[name],
        };
      })
    );
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        addActivities,
        isActive,
        startDate,
        finalDate,
      }}
    >
      {props.children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
