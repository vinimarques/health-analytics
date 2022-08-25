import { Colors } from '@constants/enums';
import styled from 'styled-components';

export const ButtonHelper = styled.button`
  position: fixed;
  z-index: 11;
  top: 35px;
  right: 30px;
  background: ${Colors.RED};
  appearance: none;
  border: none;
  color: ${Colors.BLACKGREY};
  font-weight: 500;
  font-size: 20px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-family: 'Roboto';
`;
