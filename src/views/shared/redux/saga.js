import {
  takeLatest, put, select, call,
} from 'redux-saga/effects';

import {
  getChannelSection,
  setChannelSection,
  setShowAnimationSidebar, setShowShortcuts,
  showAnimationSidebar, showShortcuts,
} from './slice';
import { API } from '../../../api/request';

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

function* getChannelSectionSaga({ payload }) {
  const result = yield call(API.getChannelSection, payload)
  yield put(setChannelSection(result.data))
}

function* saga() {
  yield takeLatest(showShortcuts.type, showShortcutsSaga)
  yield takeLatest(showAnimationSidebar.type, showAnimationSidebarSaga)
  yield takeLatest(getChannelSection.type, getChannelSectionSaga)
}

export default saga;
