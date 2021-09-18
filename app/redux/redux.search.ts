import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  input: '',
  terpenes: {
    myrcene: true,
    caryophyllene: true,
    linalool: true,
    pinene: true,
    humulene: true,
    limonene: true,
  },
  thc: [0, 100],
  cbd: [0, 100],
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    setTerpene(state, action) {
      state.terpenes[action.payload.terpene] = action.payload.value;
    },
    setThc(state, action) {
      state.thc = action.payload;
    },
    setCbd(state, action) {
      state.cbd = action.payload;
    },
  }
});

export const { setInput, setTerpene, setThc, setCbd } = searchSlice.actions;