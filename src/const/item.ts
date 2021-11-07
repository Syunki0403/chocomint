import { DBItemObj, TItem } from '../types/Item';

export const ITEM: TItem = {
  id: '',
  name: '',
  images: [],
  price: 0,
  shops: '',
  period_start: '',
  period_end: '',
  score_mint: 0,
  score_chocolate: 0,
  score: 0,
  supplement: '',
  user_info: {
    id: '',
    name: '',
  },
  created_at: new Date(),
  updated_at: new Date(),
};

export const DB_ITME: DBItemObj = {
  name: '',
  images: [],
  price: 0,
  shops: '',
  period_start: '',
  period_end: '',
  score_mint: 0,
  score_chocolate: 0,
  score: 0,
  supplement: '',
  user_info: {
    id: '',
    name: '',
  },
  created_at: new Date(),
  updated_at: new Date(),
};
