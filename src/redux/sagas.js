import { fork, all } from 'redux-saga/effects';

import appSaga from '../views/shared/redux/saga';
import homeSaga from '../views/home/redux/saga';
import watchSaga from '../views/watch/redux/saga';
import searchSaga from '../views/search/redux/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(homeSaga),
    fork(watchSaga),
    fork(searchSaga),
  ])
}
export default sagas;
