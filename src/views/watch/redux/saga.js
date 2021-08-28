import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects'

import {
  getComments,
  getRelatedVideos,
  setComments,
  setNextPageToken, setRelatedVideos,
  setWatchVideo,
  watchVideo,
} from './slice';
import { API } from '../../../api/request';

function* watchVideoSaga({ payload }) {
  const video = yield call(API.getVideos, payload)
  const result = yield all(video.data.items.map(async (item) => {
    const channelResult = await API.getChannel({
      id: item.snippet.channelId,
      part: 'snippet, statistics',
    })
    return {
      ...item,
      channel: channelResult.data.items[0],
    }
  }))
  yield put(setWatchVideo(result))
}

function* getCommentsSaga({ payload }) {
  const result = yield call(API.getComments, payload)
  const { nextPageToken } = result.data
  yield put(setNextPageToken(nextPageToken))
  const state = yield select()
  const prevComments = state.watch.comments
  yield put(setComments({
    ...prevComments,
    ...result.data,
  }))
}

function* getPlaylistsSaga({ payload }) {
  const result = yield call(API.getVideos, payload)
  yield put(setRelatedVideos(result.data))
}

function* saga() {
  yield takeLatest(watchVideo.type, watchVideoSaga)
  yield takeLatest(getComments.type, getCommentsSaga)
  yield takeLatest(getRelatedVideos.type, getPlaylistsSaga)
}

export default saga;
