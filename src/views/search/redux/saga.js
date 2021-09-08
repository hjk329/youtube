import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import {
  getChannelSection,
  getPlaylist, searchVideos, setChannelSection, setPlaylist, setSearchVideos,
} from './slice';
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

function* getPlaylistSaga({ payload }) {
  const result = yield call(API.getPlaylists, payload)
  yield put(setPlaylist(result.data))
}

function* getChannelSectionSaga({ payload }) {
  const result = yield call(API.getChannelSection, payload)
  yield put(setChannelSection(result.data))
}

function* saga() {
  yield takeLatest(searchVideos.type, searchVideosSaga)
  yield takeLatest(getPlaylist.type, getPlaylistSaga)
  yield takeLatest(getChannelSection.type, getChannelSectionSaga)
}

export default saga;
