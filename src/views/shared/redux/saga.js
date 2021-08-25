import { takeLatest, put, select } from 'redux-saga/effects';

import {
  closeAnimationSidebar,
  closeSidebar,
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

function* closeSidebarSaga({ payload }) {
  yield put(setShowShortcuts(false))
}

function* closeAnimationSidebarSaga({ payload }) {
  yield put(setShowAnimationSidebar(false))
}

function* saga() {
  yield takeLatest(showShortcuts.type, showShortcutsSaga)
  yield takeLatest(showAnimationSidebar.type, showAnimationSidebarSaga)
  yield takeLatest(closeSidebar.type, closeSidebarSaga)
  yield takeLatest(closeAnimationSidebar.type, closeAnimationSidebarSaga)
}

export default saga;
