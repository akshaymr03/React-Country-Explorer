// src/components/LoginPage.jsx
import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Divider, Row, Col } from 'antd';
import {
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import LoginImage from '../../components/login-image';
import { useNavigate } from 'react-router-dom';

const { Title, Text, Link } = Typography;

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const onFinish = () => {
    navigate('/home');
  };

  return (
    <Row className="login-page-row">
      {/* Left - Form */}
      <Col xs={24} md={12} className="login-form-container">
        <div className="login-form-inner">
          <Title className="login-title">Sign In</Title>
          <Text className="login-subtext">
            New user? <Link href="/sign-up">Create an account</Link>
          </Text>

          <Form layout="vertical" form={form} onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email or username!' }]}
              hasFeedback
            >
              <Input size="large" className="custom-input" placeholder="Username or email" />
            </Form.Item>

            <Form.Item
              name="password"
               rules={[
                { required: true, message: 'Please enter your password!' },
                {
                  pattern: passwordRegex,
                  message:
                    'Password must be at least 8 characters and include 1 uppercase, 1 number, and 1 symbol.',
                },
              ]}
              hasFeedback
            >
              <Input.Password size="large" className="custom-input" placeholder="Password" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox className='my-large-checkbox'>
                <Text className="login-checkbox-label">Keep me signed in</Text>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="my-custom-button">
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <Divider className="my-custom-divider">
            <Text className="login-divider-text">Or Sign In With</Text>
          </Divider>

          <div className="login-social-buttons">
            <div className="icon-wrapper"><GoogleOutlined /></div>
            <div className="icon-wrapper"><FacebookOutlined /></div>
            <div className="icon-wrapper"><LinkedinOutlined /></div>
            <div className="icon-wrapper"><TwitterOutlined /></div>
          </div>
        </div>
      </Col>

      <Col xs={0} md={12} className="login-image-col">
        <LoginImage />
      </Col>
    </Row>
  );
};

export default Login;
