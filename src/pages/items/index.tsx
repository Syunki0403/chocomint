import React from 'react';
/* components */
import { CommonWrapTemplate } from '../../components/layout/index';
import { SearchItems, ItemList } from '../../components/pages/items/index';
import { BaseDivider } from '../../components/uiParts/index';

const Items: React.FC = () => {
  return (
    <CommonWrapTemplate>
      <SearchItems />
      <BaseDivider />
      <ItemList />
    </CommonWrapTemplate>
  );
};

export default Items;
