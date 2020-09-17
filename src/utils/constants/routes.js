import { Counter } from '../../features/counter/Counter';
import AuthPage from '../../features/Auth';
import SecurityLayout from '../../layouts/SecurityLayout';
import DashboardPage from '../../features/Dashboard';
import MoviesPage from '../../features/Movies';

// const HOME = '/';
// const MOVIES = 'movies';
// const SIGN_IN = 'sign-in';
// const SIGN_UP = 'sign-up';
// const USER = 'user';
// const CATEGORY = 'category';
// const PRODUCT = 'product';
// const FEATURE = 'feature';
// const PAGE_NOT_FOUND = '**';

const authRoutes = [
  {
    path: '/user/login',
    component: AuthPage,
  },
];

const privateRoutes = [
  {
    path: '/',
    component: SecurityLayout,
    routes: [
      {
        path: '/',
        exact: true,
        name: 'dashboard',
        component: DashboardPage,
      },
      {
        path: '/movies',
        exact: true,
        name: 'movies',
        component: MoviesPage,
      },
      // {
      //   path: '**',
      //   name: 'pageNotFound',
      //   icon: 'table',
      //   component: null,
      // },
    ],
  },
];

export { 
  // HOME,
  // MOVIES,
  // PAGE_NOT_FOUND,
  authRoutes,
  privateRoutes,
};
