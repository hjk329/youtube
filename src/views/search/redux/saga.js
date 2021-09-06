import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import { searchVideos, setSearchVideos } from './slice';
import { API } from '../../../api/request';

function* searchVideosSaga({ payload }) {
  const video = yield call(API.searchVideos, payload)
  const result = yield all(video.data.items.map(async (item) => {
    const channelResult = await API.getChannel({
      id: item.snippet.channelId,
      part: 'snippet, statistics',
    })
    const videoInfo = await API.getVideos({
      id: item.id.videoId,
      part: 'statistics, snippet',
    })
    return {
      ...item,
      channel: channelResult.data.items[0],
      videoInfo: videoInfo.data.items[0],
    }
  }))
  yield put(setSearchVideos(result))
}

function* saga() {
  yield takeLatest(searchVideos.type, searchVideosSaga)
}

export default saga;
