import { request, requestConstants } from './index';

export const API = {
  getVideos: (data) => request(requestConstants.GET, '/videos', data),

  getChannel: (data) => request(requestConstants.GET, '/channels', data),

  getCategories: (data) => request(requestConstants.GET, '/guideCategories', data),

}
