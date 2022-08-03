// src/components/helloWorld.tsx
import React, { FC } from 'react';
import { Header } from './style';

import HealthImage from '@public/healthcare.png';
import Image from 'next/image';

const HelloWorld: FC = () => {
  return (
    <Header>
      <Image src={HealthImage} alt="Health Analytics" width="50" height="50" />
      <h1>Health Analytics</h1>
    </Header>
  );
};

export default HelloWorld;
