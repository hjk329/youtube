import { createAction, createSlice } from '@reduxjs/toolkit';

export const searchVideos = createAction('search/searchVideos')

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
  },
  reducers: {
    setSearchVideos: (state, { payload }) => {
      state.results = payload;
    },
  },
})

export const { setSearchVideos } = searchSlice.actions;
export default searchSlice.reducer;
