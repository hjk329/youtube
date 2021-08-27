import { fork, all } from 'redux-saga/effects';

import appSaga from '../views/shared/redux/saga';
import homeSaga from '../views/home/redux/saga';
import watchSaga from '../views/watch/redux/saga';
import categorySaga from '../views/home/categories/redux/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(homeSaga),
    fork(watchSaga),
    fork(categorySaga),
  ])
}
export default sagas;
