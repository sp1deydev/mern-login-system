import React, { useState, Fragment  } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { 
    HomeOutlined, 
    InfoCircleOutlined,
    UserOutlined,
    LogoutOutlined,
    LoginOutlined,
    UserAddOutlined,
    SmileOutlined,
    FrownOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../../redux/userSlice';

HeaderApp.propTypes = {
    
};

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderApp(props) {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');  
    }
    const handleRegister = () => {
        history.push('/register');  
    }
    const handleProfile = () => {
        history.push('/user-info/123');  
    }
    const handleLogout = () => {
        dispatch(userSlice.actions.removeCurrentUser());
        history.push('/home');
        
    }
    return (
        <Header style={{ background: '#fff' }}>
            <div className="logo" style={{ width: '120px', height: '31px', background: '#2412', margin: '16px 28px 16px 0', float: 'left' }} />

            <Menu 
                theme="light" 
                mode="horizontal" 
                defaultSelectedKeys={['1']} 
                style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} 
            >
                <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
                <Menu.Item key="2" icon={<InfoCircleOutlined />}>About</Menu.Item>
                {/* user header */}
                <SubMenu key="3" title={currentUser ? 'Username' : 'Guest'} icon={currentUser ? <SmileOutlined /> : <FrownOutlined />} popupOffset={[0, 10]}>
                    {currentUser ? 
                    <Fragment>
                        <Menu.Item key="4" icon={<UserOutlined />} onClick={handleProfile}>My Profile</Menu.Item>
                        <Menu.Item key="5" icon={<LogoutOutlined />} onClick={handleLogout}>Log Out</Menu.Item>
                    </Fragment> :
                    <Fragment>
                        <Menu.Item key="6" icon={<LoginOutlined />} onClick={handleLogin}>Login</Menu.Item>
                        <Menu.Item key="7" icon={<UserAddOutlined />} onClick={handleRegister}>Register</Menu.Item>
                    </Fragment>
                    }
                </SubMenu>
            </Menu>
        </Header>
    );
}

export default HeaderApp;