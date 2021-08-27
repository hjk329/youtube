import {
  takeLatest, call, put, all,
} from 'redux-saga/effects'

import { setWatchVideo, watchVideo } from './slice';
import { API } from '../../../api/request';

function* watchVideoSaga({ payload }) {
  const video = yield call(API.watchVideoItem, payload)
  const result = yield all(video.data.items.map(async (item) => {
    const channelResult = await API.getChannel({
      id: item.snippet.channelId,
      part: 'snippet',
    })
    return {
      ...item,
      channel: channelResult.data.items[0].snippet,
    }
  }))
  yield put(setWatchVideo(result))
}

function* saga() {
  yield takeLatest(watchVideo.type, watchVideoSaga)
}

export default saga;
