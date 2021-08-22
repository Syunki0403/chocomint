import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice, initialState as userInitialState } from './slices/user';

const rootReducer = combineReducers({
  userState: userSlice.reducer,
});

const preloadedState = () => {
  return { userState: userInitialState };
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
