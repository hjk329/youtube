import { combineReducers } from 'redux';

import appReducer from '../views/shared/redux/slice';
import homeReducer from '../views/home/redux/slice';
import watchReducer from '../views/watch/redux/slice';
import categoryReducer from '../views/home/categories/redux/slice';

const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  watch: watchReducer,
  category: categoryReducer,
})

export default rootReducer;
