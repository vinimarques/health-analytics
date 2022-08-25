import { Colors } from '@constants/enums';
import { ModalType, DotType } from '@constants/types';
import styled from 'styled-components';

export const ModalWrapper = styled.div<ModalType>`
  background-color: ${Colors.MODAL};
  position: fixed;
  z-index: 13;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  transform: translate3d(100%, 0, 0);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.actived &&
    `  transform: translate3d(0, 0, 0);
`}
`;

export const ModalContent = styled.div`
  background-color: ${Colors.WHITE};
  position: relative;
  padding: 100px 30px 30px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  border-radius: 5px;

  p {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;

export const CloseButton = styled.div`
  padding: 4px;
  position: absolute;
  top: 35px;
  right: 30px;
  background: ${Colors.BLACK};
  border-radius: 100%;
`;

export const CloseIcon = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  position: relative;
  width: 25px;
  height: 25px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${Colors.WHITE};
    border-radius: 3px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const SliderWrapper = styled.div`
  padding: 30px 0 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 20px;
    padding-top: 15px;
  }

  img {
    border-radius: 8px;
    max-height: 55vh;
  }
`;

export const Pagination = styled.ul`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

export const Dot = styled.li<DotType>`
  display: block;
  width: 8px;
  height: 8px;
  background: ${Colors.LIGHTGREY};
  border-radius: 100%;
  margin: 0 5px;
  transition: all 0.3s;

  ${(props) =>
    props.actived &&
    `  background: ${Colors.BLACK};
`}
`;
