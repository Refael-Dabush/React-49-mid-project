/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './User.css';
import Button from '../Button/Button';
import UserInfo from './UserInfo';

function User({ userData, updateUser, deleteUser, showUserInfo, userInfo }) {
  const [user, setUser] = useState(userData);
  const [allCompleted, setAllCompleted] = useState();
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    let all_completed = true;
    user.todos?.forEach((todo) => {
      if (!todo.completed) all_completed = false;
    });
    setAllCompleted(all_completed);
  }, [user]);

  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    setUser(() => {
      let updateUser = {...user};
      updateUser.address[name] = value;
      return updateUser;
    });
  };

  const handleUpdate = () => {
    updateUser(user);
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleShowUserInfo = () => {
    showUserInfo(user);
  };

  const addTodo = (newTodo) => {
    setUser(() => {
      let updateUser = {...user};
      updateUser.todos.push(newTodo);
      return updateUser;
    })
  }

  const updateRecord = (newTodos) => {
    console.log(newTodos);
    let updateUser = {...user};
    updateUser.todos = newTodos;
    setUser(updateUser);
  }

  const addPost = (newPost) => {
    console.log('newPost: ', newPost);

  }

  let divClassName = allCompleted ? 'all-completed' : 'not-completed';
  divClassName += userInfo === user.id ? ' check' : '';

  const otherData = (
    <div className="other-data-card">
      <label className="label-style" htmlFor="street">
        Street:
      </label>
      <input
        type="text"
        id="street"
        name="street"
        defaultValue={user.address?.street}
        onChange={handleChangeAddress}
      />{' '}
      <br />
      <br />
      <label className="label-style" htmlFor="city">
        City:
      </label>
      <input
        type="text"
        id="city"
        name="city"
        defaultValue={user.address?.city}
        onChange={handleChangeAddress}
      />{' '}
      <br />
      <br />
      <label className="label-style" htmlFor="zipcode">
        Zip Code:
      </label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        defaultValue={user.address?.zipcode}
        onChange={handleChangeAddress}
      />{' '}
      <br />
      <br />
    </div>
  );

  return (
    <div>
      <div className="left-container">
        <div className={divClassName}>
          <label onClick={handleShowUserInfo} style={{cursor: 'pointer'}}>ID:</label>
          {user.id} <br />
          <br />
          Name:{' '}
          <input
            type="text"
            defaultValue={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />{' '}
          <br />
          <br />
          Email:{' '}
          <input
            type="text"
            defaultValue={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />{' '}
          <br />
          <br />
          <div
            className="other-data-button"
            onMouseOver={() => {
              setShowOther(true);
            }}
            onClick={() => {
              setShowOther(false);
            }}
          >
            Other Data
          </div>
          {showOther && otherData}
          <div style={{ display: 'inline-block', marginLeft: '65%' }}>
            <Button
              title="Update"
              clickButton={handleUpdate}
              style="button-style-big space"
            />
            <Button
              title="Delete"
              clickButton={handleDelete}
              style="button-style-big "
            />
          </div>
        </div>
      </div>
      <div className="right-container">
        {userInfo === user.id && (
          <UserInfo data={userData.todos} userId={userData.id} title="Todos" labels={['title']} addNewRecord={addTodo} updateRecord={updateRecord}/>
        )}
        {userInfo === user.id && (
          <UserInfo data={userData.posts} userId={userData.id} title="Posts" labels={['title', 'body']} addNewRecord={addPost}/>
        )}
      </div>
    </div>
  );
}

export default User;
