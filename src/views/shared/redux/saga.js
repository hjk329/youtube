import { put, takeLatest } from 'redux-saga/effects'

import { handleNormalSidebar, handleShortcut } from './slice';

function* setShortcutSaga({ payload }) {
  yield put(handleShortcut(!payload))
}

function* saga() {
  yield takeLatest(handleNormalSidebar.type, setShortcutSaga)
}

export default saga;
