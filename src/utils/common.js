import { AUTH_TOKEN } from './constants/constants';

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item,
    }),
    initialValue,
  );
};

function setLocalStorage(key = AUTH_TOKEN, value) {
  window.localStorage.setItem(key, value);
}

function getLocalStorage(key = AUTH_TOKEN) {
  return window.localStorage.getItem(key);
}

function removeLocalStorage(key = AUTH_TOKEN) {
  window.localStorage.removeItem(key);
}

function isAuthenticated() {
  if (typeof window === 'undefined') return true;
  const token = getLocalStorage(AUTH_TOKEN);

  if (token) {
    return token;
  }

  return false;
}

export {
  isAuthenticated,
  convertArrayToObject,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
};
