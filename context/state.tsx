import React, { createContext, useState } from 'react';
import moment from 'moment';
import {
  ActivitiesType,
  ActivitiesContextState,
  ActivityType,
} from '@constants/types';

type Props = {
  children: React.ReactNode;
  initial?: ActivitiesContextState;
};

const contextDefaultValues: ActivitiesContextState = {
  activities: [],
  //eslint-disable-next-line
  addActivities: () => {},
  //eslint-disable-next-line
  setModal: () => {},
  isActive: false,
  startDate: null,
  finalDate: null,
  modalActived: false,
};

export const AppContext =
  createContext<ActivitiesContextState>(contextDefaultValues);

export const AppProvider = (props: Props) => {
  const { initial } = props;
  const [activities, setActivities] = useState<ActivitiesType>(
    contextDefaultValues.activities
  );

  const [isActive, setActive] = useState<boolean>(
    contextDefaultValues.isActive
  );

  const [modalActived, setModal] = useState<boolean>(
    contextDefaultValues.modalActived
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
    <AppContext.Provider
      value={
        initial || {
          activities,
          addActivities,
          isActive,
          startDate,
          finalDate,
          modalActived,
          setModal,
        }
      }
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
