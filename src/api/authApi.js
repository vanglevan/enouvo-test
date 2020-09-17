import axiosClient from './axiosClient';

export const AUTH_API = {
  signIn: '/auth/login',
  signUp: '/auth/register',
  logOut: '/auth/logout',
  getOwnerUserInfo: '/users/me',
};

const authApi = {
  signIn: async payload => {
    return await axiosClient.post(AUTH_API.signIn, { ...payload });
  },
  signUp: async payload => {
    return await axiosClient.post(AUTH_API.signUp, { ...payload });
  },
  logOut: async () => {
    return await axiosClient.post(AUTH_API.logOut);
  },
  getOwnerUserInfo: async () => {
    return await axiosClient.get(AUTH_API.getOwnerUserInfo);
  },
};

export default authApi;
