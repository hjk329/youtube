import { createSlice, createAction } from '@reduxjs/toolkit'

export const watchVideo = createAction('watch/watchVideo')
export const getComments = createAction('watch/getComments')
export const getPlaylists = createAction('watch/getPlaylists')

const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    result: [],
    comments: {
      nextPageToken: {},
    },
    playlist: {},
  },
  reducers: {
    setWatchVideo: (state, { payload }) => {
      state.result = payload;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
    setNextPageToken: (state, { payload }) => {
      state.comments.nextPageToken = payload;
    },
    setPlaylists: (state, { payload }) => {
      state.playlist = payload;
    },
  },
})

export const {
  setWatchVideo, setComments, setNextPageToken, setPlaylists,
} = watchSlice.actions;
export default watchSlice.reducer;
