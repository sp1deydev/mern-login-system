import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, List, Card } from 'antd';
import './style.css'

UserInfoPage.propTypes = {
    
};

function UserInfoPage(props) {
    return (
      <div className='card-container'>
      <div className='sub-card-container'>
        <Card>
          <Card.Meta
            avatar={
              <Avatar src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" />
            }
            title="peter2312"
            description="Role: Admin"
          />
          <List>
            <List.Item
              actions={[<a key="list-loadmore-edit">Edit</a>, <a key="list-loadmore-more">More</a>]}
            >
              <Typography.Text>First Name: </Typography.Text>
            </List.Item>
            <List.Item
              actions={[<a key="list-loadmore-edit">Edit</a>, <a key="list-loadmore-more">More</a>]}
            >
              <Typography.Text>Last Name: </Typography.Text>
            </List.Item>
            <List.Item
              actions={[<a key="list-loadmore-edit">Edit</a>, <a key="list-loadmore-more">More</a>]}
            >
              <Typography.Text>Email: </Typography.Text>
            </List.Item>
            <List.Item
              actions={[<a key="list-loadmore-edit">Edit</a>, <a key="list-loadmore-more">More</a>]}
            >
              <Typography.Text>Password: </Typography.Text>
            </List.Item>
            {/* Add more user info details as needed */}
          </List>
        </Card>
      </div>
      </div>
    );
}

export default UserInfoPage;