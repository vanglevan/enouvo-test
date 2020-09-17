import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sider from '../components/Sider';
import { SecurityLayoutWrapper, ContentWrapper } from './styled';

export function SecurityLayout(props) {
  console.log('SecurityLayout', props);

  const subRoutes = props.routes ? props.routes.map((route, index) => (
    <Route
      key={index}
      exact
      path={route.path}
      render={props => <route.component {...props} />}
    />
  )) : null;

  return (
    <SecurityLayoutWrapper>
      <Sider />
      <ContentWrapper>
        <Switch>
          {subRoutes}
        </Switch>
      </ContentWrapper>
    </SecurityLayoutWrapper>
  );
}

SecurityLayout.propTypes = {
  routes: PropTypes.array,
};

export default SecurityLayout;
