import React, { memo } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SignUpWrapper, SignUpContainer } from './styled';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function SignUpPage(props) {
  const onFinish = (values) => {
    // console.log(values);
    props.handleSignUp(values);
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
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Input your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Input your last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Input your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              type="password"
              placeholder="Input your password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              type="password"
              placeholder="Confirm your password"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input placeholder="Input your phone" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please input your Username!' }]}
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

export default SignUpPage;
