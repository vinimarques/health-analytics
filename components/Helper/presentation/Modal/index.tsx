import React, { FC, useContext } from 'react';
import Carousel from 'nuka-carousel';
import {
  CloseButton,
  CloseIcon,
  ModalContent,
  ModalWrapper,
  SliderWrapper,
} from './style';

import Image from 'next/image';
import Screen1 from '@public/assets/img/screens/screen_1.png';
import Screen2 from '@public/assets/img/screens/screen_2.png';
import Screen3 from '@public/assets/img/screens/screen_3.png';
import Screen4 from '@public/assets/img/screens/screen_4.png';
import Screen5 from '@public/assets/img/screens/screen_5.png';
import Screen6 from '@public/assets/img/screens/screen_6.png';
import Screen7 from '@public/assets/img/screens/screen_7.png';

import { AppContext } from '@context';

const Modal: FC = () => {
  const { modalActived, setModal } = useContext(AppContext);

  const closeModal = () => {
    setModal(!modalActived);
  };

  return (
    <ModalWrapper actived={modalActived}>
      <ModalContent>
        <CloseButton
          data-testid="close_moda_button"
          onClick={() => closeModal()}
        >
          <CloseIcon />
        </CloseButton>
        <p>
          This project aims to analyze the data that is exported from the
          &quot;Workout - CSV Exporter&quot; App.
        </p>
        <Carousel
          renderCenterLeftControls={() => {
            return '';
          }}
          renderCenterRightControls={() => {
            return '';
          }}
        >
          <SliderWrapper>
            <Image src={Screen1} alt="App" />
            <p>Open the App</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen2} alt="App" />
            <p>Click on share button.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen3} alt="App" />
            <p>Click on &quot;All workouts&quot; to filter period.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen4} alt="App" />
            <p>Select the period you want to analyze.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen5} alt="App" />
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen6} alt="App" />
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen7} alt="App" />
            <p>Select &quot;Only General Data&quot;.</p>
          </SliderWrapper>
        </Carousel>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
