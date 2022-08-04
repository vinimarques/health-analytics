import { formatDate } from '@utils/time';
import { HeaderWrapper } from './style';

type HeaderType = {
  startDate: Date | null;
  finalDate: Date | null;
};

const HeaderActivities = ({ startDate, finalDate }: HeaderType) => {
  return (
    <HeaderWrapper>
      <span>{startDate && formatDate(startDate)}</span>
      <span>{finalDate && formatDate(finalDate)}</span>
    </HeaderWrapper>
  );
};

export default HeaderActivities;
