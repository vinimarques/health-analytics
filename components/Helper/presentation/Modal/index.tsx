import React, { FC, useContext } from 'react';
import Carousel from 'nuka-carousel';
import {
  CloseButton,
  CloseIcon,
  ModalContent,
  ModalWrapper,
  SliderWrapper,
  Pagination,
  Dot,
} from './style';

import Image from 'next/image';
import Screen1 from '@public/assets/img/screens/screen_1.jpg';
import Screen2 from '@public/assets/img/screens/screen_2.jpg';
import Screen3 from '@public/assets/img/screens/screen_3.jpg';
import Screen4 from '@public/assets/img/screens/screen_4.jpg';
import Screen5 from '@public/assets/img/screens/screen_5.jpg';
import Screen6 from '@public/assets/img/screens/screen_6.jpg';
import Screen7 from '@public/assets/img/screens/screen_7.jpg';

import { AppContext } from '@context';

type goToSlideType = (index: number) => void;

const Modal: FC = () => {
  let goToSlideInst: goToSlideType;
  const { modalActived, setModal } = useContext(AppContext);

  const closeModal = () => {
    setModal(!modalActived);
    goToSlideInst(0);
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
          renderBottomCenterControls={(props) => {
            const { currentSlide, slideCount, goToSlide } = props;
            goToSlideInst = goToSlide;
            const dots = [];

            for (let i = 0; i < slideCount; i++) {
              dots.push(
                <Dot key={i.toString()} actived={i === currentSlide} />
              );
            }

            return <Pagination>{dots}</Pagination>;
          }}
        >
          <SliderWrapper>
            <Image src={Screen1} priority={true} alt="App" />
            <p>Open the App</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen2} priority={true} alt="App" />
            <p>Click on share button.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen3} priority={true} alt="App" />
            <p>Click on &quot;All workouts&quot; to filter period.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen4} priority={true} alt="App" />
            <p>Select the period you want to analyze.</p>
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen5} priority={true} alt="App" />
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen6} priority={true} alt="App" />
          </SliderWrapper>
          <SliderWrapper>
            <Image src={Screen7} priority={true} alt="App" />
            <p>Select &quot;Only General Data&quot;.</p>
          </SliderWrapper>
        </Carousel>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
