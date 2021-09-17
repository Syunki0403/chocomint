import React from 'react';
/* components */
import {
  FirstView,
  AboutChocomintou,
  RecommendItems,
  ChocomintKatsu,
} from '../components/pages/home/index';
import { BaseDivider } from '../components/uiParts/index';
import { CommonWrapTemplate } from '../components/layout/index';

const Home: React.FC = () => {
  return (
    <CommonWrapTemplate>
      <FirstView />
      <RecommendItems />
      <BaseDivider />
      <AboutChocomintou />
      <BaseDivider />
      <ChocomintKatsu />
    </CommonWrapTemplate>
  );
};

export default Home;
