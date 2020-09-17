import axios from 'axios';
import { isAuthenticated } from '../utils/common';
import { API_BASE_URL } from '../utils/constants/constants';

const axiosInstant = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstant.interceptors.request.use(
  config => {
    if (isAuthenticated()) {
      config.headers.Authorization = isAuthenticated();
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosInstant.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default axiosInstant;
