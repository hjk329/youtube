import axios from 'axios';

import { API_BASE_URL, API_KEY } from '../constants/common';

export const requestConstants = {
  GET: 'get',
  POST: 'post',
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export const request = (method, url, data) => {
  try {
    const config = {
      method,
      url,
    }
    if (method === 'get') {
      config.params = {
        key: API_KEY,
        ...data,
      }
    } else {
      config.body = data;
    }
    return axiosInstance(config)
  } catch (e) {
    console.log('@@e', e)
    return e
  }
}
