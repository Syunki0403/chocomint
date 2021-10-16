import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice, initialState as userInitialState } from './slices/user';
import { snackbarSlice, initialState as snackbarInitialState } from './slices/snackbar';

const rootReducer = combineReducers({
  snackbarState: snackbarSlice.reducer,
});

const preloadedState = () => {
  return { snackbarState: snackbarInitialState };
};

// NOTE ログを本番環境には出ないようにする。
const middlewareList = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') {
  middlewareList.push(logger);
}

const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default store;
