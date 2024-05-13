import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, List, Card } from 'antd';
import './style.css'
import { useSelector } from 'react-redux';

UserInfoPage.propTypes = {
    
};

function UserInfoPage(props) {
  const currentUser = useSelector((state) => state.user.currentUser)
  console.log(currentUser)
  const listUserInfoElm = [
    "First Name", "Last Name", "Email", "Password",
  ]
  const userInforElm = listUserInfoElm.map(elm => {
    return (
      <List.Item
              actions={[
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">More</a>,
              ]}
            >
              <Typography.Text>{elm}: </Typography.Text>
            </List.Item>
    )
  })
  // const [editFirstName] 



  return (
    <div className="card-container">
      <div className="sub-card-container">
        <Card>
          <Card.Meta
            avatar={
              <Avatar src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" />
            }
            title="peter2312"
            description="Role: Administrator"
          />
          <List>
            {userInforElm}
          </List>
        </Card>
      </div>
    </div>
  );
}

export default UserInfoPage;