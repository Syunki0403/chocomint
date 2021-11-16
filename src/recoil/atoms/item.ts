import { atom } from 'recoil';
import { TItem } from '../../types/Item';
import { ITEM } from '../../const/item';

export const itemListState = atom<TItem[]>({
  key: 'itemListState',
  default: [],
});

export const itemState = atom<TItem>({
  key: 'itemState',
  default: ITEM,
});
