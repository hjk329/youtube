import { fork, all } from 'redux-saga/effects';

import homeSaga from '../views/home/redux/saga';
import categorySaga from '../views/home/categories/redux/saga';

function* sagas() {
  yield all([
    fork(homeSaga),
    fork(categorySaga),
  ])
}
export default sagas;
