import { selector } from 'recoil';
import { itemListState } from '../atoms/item';
import { getItemList } from '../../modules/item';

export const filterItemId = selector({
  key: 'filterItemId',
  get: ({ get }) => {
    const itemList = get(itemListState);

    itemList.find((item) => {
      return item.id;
    });
  },
});
