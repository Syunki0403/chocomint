import React from 'react';
/* components */
import { SearchItems, ItemList } from '../../components/pages/items/index';
import { BaseDivider } from '../../components/uiParts/index';

const Items: React.FC = () => {
  return (
    <div>
      <SearchItems />
      <BaseDivider />
      <ItemList />
    </div>
  );
};

export default Items;
