import { Colors } from '@constants/enums';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  background-color: ${Colors.GREY};
  box-sizing: border-box;
  padding: 1rem 2rem;
  z-index: 10;
  color: ${Colors.WHITE};
  display: flex;
  justify-content: space-between;
`;
