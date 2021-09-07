import { createSlice, createAction } from '@reduxjs/toolkit'

export const watchVideo = createAction('watch/watchVideo')
export const getComments = createAction('watch/getComments')
export const getRelatedVideos = createAction('watch/getRelatedVideos')

const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    result: [],
    comments: {
      nextPageToken: {},
    },
    related: [
    ],
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
    setRelatedVideos: (state, { payload }) => {
      state.related = payload;
    },
  },
})

export const {
  setWatchVideo, setComments, setNextPageToken, setRelatedVideos,
} = watchSlice.actions;
export default watchSlice.reducer;
