/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Dropdown } from 'antd';

import Sider from '../components/Sider';
import { selectUser, logOutAsync } from '../features/Auth/authSlice'
import { SecurityLayoutWrapper, ContentWrapper, Header } from './styled';

export function SecurityLayout(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutAsync()).then(res => {
      if (res) {
        props.history.push('/user/login');
      }
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogOut}>
          Thoát
        </a>
      </Menu.Item>
    </Menu>
  );

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
        <Header>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Hi {user && (user.fullName || `${user.firstName} ${user.lastName}`)}
            </a>
          </Dropdown>
        </Header>
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

export default React.memo(SecurityLayout);
