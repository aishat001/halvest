import { configureStore, createSlice } from '@reduxjs/toolkit';

const investmentsSlice = createSlice({
  name: 'investments',
  initialState: [],
  reducers: {
    setInvestments: (state, action) => {
      return action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    investments: investmentsSlice.reducer,
  },
});

export const { setInvestments } = investmentsSlice.actions;

export default store;
