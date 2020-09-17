/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { HOME } from '../../utils/constants/routes';
import { isAuthenticated } from '../../utils/common';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} {...rest} />
      )
    }
  />
);

export default AuthRoute;
