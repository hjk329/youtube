import { createSlice, createAction } from '@reduxjs/toolkit'

export const watchVideo = createAction('watch/watchVideo')
export const getComments = createAction('watch/getComments')

const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    result: {},
    comments: {},
  },
  reducers: {
    setWatchVideo: (state, { payload }) => {
      state.result = payload;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
})

export const { setWatchVideo, setComments } = watchSlice.actions;
export default watchSlice.reducer;
