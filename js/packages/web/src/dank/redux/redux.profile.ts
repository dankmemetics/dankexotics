import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  connected: false,
  nuggets: {
    owned: [] as any,
    created: [] as any,
  },
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
  },
});

export const { setLoading, setConnected, setNuggets } = profileSlice.actions;
