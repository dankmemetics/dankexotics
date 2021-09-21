import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { searchSlice } from './redux.search';
import { profileSlice } from './redux.profile';

export function makeStore() {
  return configureStore({
    reducer: {
      search: searchSlice.reducer,
      profile: profileSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
