import { takeLatest, put } from 'redux-saga/effects'

import { Actions as Action } from './slice';

function* showMenu({ payload }) {
  yield put(Action.Creators.handleSidebar(false))
}

function* saga() {
  yield takeLatest(Action.Types.SHOW_SIDEBAR, showMenu)
}

export default saga
