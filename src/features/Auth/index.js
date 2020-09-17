import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthWrapper, AuthContainer, Header, Content } from './styled';

function AuthPage(props) {
  const { routes } = props;

  const listRoutes = routes && routes.map(item => {
    const Component = item.component;
    return (
      <Route exact path={item.path} render={props => <Component {...props} />} />
    )
  });

  return (
    <AuthWrapper>
      <AuthContainer>
        <Header>
          <h1>Welcome to Enouvo</h1>
        </Header>
        <Content>
          <Switch>
            <Redirect exact from="/user" to="/user/login" />
            {listRoutes}
            <Redirect from="**" to="/user/login" />
          </Switch>
        </Content>
      </AuthContainer>
    </AuthWrapper>
  );
}

AuthPage.propTypes = {
  router: PropTypes.array,
};

export default memo(AuthPage);
