import { atom } from 'recoil';
import { TItem } from '../../types/Item';

export const itemListState = atom<TItem[]>({
  key: 'itemListState',
  default: [],
});
