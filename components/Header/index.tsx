// src/components/helloWorld.tsx
import React, { FC } from 'react';
import { HeaderWrapper } from './style';

import HealthImage from '@public/assets/img/healthcare.png';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Image src={HealthImage} alt="Health Analytics" width="50" height="50" />
      <h1>Health Analytics</h1>
    </HeaderWrapper>
  );
};

export default Header;
