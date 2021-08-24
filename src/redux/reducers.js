import { combineReducers } from 'redux';

import homeReducer from '../views/home/redux/slice';

const rootReducer = combineReducers({
  home: homeReducer,
})

export default rootReducer;
