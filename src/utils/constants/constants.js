export const API_BASE_URL = 'http://tickets-tahiti-api.bustedgame.site/api/v1';
export const AUTH_TOKEN = 'auth_token';
export const REFRESH_TOKEN = 'refresh_token';

export const MENU_KEYS = {
  DASHBOARD: 'DASHBOARD',
  MOVIES: 'MOVIES',
};

export const ERROR_MESSAGE_CODE = {
  INCORRECT_EMAIL_OR_PASSWORD: 'Email or password incorrect',
  EMAIL_EXIST: 'Email is exist',
};

export const countries = [
  {
    id: 1,
    name: 'Vietnam',
    alpha2Code: 'VN',
    alpha3Code: 'VNM',
    unCode: '704',
  },
  {
    id: 2,
    name: 'U.S.A',
    alpha2Code: 'US',
    alpha3Code: 'USA',
    unCode: '840',
  },
  {
    id: 5,
    name: 'Japan',
    alpha2Code: 'JP',
    alpha3Code: 'JPN',
    unCode: '392',
  },
];

export const citiesOfCountry = [
  {
    id: 1,
    name: 'Da Nang',
    cityCode: '550000',
    countryCode: '704',
  },
  {
    id: 2,
    name: 'Ha Noi',
    cityCode: '660000',
    countryCode: '704',
  },
  {
    id: 3,
    name: 'Sai Gon',
    cityCode: '770000',
    countryCode: '704',
  },
  {
    id: 4,
    name: 'New York',
    cityCode: '110000',
    countryCode: '840',
  },
  {
    id: 5,
    name: 'California',
    cityCode: '110002',
    countryCode: '840',
  },
  {
    id: 6,
    name: 'Tokyo',
    cityCode: '300000',
    countryCode: '392',
  },
  {
    id: 7,
    name: 'Osaka',
    cityCode: '300002',
    countryCode: '392',
  },
];
