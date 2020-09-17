import axiosClient from './axiosClient';

export const AUTH_API = {
  signIn: '/auth/login',
  signUp: '/auth/register',
};

const authApi = {
  signIn: async payload => {
    return await axiosClient.post(AUTH_API.signIn, { ...payload });
  },
  signUp: async payload => {
    return await axiosClient.post(AUTH_API.signUp, { ...payload });
  },
};

export default authApi;
