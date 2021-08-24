import { combineReducers } from 'redux';

import homeReducer from '../views/home/redux/slice';
import categoryReducer from '../views/home/categories/redux/slice';

const rootReducer = combineReducers({
  home: homeReducer,
  category: categoryReducer,
})

export default rootReducer;
