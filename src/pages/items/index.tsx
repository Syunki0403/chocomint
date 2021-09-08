import React from 'react';
/* components */
import { SearchItems } from '../../components/pages/items/index';
import { BaseDivider } from '../../components/uiParts/index';

const Items: React.FC = () => {
  return (
    <div>
      <SearchItems />
      <BaseDivider />
    </div>
  );
};

export default Items;
