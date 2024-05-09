import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Space, Checkbox, Typography } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

LoginPage.propTypes = {
    
};

const { Text } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function LoginPage(props) {
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

      const handleRegiterClick = () => {
        history.push('/register')
      }
    

    return (
        <div>
            <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="input password" />
      </Form.Item>

      <Form.Item label="Remember" name="remember" valuePropName="checked">
          <Checkbox></Checkbox>
        </Form.Item>

      <Form.Item
      {...tailLayout}
      >
        <Space>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Text  type="secondary">Don't have an account yet?</Text>
        </Space>
          <Button type="link" htmlType="button" onClick={() => handleRegiterClick()}>
            <Text underline italic>Register</Text>
          </Button>
      </Form.Item>
    </Form>
        </div>
    );
}

export default LoginPage;