import { request, requestConstants } from './index';

export const API = {
  getVideos: (data) => request(requestConstants.GET, '/videos', data),

  getChannel: (data) => request(requestConstants.GET, '/channels', data),

  getComments: (data) => request(requestConstants.GET, '/commentThreads', data),

  getCategories: (data) => request(requestConstants.GET, '/videoCategories', data),

}
