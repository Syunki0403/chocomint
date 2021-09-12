import React from 'react';
/* components */
import {
  FirstView,
  AboutChocomintou,
  RecommendItems,
  ChocomintKatsu,
  Header,
} from '../components/pages/home/index';
import { BaseDivider } from '../components/uiParts/index';

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
