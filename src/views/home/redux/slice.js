import { createAction, createSlice } from '@reduxjs/toolkit';

export const getVideos = createAction('home/getVideos');

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    video: [],
  },
  reducers: {
    setVideos: (state, { payload }) => {
      state.video = payload;
    },
  },
})

export const { setVideos } = homeSlice.actions;

export default homeSlice.reducer;
