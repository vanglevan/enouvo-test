import axiosClient from './axiosClient';

export const MOVIES_API = {
  getAllMovies: '/movies',
};

const moviesApi = {
  getAllMovies: async params => {
    return await axiosClient.get(MOVIES_API.getAllMovies, { params });
  },
};

export default moviesApi;
