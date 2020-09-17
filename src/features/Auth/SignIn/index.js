/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { selectSignInError, signInAsync } from '../authSlice';
import { SignInWrapper, SignInContainer } from './styled';

function SignInPage(props) {
  const error = useSelector(selectSignInError);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    dispatch(signInAsync(payload)).then(res => {
      if (res) {
        props.history.push('/');
      }
    });
  };

  return (
    <SignInWrapper>
      <SignInContainer>
        <Form
          name="login-form"
          className="login-form"
          onFinish={onFinish}
        >
          {error && (
            <Form.Item
              name="error"
            >
              <Alert message={error} type="error" showIcon />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/user/register">register now!</Link>
          </Form.Item>
        </Form>
      </SignInContainer>
    </SignInWrapper>
  );
}

SignInPage.propsType = {
  history: PropTypes.object,
};

export default compose(
  withRouter,
  memo,
)(SignInPage);
