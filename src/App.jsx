import { useEffect, useState } from 'react';

import { getAllData } from './utils';
import Users from './components/Users/Users';

import './App.css'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllData().then((data) => {
      setUsers(data)
    })
  }, [])

  const updateUser = (user) => {
    const tempUsers = [...users];
    const index = users.findIndex((u) => u.id === user.id);

    if(index !== -1) {
      tempUsers[index] = user;
    }else {
      tempUsers.push(user);
    }

    setUsers(tempUsers);
  }

  const deleteUser = (userId) => {
    const tempUsers = users.filter((user) => user.id !== userId);

    setUsers(tempUsers);
  }


  return (
    <>
      <Users users={users} updateUser={updateUser} deleteUser={deleteUser}/>
    </>
  )
}

export default App
