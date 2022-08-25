import React, { FC, useContext } from 'react';
import { ButtonHelper } from './style';

import { AppContext } from '@context';

const Helper: FC = () => {
  const { modalActived, setModal } = useContext(AppContext);
  return <ButtonHelper onClick={() => setModal(!modalActived)}>?</ButtonHelper>;
};

export default Helper;
