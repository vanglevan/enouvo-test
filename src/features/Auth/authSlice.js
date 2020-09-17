/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage, removeLocalStorage } from '../../utils/common';
import { AUTH_TOKEN, ERROR_MESSAGE_CODE } from '../../utils/constants/constants';
import authApi from '../../api/authApi';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    signInError: null,
    signUpError: null,
  },
  reducers: {
    signIn: state => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.signInError = null;
    },
    signInFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.signInError = action.payload;
    },
    signUp: state => {
      state.isLoading = true;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.signUpError = null;
    },
    signUpFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.signUpError = action.payload;
    },
    getOwnerUserInfoSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signIn, signInSuccess, signInFailure, signUp, signUpSuccess, signUpFailure, getOwnerUserInfoSuccess } = authSlice.actions;

export const signInAsync = payload => async dispatch => {
  try {
    const response = await authApi.signIn(payload);
    setLocalStorage(AUTH_TOKEN, response && response.data && response.data.token);
    dispatch(signInSuccess(response && response.data));
    return response && response.data;
  } catch (error) {
    console.log('signInAsync - error', error);
    if (error && error.response && error.response.data && error.response.data.messageCode) {
      dispatch(signInFailure(ERROR_MESSAGE_CODE[error.response.data.messageCode]));
    }
    return null;
  }
};

export const signUpAsync = payload => async dispatch => {
  try {
    const response = await authApi.signUp(payload);
    setLocalStorage(AUTH_TOKEN, response && response.data && response.data.token);
    dispatch(signUpSuccess(response && response.data));
    return response && response.data;
  } catch (error) {
    console.log('signUpAsync - error', error);
    if (error && error.response && error.response.data && error.response.data.messageCode) {
      dispatch(signUpFailure(ERROR_MESSAGE_CODE[error.response.data.messageCode]));
    }
    return null;
  }
};

export const logOutAsync = () => async dispatch => {
  try {
    const response = await authApi.logOut();
    removeLocalStorage(AUTH_TOKEN);
    return response && response.data;
  } catch (error) {
    console.log('logOutAsync - error', error);
    return null;
  }
};

export const getOwnerUserInfoAsync = () => async dispatch => {
  try {
    const response = await authApi.getOwnerUserInfo();
    dispatch(getOwnerUserInfoSuccess(response && response.data));
  } catch (error) {
    console.log('getOwnerUserInfoAsync - error', error);
  }
};

export const selectUser = state => state.auth.user;
export const selectSignInError = state => state.auth.signInError;
export const selectSignUpError = state => state.auth.signUpError;

export default authSlice.reducer;
