import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    normalSidebar: true,
    shortcut: false,
    drawerSidebar: false,
  },
  reducers: {
    handleNormalSidebar: (state, { payload }) => {
      state.normalSidebar = payload
    },
    handleShortcut: (state, { payload }) => {
      state.shortcut = payload
    },
    handleDrawerSidebar: (state, { payload }) => {
      state.drawerSidebar = payload
    },
  },
})

export const {
  handleDrawerSidebar, handleNormalSidebar, handleShortcut,
} = appSlice.actions;
export default appSlice.reducer;
