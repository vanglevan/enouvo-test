import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { signInAsync, signUpAsync, selectUser } from './authSlice';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { SignInWrapper, SignInContainer, Header, Content } from './styled';
const { TabPane } = Tabs;

function AuthPage(props) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignIn = (values) => {
    console.log('handleSignIn', values);
    const payload = {
      email: values.email,
      password: values.password,
    };

    dispatch(signInAsync(payload));
  };

  const handleSignUp = (values) => {
    console.log('handleSignUp', values);
    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phone,
      address: values.address,
      additionalAddress: [],
      city: '',
      postCode: '',
      country: '',
    };

    dispatch(signUpAsync(payload));
  };

  return (
    <SignInWrapper>
      <SignInContainer>
        <Header>
          <h1>Welcome to Enouvo</h1>
        </Header>
        <Content>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Sign In" key="1">
              <SignIn handleSignIn={handleSignIn} />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <SignUp handleSignUp={handleSignUp} />
            </TabPane>
          </Tabs> 
        </Content>
      </SignInContainer>
    </SignInWrapper>
  );
}

export default AuthPage;
