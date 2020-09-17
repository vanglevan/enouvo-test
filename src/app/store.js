import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import moviesReducer from '../features/Movies/moviesSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    counter: counterReducer,
  },
});
