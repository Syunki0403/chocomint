import React, { useState } from 'react';
/* types */
import { TUser } from '../types/User';
/* components */
import { FirstView, AboutChocomintou } from '../components/pages/home/index';
import { BaseDivider } from '../components/uiParts/index';

const Home: React.FC = () => {
  return (
    <div>
      <FirstView />
      <BaseDivider />
      <AboutChocomintou />
    </div>
  );
};

export default Home;
