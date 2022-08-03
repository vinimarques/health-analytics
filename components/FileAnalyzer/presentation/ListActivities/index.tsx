import { ActivitiesContext } from '@context';
import { useContext } from 'react';

const ListActivities = () => {
  const { activities } = useContext(ActivitiesContext);
  return (
    <ul>
      {activities.map((item, index) => (
        <li key={`${item.Type}_${index}`}>{item.Type}</li>
      ))}
    </ul>
  );
};

export default ListActivities;
