/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Img from '../components/Img';

const UserLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserLayoutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 33px;
    font-weight: 600;
  }
`;

export function UserLayout(props) {
  const subRoutes = props.routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      render={props => <route.component {...props} />}
    />
  ));

  return (
    <UserLayoutWrapper>
      <UserLayoutHeader>
        <Img src="" alt="logo" />
        <h1>Elive shop</h1>
      </UserLayoutHeader>
      <Switch>{subRoutes}</Switch>
    </UserLayoutWrapper>
  );
}

UserLayout.propTypes = {
  routes: PropTypes.array,
};

export default UserLayout;
