import {
  takeLatest, put, call, all,
} from 'redux-saga/effects';

import { API } from '../../../api/request';
import { getVideos, setVideos } from './slice';

function* getVideoSaga({ payload }) {
  const videos = yield call(API.getVideos, payload)
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
  yield put(setVideos(result))
}

function* saga() {
  yield takeLatest(getVideos.type, getVideoSaga)
}

export default saga;
