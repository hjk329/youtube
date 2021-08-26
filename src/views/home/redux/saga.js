import {
  takeLatest, put, call, all, select,
} from 'redux-saga/effects';

import { API } from '../../../api/request';
import { getVideos, setNextPageToken, setVideos } from './slice';

function* getVideoSaga({ payload }) {
  const videos = yield call(API.getVideos, payload)
  const { nextPageToken } = videos.data
  yield put(setNextPageToken(nextPageToken))
  const result = yield all(videos.data.items.map(async (item) => {
    const channelResult = await API.getChannel({
      id: item.snippet.channelId,
      part: 'snippet',
    })
    return {
      ...item,
      channel: channelResult.data.items[0].snippet,
    }
  }))
  const state = yield select()
  const prevVideos = state.home.video
  yield put(setVideos([
    ...prevVideos,
    ...result,
  ]))
}

function* saga() {
  yield takeLatest(getVideos.type, getVideoSaga)
}

export default saga;
