import { createAction, createSlice } from '@reduxjs/toolkit';

export const getCategories = createAction('home/getCategories');

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    list: {
    },
  },
  reducers: {
    setCategories: (state, { payload }) => {
      state.list = payload
    },
  },
})

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
