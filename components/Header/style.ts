import { Colors } from '@constants/enums';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 2rem;
  background-color: ${Colors.BLACKGREY};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100px;

  h1 {
    margin-left: 1.6rem;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${Colors.WHITE};
  }
`;
