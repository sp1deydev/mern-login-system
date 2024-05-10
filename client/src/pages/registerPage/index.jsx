import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Space, Typography } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'

RegisterPage.propTypes = {
    
};

const { Text } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function RegisterPage(props) {
    const history = useHistory();
    const [form] = Form.useForm();
    
      const onFinish = (values) => {
        form.validateFields().then((values) => {
            console.log(values);
        }).catch((err) => {
            // form validation failed
            console.log(err)
        })
      };

      const handleSignInClick = () => {
        history.push('/login')
      }
    

    return (
      <div className='form-container'>
        <div className='sub-form-container'>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600}}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Input valid Email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="input password" />
          </Form.Item>
          <Form.Item
            label="Confirm"
            name="confirmPassword"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="input confirm password" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Text type="secondary">Have an account?</Text>
            </Space>
            <Button
              type="link"
              htmlType="button"
              onClick={() => handleSignInClick()}
            >
              <Text underline italic>
                Log In
              </Text>
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    );
}

export default RegisterPage;