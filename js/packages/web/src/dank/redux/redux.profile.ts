import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  connected: false,
  nuggets: {
    owned: [] as any,
    created: [] as any,
  },
  auctions: [] as any,
  auction: {} as any,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload ?? false;
    },
    setConnected(state, action) {
      state.connected = action.payload ?? false;
    },
    setNuggets(state, action) {
      state.nuggets.owned = action.payload ?? [];
    },
    setAuctions(state, action) {
      state.auctions = action.payload ?? [];
    },
    setAuction(state, action) {
      state.auction = action.payload ?? {};
    },
  },
});

export const { setLoading, setConnected, setNuggets, setAuctions, setAuction } =
  profileSlice.actions;
