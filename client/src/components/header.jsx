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
    FrownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

HeaderBar.propTypes = {
    
};

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderBar(props) {
    const currentUser = useSelector((state) => state.user.currentUser) || {};
    const isEmpty =  Object.keys(currentUser).length === 0;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHome = () => {
       navigate('/home');  
    }
    const handleAbout = () => {
       navigate('/about');  
    }
    const handleCart = () => {
       navigate('/cart');  
    }
    const handleLogin = () => {
       navigate('/login');  
    }
    const handleRegister = () => {
       navigate('/register');  
    }
    const handleProfile = () => {
       navigate('/userInfo/123');  
    }
    const handleLogout = () => {
        dispatch(userSlice.actions.removeCurrentUser());
       navigate('/home');
        
    }
    return (
        <Header style={{ background: '#fff', marginBottom: "24px" }}>
            <div className="logo" style={{ width: '120px', height: '31px', background: '#2412', margin: '16px 28px 16px 0', float: 'left' }} />

            <Menu 
                theme="light" 
                mode="horizontal" 
                defaultSelectedKeys={['1']} 
                style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} 
            >
                <Menu.Item key="1" icon={<HomeOutlined />}  onClick={handleHome}>Home</Menu.Item>
                <Menu.Item key="2" icon={<InfoCircleOutlined />}  onClick={handleAbout}>About</Menu.Item>
                <Menu.Item key="2" icon={<ShoppingCartOutlined />}  onClick={handleCart}>Cart</Menu.Item>
                {/* user header */}
                <SubMenu key="3" title={currentUser && !isEmpty ? 'Username' : 'Guest'} icon={currentUser && !isEmpty ? <SmileOutlined /> : <FrownOutlined />} popupOffset={[0, 10]}>
                    {currentUser && !isEmpty ? 
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

export default HeaderBar;