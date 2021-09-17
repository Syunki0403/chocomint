import React from 'react';
/* components */
import { CommonWrapTemplate } from '../../../components/layout/index';
import { BaseDivider } from '../../../components/uiParts/index';
import { ItemList, ItemReview } from '../../../components/pages/items/itemDetails/index';

const ItemDetails = () => {
  return (
    <CommonWrapTemplate>
      <ItemList />
      <BaseDivider />
      <ItemReview />
    </CommonWrapTemplate>
  );
};

export default ItemDetails;
