import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

import { authRoutes, privateRoutes } from '../../utils/constants/routes';

const { Content } = Layout;

const RoutesComponent = () => (
  <Content>
    <Router>
      <Switch>
        {authRoutes.map(route => (
          <AuthRoute
            key={route.path}
            path={route.path}
            component={route.component}
            routes={route.routes}
          />
        ))}

        {privateRoutes.map(route => (
          <PrivateRoute
            key={route.path}
            exact={!!route.exact}
            path={route.path}
            component={route.component}
            routes={route.routes}
          />
        ))}
      </Switch>
    </Router>
  </Content>
);

export default RoutesComponent;
