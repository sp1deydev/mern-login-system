import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Space, Checkbox, Typography } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/userSlice';

LoginPage.propTypes = {
    
};

const { Text, Link } = Typography;

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
    const dispatch = useDispatch()
    
      const onFinish = (values) => {
        form.validateFields().then((values) => {
            const user = {
              "firstname": "Khanh",
              "lastname": "Lam",
              "email": "thienkhanhrayless@gmail.com",
              "username": "sp1deybo1",
              "password": "thientran2412",
          }
            dispatch(userSlice.actions.setCurrentUser(user));
            history.push('/home')
      }).catch((err) => {
            // form validation failed
            console.log(err)
        })
      };

      const handleRegiterClick = () => {
        history.push('/register')
      }
    

    return (
      <div className="form-container">
        <div className="sub-form-container">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, min: 6 }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              style={{
                marginLeft: "33%",
                width: "700px",
                marginBottom: "-8px",
              }}
            >
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  lineHeight: "32px",
                  margin: "0px 0px 0px 8px",
                }}
              >
                Forgot Password?
              </Link>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
                <Text type="secondary">Don't have an account yet?</Text>
              </Space>
              <Button
                type="link"
                htmlType="button"
                onClick={() => handleRegiterClick()}
              >
                <Text underline italic>
                  Register
                </Text>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
}

export default LoginPage;