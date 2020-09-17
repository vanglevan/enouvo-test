import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import moviesReducer from '../features/Movies/moviesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});
