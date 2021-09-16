import React from 'react';
import { BaseDivider } from '../../../components/uiParts/index';
import { ItemList, ItemReview } from '../../../components/pages/items/itemDetails/index';

const ItemDetails = () => {
  return (
    <div>
      <ItemList />
      <BaseDivider />
      <ItemReview />
    </div>
  );
};

export default ItemDetails;
