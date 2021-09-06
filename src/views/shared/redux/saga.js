import { takeLatest, put, select } from 'redux-saga/effects';

import {
  setShowAnimationSidebar, setShowShortcuts,
  showAnimationSidebar, showShortcuts,
} from './slice';

function* showShortcutsSaga({ payload }) {
  const state = yield select()
  const shortcutsState = state.app.shortcuts
  yield put(setShowShortcuts(!shortcutsState))
}

function* showAnimationSidebarSaga({ payload }) {
  const state = yield select()
  const animationSidebarState = state.app.animationSidebar
  yield put(setShowAnimationSidebar(!animationSidebarState))
}

function* saga() {
  yield takeLatest(showShortcuts.type, showShortcutsSaga)
  yield takeLatest(showAnimationSidebar.type, showAnimationSidebarSaga)
}

export default saga;
