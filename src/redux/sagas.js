import { fork, all } from 'redux-saga/effects';

import homeSaga from '../views/home/redux/saga'

function* sagas() {
  yield all([
    fork(homeSaga),
  ])
}
export default sagas;
