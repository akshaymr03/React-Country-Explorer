import { Form, Input, Button, Typography, Row, Col } from 'antd';
import LoginImage from '../../components/login-image';
import { useNavigate } from 'react-router-dom';

const { Title, Text, Link } = Typography;

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignUp = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = () => {
        navigate('/home');
    };

    return (
        <Row className="login-page-row">
            <Col xs={24} md={12} className="login-form-container">
                <div className="login-form-inner">
                    <Title className="login-title">Create an account</Title>
                    <Text className="login-subtext">
                        Already have an account? <Link href="/">Login</Link>
                    </Text>
                    <Form layout="vertical" form={form} onFinish={onFinish} style={{ marginTop: 24 }}>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please enter your username!' }]}
                            hasFeedback
                        >
                            <Input size="large" className="custom-input" placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                { required: true, message: 'Please enter your phone number!' },
                                {
                                    pattern: /^[6-9]\d{9}$/,
                                    message: 'Enter a valid 10-digit mobile number',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input size="large" className="custom-input" placeholder="Phone Number" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
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

                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password size="large" className="custom-input" placeholder="Confirm Password" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="my-custom-button">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>

            <Col xs={0} md={12} className="login-image-col">
                <LoginImage />
            </Col>
        </Row>
    );
};

export default SignUp;
