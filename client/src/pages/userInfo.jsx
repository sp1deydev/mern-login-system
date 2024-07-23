import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, List, Card, Input, message, Button, Flex } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../redux/userSlice';
import { validateEmail } from '../helpers/emailRegEx';
import { toast } from 'react-toastify';
import { userApi } from '../api/userApi';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

UserInfo.propTypes = {
    
};

function UserInfo(props) {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const currentUser = useSelector((state) => state.user.currentUser) || {};
  const [editElement, setEditElement] = useState();
  const [editValue, setEditValue] = useState();

  const handEditFormChange = (e) => {
    setEditValue(e.target.value)  
  }
  const handleCancelEdit = () => {
    setEditValue()
    setEditElement();
  }
  const handleUpdate = async () => {
    if(!editValue) {
      messageApi.open({
        type: 'error',
        content: 'Please enter value!',
        duration: 2,
      });
      return;
    }
    //validate email address
    if(editElement === "email" && !validateEmail(editValue)) {
      messageApi.open({
        type: 'error',
        content: 'Please enter valid email!',
        duration: 2,
      });
      return;
    }
    //api
    const updateUser = {...currentUser}
    updateUser[editElement] = editValue;
    try {
      const res = await userApi.updateUser(updateUser);
      if (!res.data.success) {
        toast.error(res.data.message);
        return;
      }
      const { user } = res.data;
      const currentUser = {
        id: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        createdAt: user.createdAt,
      };
      toast.success(res.data.message)
      dispatch(userSlice.actions.editUser(currentUser));
      setEditValue()
      setEditElement();
    }
    catch (err) {
      toast.error(err);
    }
  }

  const handleEditFirstname = () => {
    setEditValue(currentUser.firstname)
    setEditElement("firstname");
  }
  const handleEditLastName = () => {
    setEditValue(currentUser.lastname)
    setEditElement("lastname");
  }
  const handleEditEmail = () => { 
    setEditValue(currentUser.email)
    setEditElement("email");
  }

  return (
    <div className="form-container">
      <div className="sub-info-container">
        {contextHolder} {/* message validate form */}
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
              actions={
                editElement === "firstname"
                  ? [
                      <a key="list-loadmore-edit" onClick={handleCancelEdit}>
                        Cancel
                      </a>,
                      <a key="list-loadmore-edit" onClick={handleUpdate}>
                        Update
                      </a>,
                    ]
                  : [
                      <a key="list-loadmore-edit" onClick={handleEditFirstname}>
                        Edit
                      </a>,
                    ]
              }
            >
              {editElement === "firstname" ? (
                <Input
                  placeholder="Enter value"
                  name="title"
                  value={editValue}
                  onChange={(event) => handEditFormChange(event)}
                  variant="borderless"
                  autoFocus
                />
              ) : (
                <Typography.Text>
                  <i>First Name:</i> {currentUser.firstname}
                </Typography.Text>
              )}
            </List.Item>

            <List.Item
              actions={
                editElement === "lastname"
                  ? [
                      <a key="list-loadmore-edit" onClick={handleCancelEdit}>
                        Cancel
                      </a>,
                      <a key="list-loadmore-edit" onClick={handleUpdate}>
                        Update
                      </a>,
                    ]
                  : [
                      <a key="list-loadmore-edit" onClick={handleEditLastName}>
                        Edit
                      </a>,
                    ]
              }
            >
              {editElement === "lastname" ? (
                <Input
                  placeholder="Enter value"
                  name="title"
                  value={editValue}
                  onChange={(event) => handEditFormChange(event)}
                  variant="borderless"
                  autoFocus
                />
              ) : (
                <Typography.Text>
                  <i>Last Name:</i> {currentUser.lastname}
                </Typography.Text>
              )}
            </List.Item>

            <List.Item
              actions={
                editElement === "email"
                  ? [
                      <a key="list-loadmore-edit" onClick={handleCancelEdit}>
                        Cancel
                      </a>,
                      <a key="list-loadmore-edit" onClick={handleUpdate}>
                        Update
                      </a>,
                    ]
                  : [
                      <a key="list-loadmore-edit" onClick={handleEditEmail}>
                        Edit
                      </a>,
                    ]
              }
            >
              {editElement === "email" ? (
                <Input
                  placeholder="Enter value"
                  name="title"
                  value={editValue}
                  onChange={(event) => handEditFormChange(event)}
                  variant="borderless"
                  autoFocus
                />
              ) : (
                <Typography.Text>
                  <i>Email:</i> {currentUser.email}
                </Typography.Text>
              )}
            </List.Item>
          </List>
          <Flex gap="small" justify='center' style={{marginTop: '16px'}}>
            <Button type="primary" icon={<EditOutlined />}>
              Change Password
            </Button>
            <Button type="primary" icon={<DeleteOutlined />} danger>
              Delete Account
            </Button>
            {/* <Button icon={<EditOutlined />}>Change Password</Button>
            <Button icon={<DeleteOutlined />} danger>
              Delete Account
            </Button> */}
          </Flex>
        </Card>
      </div>
    </div>
  );
}

export default UserInfo;