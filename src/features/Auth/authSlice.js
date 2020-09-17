import { createSlice } from '@reduxjs/toolkit';

import { setLocalStorage } from '../../utils/common';
import { AUTH_TOKEN } from '../../utils/constants/constants';
import authApi from '../../api/authApi';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    signIn: state => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    signInFailure: state => {
      state.isLoading = false;
      state.user = null;
    },
    signUp: state => {
      state.isLoading = true;
    },
    signUpSuccess: state => {
      state.isLoading = false;
    },
    signUpFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { signIn, signInSuccess, signInFailure, signUp, signUpSuccess, signUpFailure } = authSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const signInAsync = payload => async dispatch => {
  try {
    console.log('payload', payload);
    const response = await authApi.signIn(payload);
    console.log('response', response);
    setLocalStorage(AUTH_TOKEN, response && response.data && response.data.token);
    dispatch(signInSuccess(response && response.data));
  } catch (error) {
    dispatch(signInFailure());
  }
};

export const signUpAsync = payload => async dispatch => {
  try {
    console.log('payload', payload);
    const response = await authApi.signUp(payload);
    console.log('response', response);
    // dispatch(signUpSuccess(response));
  } catch (error) {
    console.log('error', error);
  }
};

export const selectUser = state => state.auth.user;

export default authSlice.reducer;
