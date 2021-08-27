import { createSlice, createAction } from '@reduxjs/toolkit'

export const watchVideo = createAction('watch/watchVideo')

const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    result: {},
  },
  reducers: {
    setWatchVideo: (state, { payload }) => {
      state.result = payload;
    },
  },
})

export const { setWatchVideo } = watchSlice.actions;
export default watchSlice.reducer;
