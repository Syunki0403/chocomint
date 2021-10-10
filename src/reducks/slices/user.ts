import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../../types/User';
import { db } from '../../firebase/index';

export type UserState = {
  user: TUser;
};

export const initialState: UserState = {
  user: {
    id: '0000',
    name: 'test',
    created_at: new Date(),
    updated_at: new Date(),
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (state, action: PayloadAction<TUser>) => {
      const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let ranStr = '';
      for (var i = 0; i < 8; i++) {
        ranStr += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      // action.payloadプロパティに、Action Creatorに渡された引数が入っている
      state.user.id = ranStr;
      state.user.name = action.payload.name;
      state.user.created_at = action.payload.created_at;
      state.user.updated_at = action.payload.updated_at;
    },
  },
});
