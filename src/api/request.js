import { request, requestConstants } from './index';

export const API = {
  getVideos: (data) => request(requestConstants.GET, '/videos', data),
}
