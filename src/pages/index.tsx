import React from 'react';
/* components */
import {
  FirstView,
  AboutChocomintou,
  RecommendItems,
  ChocomintKatsu,
} from '../components/pages/home/index';
import { BaseDivider } from '../components/uiParts/index';
import { Header } from '../components/layout/index';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
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
