import { createAction, createSlice } from '@reduxjs/toolkit';

export const getVideos = createAction('home/getVideos');

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    video: [],
    nextToken: [],
  },
  reducers: {
    setVideos: (state, { payload }) => {
      state.video = payload;
    },
    setNextPageToken: (state, { payload }) => {
      state.nextToken = payload;
    },
  },
})

export const { setVideos, setNextPageToken } = homeSlice.actions;

export default homeSlice.reducer;
