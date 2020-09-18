import { createSlice } from '@reduxjs/toolkit';

import moviesApi from '../../api/moviesApi';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: null,
    total: 0,
    isFetching: false,
  },
  reducers: {
    getMovies: state => {
      state.isFetching = true;
    },
    getMoviesSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload && action.payload.results;
      state.total = action.payload && action.payload.total;
    },
    getMoviesFailure: state => {
      state.isFetching = false;
      state.data = null;
      state.total = 0;
    },
  },
});

export const { getMovies, getMoviesSuccess, getMoviesFailure } = moviesSlice.actions;

export const getMoviesAsync = params => async dispatch => {
  try {
    const response = await moviesApi.getAllMovies(params);
    dispatch(getMoviesSuccess(response && response.data));
  } catch (error) {
    console.log('getMoviesAsync - error', error)
    dispatch(getMoviesFailure());
  }
};

export const selectMovies = state => state.movies.data;
export const selectTotalMovies = state => state.movies.total;
export const selectIsFetchingMovies = state => state.movies.isFetching;

export default moviesSlice.reducer;
