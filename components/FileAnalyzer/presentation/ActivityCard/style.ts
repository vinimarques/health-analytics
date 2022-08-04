import styled from 'styled-components';
import { Colors } from '@constants/enums';

const size = '320px';

export const ActivityWrapper = styled.li`
  width: ${size};
  height: ${size};
  padding: 2rem 3rem 0 3rem;
  box-sizing: border-box;
  border-radius: 100%;
  background: ${Colors.CARD};
  text-align: center;
  margin-bottom: 2rem;

  img {
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 1.2rem;
  }

  h3 {
    font-size: 2.6rem;
    font-weight: 500;
    padding-bottom: 1.4rem;
  }

  p {
    font-size: 0.9rem;
    padding-bottom: 0.5rem;
    strong {
      font-weight: 500;
    }
  }
`;

export const ImageWrapper = styled.div`
  padding-bottom: 1.2rem;
`;
