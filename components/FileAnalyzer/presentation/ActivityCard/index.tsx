import Image from 'next/image';
import { ActivitiesItemType } from '@constants/types';
import { formatTime, timestrToSec } from '@utils/time';

import { ActivityWrapper, ImageWrapper } from './style';

interface PropType {
  data: ActivitiesItemType;
}

const ActivityCard = ({ data }: PropType) => {
  const { list } = data;
  const count: number = list.length;
  let energy = 0;
  let totalTime = 0;
  const title: string = list[0].Type;

  list.forEach((item) => {
    energy += parseInt(item['Total Energy']);
    const time = timestrToSec(item.Duration);
    totalTime += time;
  });

  return (
    <ActivityWrapper>
      <ImageWrapper>
        <Image
          src={require(`@public/assets/img/${data.type}.png`)}
          alt={`${data.type}`}
          width="50"
          height="50"
        />
      </ImageWrapper>
      <h2>{title}</h2>
      <h3>{count}</h3>
      <p>
        Total durations: <strong>{formatTime(totalTime)}</strong>
      </p>
      <p>
        Total energy: <strong>{energy} kcal</strong>
      </p>
    </ActivityWrapper>
  );
};

export default ActivityCard;
