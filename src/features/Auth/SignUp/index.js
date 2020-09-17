import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button, Alert } from 'antd';
import { SignUpWrapper, SignUpContainer } from './styled';

import { signUpAsync, selectSignUpError } from '../authSlice';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function SignUpPage(props) {
  const dispatch = useDispatch();
  const error = useSelector(selectSignUpError);

  const onFinish = (values) => {
    console.log('handleSignUp', values);
    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phone,
      address: values.address,
      additionalAddress: [],
      city: values.city,
      postCode: values.postCode,
      country: values.country,
    };

    dispatch(signUpAsync(payload)).then(res => {
      if (res) {
        props.history.push('/');
      }
    });
  };

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Form
          {...layout}
          name="signup-form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {error && (
            <Form.Item
              {...tailLayout}
              name="error"
            >
              <Alert message={error} type="error" showIcon />
            </Form.Item>
          )}

          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder="Input your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input placeholder="Input your last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Input your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              type="password"
              placeholder="Input your password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            rules={[{ required: true, message: 'Please input your confirm password!' }]}
          >
            <Input
              type="password"
              placeholder="Input your password again"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input your phone!' }]}
          >
            <Input placeholder="Input your phone" />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: 'Please input your country!' }]}
          >
            <Input placeholder="Input your country" />
          </Form.Item>
          <Form.Item label="City">
            <Input.Group compact>
              <Form.Item
                name="city"
                noStyle
                rules={[{ required: true, message: 'Please input your city' }]}
              >
                <Input style={{ width: '60%' }} placeholder="Input city" />
              </Form.Item>
              <Form.Item
                name="postCode"
                noStyle
                rules={[{ required: true, message: 'Please input your postcode' }]}
              >
                <Input style={{ width: '40%' }} placeholder="Input Postcode" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input your address!' }]}
          >
            <Input.TextArea placeholder="Input your address" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </SignUpContainer>
    </SignUpWrapper>
  );
}

SignUpPage.propTypes = {
  history: PropTypes.object,
};

// export default withRouter(SignUpPage);
export default compose(
  withRouter,
  memo,
)(SignUpPage);
