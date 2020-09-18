import AuthPage from '../../features/Auth/Loadable';
import SignInPage from '../../features/Auth/SignIn';
import SignUpPage from '../../features/Auth/SignUp';
import SecurityLayout from '../../layouts/SecurityLayout';
import DashboardPage from '../../features/Dashboard/Loadable';
import MoviesPage from '../../features/Movies/Loadable';
import PageNotFound from '../../features/PageNotFound';

const HOME = '/';
const MOVIES = 'movies';
const USER = 'user';
const LOGIN = 'login';
const REGISTER = 'register';
const PAGE_NOT_FOUND = '**';

const authRoutes = [
  {
    path: '/user',
    component: AuthPage,
    routes: [
      {
        path: '/user/login',
        exact: true,
        name: 'signIn',
        component: SignInPage,
      },
      {
        path: '/user/register',
        exact: true,
        name: 'signUp',
        component: SignUpPage,
      },
    ]
  },
];

const privateRoutes = [
  {
    path: '/',
    component: SecurityLayout,
    routes: [
      {
        path: HOME,
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
      {
        path: PAGE_NOT_FOUND,
        name: 'pageNotFound',
        component: PageNotFound,
      },
    ],
  },
];

export { 
  HOME,
  MOVIES,
  USER,
  LOGIN,
  REGISTER,
  PAGE_NOT_FOUND,
  authRoutes,
  privateRoutes,
};
