import { ActivitiesContext } from '@context';
import { ActivitiesItemType } from '@constants/types';
import { useContext } from 'react';
import ActivityCard from '../ActivityCard';
import { ActivitiesWrapper } from './style';
import Header from '../Header';

const ListActivities = () => {
  const { activities, startDate, finalDate } = useContext(ActivitiesContext);

  return (
    <>
      <Header startDate={startDate} finalDate={finalDate} />
      <ActivitiesWrapper>
        {activities &&
          activities.map((item: ActivitiesItemType, index: number) => (
            <ActivityCard data={item} key={index} />
          ))}
      </ActivitiesWrapper>
    </>
  );
};

export default ListActivities;
