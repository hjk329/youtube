import { takeLatest, put, call } from 'redux-saga/effects';

import { API } from '../../../api/request';

function* getVideo({ payload }) {
  const result = yield call(API.getVideos, payload)
}

function* saga() {
  yield console.log('connected')
}

export default saga
