/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import User from './User';
import Button from '../Button/Button';

import './Users.css';
import EditNew from './EditNew';

function Users({ users, updateUser, deleteUser }) {
  const [usersToShow, setUsersToShow] = useState(users);
  const [userToShowInfo, setUserToShowInfo] = useState('');
  const [addUserScreen, setAddUserScreen] = useState(false);

  useEffect(() => {
    console.log(users);
    setUsersToShow(users);
  }, [users]);

  const handelChange = (e) => {
    const showUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setUsersToShow(showUsers);
  };

  const handelAddUser = () => {
    setUserToShowInfo('');
    setAddUserScreen(true);
  };

  const handelUpdateUser = (u) => {
    updateUser(u);
  };

  const handelDeleteUser = (uId) => {
    deleteUser(uId);
  };

  const handelShowUserInfo = (u) => {
    setAddUserScreen(false);
    if (u.id === userToShowInfo) {
      setUserToShowInfo('');
    } else {
      setUserToShowInfo(u.id);
    }
  };

  const handleExit = () => {
    setAddUserScreen(false);
  };

  const handleAddUser = (newUser) => {
    updateUser(newUser);
    handleExit();
  }

  return (
    <div style={{ zIndex: 1 }}>
      <div style={{ marginLeft: '15%' }}>
        {' '}
        Search{' '}
        <input
          style={{ marginRight: '4em' }}
          type="search"
          onChange={handelChange}
        />
        <Button
          title="Add"
          clickButton={handelAddUser}
          style="button-style-tine"
        />
      </div>
      <div className="left-container">
        <ul>
          {usersToShow.map((u) => {
            return (
              <User
                key={u.id}
                userData={u}
                userInfo={userToShowInfo}
                updateUser={handelUpdateUser}
                deleteUser={handelDeleteUser}
                showUserInfo={handelShowUserInfo}
              />
            );
          })}
        </ul>
      </div>
      {addUserScreen && (
        <div className="right">
          <div style={{ border: '1px solid black' }}>
            <EditNew labels={['name', 'email']} exitEdit={handleExit} addRecord={handleAddUser} type='user'/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
