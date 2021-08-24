import {
  takeLatest, put, call, all,
} from 'redux-saga/effects';

import { API } from '../../../../api/request';
import { getCategories, setCategories } from './slice';

function* getCategoriesSaga({ payload }) {
  const result = yield call(API.getCategories, payload)
  yield put(setCategories(result.data))
}

function* saga() {
  yield takeLatest(getCategories.type, getCategoriesSaga)
}

export default saga;
