const initialState = {
  video: {},
}

export const Action = {
  Types: {
    GET_VIDEOS: 'GET_VIDEOS',
    SET_VIDEOS: 'SET_VIDEOS',
  },
  Creators: {
    getVideos: (payload) => ({
      type: Action.Types.GET_VIDEOS,
      payload,
    }),
    setVideos: (data) => ({
      type: Action.Types.SET_VIDEOS,
      data,
    }),
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return {
      ...state,
    }
  case Action.Types.SET_VIDEOS: {
    return {
      ...state,
      video: action.data,
    }
  }
  }
}

export default reducer;

// import { createAction, createSlice } from '@reduxjs/toolkit'
//
// export const getVideos = createAction("GET_VIDEOS");
//
// const homeSlice = createSlice({
//     name: "homeReducer",
//     initialState: [],
//     reducers: {
//         setVideos: (state, action) => {
//             state.push({list: action.payload});
//         },
//     }})
//
// export const { setVideos } = homeSlice.actions;
//
// console.log(getVideos)
// console.log(homeSlice)
