import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DBItemObj } from '../../types/Item';

export type ItemState = {
  item: DBItemObj;
  items: DBItemObj[];
};

export const initialState: ItemState = {
  item: {
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
  },
  items: [],
};

export const userSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {},
});
