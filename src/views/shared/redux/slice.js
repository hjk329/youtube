import { createAction, createSlice } from '@reduxjs/toolkit';

export const showShortcuts = createAction('app/showShortcuts')
export const closeSidebar = createAction('app/closeSidebar')

export const showAnimationSidebar = createAction('app/showAnimationSidebar')
export const closeAnimationSidebar = createAction('app/closeAnimationSidebar')

const sidebarSlice = createSlice({
  name: 'app',
  initialState: {
    shortcuts: false,
    animationSidebar: false,
  },
  reducers: {
    setShowShortcuts: (state, { payload }) => {
      state.shortcuts = payload
    },
    setShowAnimationSidebar: (state, { payload }) => {
      state.animationSidebar = payload
    },
  },
})

export const { setShowShortcuts, setShowAnimationSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
