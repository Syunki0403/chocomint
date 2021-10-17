import React, { ReactNode } from 'react';
/* components */
import { Header, Footer } from './index';

type TCommonWrapTemplate = {
  children: ReactNode;
};

const CommonWrapTemplate = ({ children }: TCommonWrapTemplate) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CommonWrapTemplate;
