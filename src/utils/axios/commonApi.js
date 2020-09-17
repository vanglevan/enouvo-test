import axios from 'axios';
import { isAuthenticated } from '../utils';
import { API_CONFIG } from './config';

const axiosInstant = axios.create(API_CONFIG);

axiosInstant.interceptors.request.use(
  config => {
    if (isAuthenticated()) {
      config.headers['Authorization'] = isAuthenticated();
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
