import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, List, Card, Input, message } from 'antd';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../../redux/userSlice';
import { validateEmail } from '../../helpers/emailRegEx';

UserInfoPage.propTypes = {
    
};

function UserInfoPage(props) {
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
  const handleUpdate = () => {
    if(!editValue) {
      messageApi.open({
        type: 'error',
        content: 'Please enter value!',
        duration: 2,
      });
      return;
    }
    if(editElement === "email") {
      if(!validateEmail(editValue)) {
        messageApi.open({
          type: 'error',
          content: 'Please enter valid email!',
          duration: 2,
        });
        return;
      }
    }
      const updateUser = {...currentUser}
      updateUser[editElement] = editValue;
      // console.log(updateUser)
      dispatch(userSlice.actions.editUser(updateUser));
      setEditValue()
      setEditElement();
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
  const handleEditPassword = () => {
    setEditValue("")
    setEditElement("password");
  }


  return (
    <div className="card-container">
      <div className="sub-card-container">
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

            <List.Item
              actions={
                editElement === "password"
                  ? [
                      <a key="list-loadmore-edit" onClick={handleCancelEdit}>
                        Cancel
                      </a>,
                      <a key="list-loadmore-edit" onClick={handleUpdate}>
                        Update
                      </a>,
                    ]
                  : [
                      <a key="list-loadmore-edit" onClick={handleEditPassword}>
                        Edit
                      </a>,
                    ]
              }
            >
              {editElement === "password" ? (
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
                  <i>Password:</i> {currentUser.password}
                </Typography.Text>
              )}
            </List.Item>
          </List>
        </Card>
      </div>
    </div>
  );
}

export default UserInfoPage;