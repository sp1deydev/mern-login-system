import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, List, Card } from 'antd';
import './style.css'
import { useSelector } from 'react-redux';

UserInfoPage.propTypes = {
    
};

function UserInfoPage(props) {
  const currentUser = useSelector((state) => state.user.currentUser) || {};
  console.log(currentUser);
  const [editElement, setEditElement] = useState();

  return (
    <div className="card-container">
      <div className="sub-card-container">
        <Card>
          <Card.Meta
            avatar={
              <Avatar src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" />
            }
            title={currentUser.username || "test-username"}
            description="Role: Administrator"
          />
          <List>
            <List.Item
              actions={[
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">More</a>,
              ]}
            >
              <Typography.Text>First Name: {currentUser.firstname}</Typography.Text>
            </List.Item>
            <List.Item
              actions={[
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">More</a>,
              ]}
            >
              <Typography.Text>Last Name: {currentUser.lastname}</Typography.Text>
            </List.Item>
            <List.Item
              actions={[
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">More</a>,
              ]}
            >
              <Typography.Text>Email: {currentUser.email}</Typography.Text>
            </List.Item>
            <List.Item
              actions={[
                <a key="list-loadmore-edit">Edit</a>,
                <a key="list-loadmore-more">More</a>,
              ]}
            >
              <Typography.Text>Password: {currentUser.password}</Typography.Text>
            </List.Item>
          </List>
        </Card>
      </div>
    </div>
  );
}

export default UserInfoPage;