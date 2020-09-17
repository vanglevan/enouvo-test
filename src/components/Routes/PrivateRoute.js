/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../utils/common';
// import { ROUTE } from '../../utils/constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{ pathname: '/user/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
