import React from 'react';
/* components */
import {
  FirstView,
  AboutChocomintou,
  RecommendItems,
  ChocomintKatsu,
} from '../components/pages/home/index';
import { BaseDivider } from '../components/uiParts/index';

const Home: React.FC = () => {
  return (
    <div>
      <FirstView />
      <RecommendItems />
      <BaseDivider />
      <AboutChocomintou />
      <BaseDivider />
      <ChocomintKatsu />
    </div>
  );
};

export default Home;
