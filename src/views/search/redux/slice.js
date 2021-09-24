import { createAction, createSlice } from '@reduxjs/toolkit';

export const searchVideos = createAction('search/searchVideos')
export const getPlaylist = createAction('search/getPlaylist')

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    nextPageToken: '',
    playlist: {},
  },
  reducers: {
    setSearchVideos: (state, { payload }) => {
      state.results = payload;
    },
    setNextPageToken: (state, { payload }) => {
      state.nextPageToken = payload;
    },
    setPlaylist: (state, { payload }) => {
      state.playlist = payload;
    },
  },
})

export const {
  setSearchVideos, setNextPageToken, setPlaylist,
} = searchSlice.actions;
export default searchSlice.reducer;
