import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button, Alert, Select, notification } from 'antd';

import { SignUpWrapper, SignUpContainer } from './styled';
import { signUpAsync, selectSignUpError } from '../authSlice';
import { countries, citiesOfCountry } from '../../../utils/constants/constants';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};

function SignUpPage(props) {
  const dispatch = useDispatch();
  const error = useSelector(selectSignUpError);

  const [ countrySelected, setCountrySelected ] = useState(null);
  const [ cities, setCities ] = useState([]);
  const [ cityCodeSelected, setCityCodeSelected ] = useState(null);

  const handleChangeCountry = countryCode => {
    setCountrySelected(countryCode);
    setCityCodeSelected(null);
    const cityOfCountry = citiesOfCountry.filter(item => item.countryCode === countryCode);
    setCities(cityOfCountry);
  };

  const handleChangeCity = cityCode => {
    setCityCodeSelected(cityCode);
  };

  const onFinish = (values) => {
    const city = citiesOfCountry.find(item => item.cityCode === values.city);
    const payload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phone,
      address: values.address,
      additionalAddress: [],
      city: city ? city.name : '',
      postCode: values.city,
      country: values.country,
    };

    dispatch(signUpAsync(payload)).then(res => {
      if (res) {
        // show notification
        notification.success({
          message: 'User registration successful!',
        });
        // redirect page
        props.history.push('/');
      }
    });
  };

  const countryOptions = countries.map(item => {
    return (
      <Option key={item.id} value={item.unCode}>{item.name}</Option>
    );
  });

  const cityOptions = cities.map(item => {
    return (
      <Option key={item.id} value={item.cityCode}>{item.name}</Option>
    );
  });

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <div>
          <h3>Create user</h3>
        </div>
        <div>
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

            <Form.Item label="Name" style={{ marginBottom: 0 }}>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name' }]}
                style={{ display: 'inline-block', width: 'calc(50% - 4px)' }}
              >
                <Input placeholder="First name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please input your last name' }]}
                style={{ display: 'inline-block', width: 'calc(50% - 4px)', margin: '0 0 0 8px' }}
              >
                <Input placeholder="Last name" />
              </Form.Item>
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please input your email' }, { type: 'email', message: 'Email is not validation email' }]}
            >
              <Input placeholder="Input your email" />
            </Form.Item>

            <Form.Item label="Password" style={{ marginBottom: 0 }}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password' }]}
                style={{ display: 'inline-block', width: 'calc(50% - 4px)' }}
              >
                <Input
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match');
                    },
                  }),
                ]}
                style={{ display: 'inline-block', width: 'calc(50% - 4px)', margin: '0 0 0 8px' }}
              >
                <Input
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Item>
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please input your phone' }]}
            >
              <Input placeholder="Input your phone" />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: 'Please select your country' }]}
            >
              <Select placeholder="Please select a country" onChange={handleChangeCountry}>
                {countryOptions}
              </Select>
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'Please select your city' }]}
            >
              <Select
                placeholder="Please select a city"
                value={cityCodeSelected}
                disabled={!countrySelected}
                onChange={handleChangeCity}
              >
                {cityOptions}
              </Select>
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: 'Please input your address' }]}
            >
              <Input.TextArea placeholder="Input your address" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </SignUpContainer>
    </SignUpWrapper>
  );
}

SignUpPage.propTypes = {
  history: PropTypes.object,
};

export default compose(
  withRouter,
  memo,
)(SignUpPage);
