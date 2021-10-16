// 個別のストア
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSnackbar } from '../../customeHook/useSnackbarAction';

// Stateの初期状態
export const initialState: TSnackbar = {
  severity: 'info',
  open: false,
  text: '',
};

// Sliceを生成する
export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      // return Object.assign({}, state, {
      //   severity: action.payload.severity,
      //   open: action.payload.open,
      //   text: action.payload.text,
      // });
      state.severity = action.payload.severity;
      state.open = action.payload.open;
      state.text = action.payload.text;
    },
  },
});

export const { setSnackbar } = snackbarSlice.actions;
