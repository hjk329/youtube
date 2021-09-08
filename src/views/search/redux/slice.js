import { createAction, createSlice } from '@reduxjs/toolkit';

export const searchVideos = createAction('search/searchVideos')
export const getPlaylist = createAction('search/getPlaylist')
export const getChannelSection = createAction('search/getChannelSection')

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    playlist: {},
    channelSection: {},
  },
  reducers: {
    setSearchVideos: (state, { payload }) => {
      state.results = payload;
    },
    setPlaylist: (state, { payload }) => {
      state.playlist = payload;
    },
    setChannelSection: (state, { payload }) => {
      state.channelSection = payload;
    },
  },
})

export const { setSearchVideos, setPlaylist, setChannelSection } = searchSlice.actions;
export default searchSlice.reducer;
