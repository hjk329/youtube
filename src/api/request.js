import { request, requestConstants } from './index';

export const API = {
  getVideos: (data) => request(requestConstants.GET, '/videos', data),
  watchVideoItem: (id) => request(requestConstants.GET, '/videos', id),

  getChannel: (data) => request(requestConstants.GET, '/channels', data),

  getCategories: (data) => request(requestConstants.GET, '/videoCategories', data),

}
