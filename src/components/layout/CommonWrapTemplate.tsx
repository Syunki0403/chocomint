import React, { ReactNode } from 'react';
/* components */
import { Header } from './index';

type TCommonWrapTemplate = {
  children: ReactNode;
};

const CommonWrapTemplate = ({ children }: TCommonWrapTemplate) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default CommonWrapTemplate;
