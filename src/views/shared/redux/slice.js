import { createAction, createSlice } from '@reduxjs/toolkit';

export const showShortcuts = createAction('app/showShortcuts')
export const showAnimationSidebar = createAction('app/showAnimationSidebar')
export const getChannelSection = createAction('app/getChannelSection')

const appSlice = createSlice({
  name: 'app',
  initialState: {
    shortcuts: false,
    animationSidebar: false,
    channelSection: {},
  },
  reducers: {
    setShowShortcuts: (state, { payload }) => {
      state.shortcuts = payload
    },
    setShowAnimationSidebar: (state, { payload }) => {
      state.animationSidebar = payload
    },
    setChannelSection: (state, { payload }) => {
      state.channel = payload
    },
  },
})

export const { setShowShortcuts, setShowAnimationSidebar, setChannelSection } = appSlice.actions;
export default appSlice.reducer;
