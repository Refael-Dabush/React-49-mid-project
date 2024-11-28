/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../Button/Button';
import Post from '../Posts/Post';
import Todo from '../Todos/Todo';
import EditNew from './EditNew';
import './UserInfo.css';

function UserInfo({ data, userId, title, labels, addNewRecord, updateRecord }) {
  const [isEdit, setIsEdit] = useState(false);
  const [dataRecord, setDataRecord] = useState(data);

  const handelClick = () => {
    setIsEdit(!isEdit);
  };

  const handleAddRecord = (newRecord) => {
    setIsEdit(!isEdit);
    setDataRecord([...dataRecord, newRecord]);
    addNewRecord(newRecord);
  }

  const handleMarkCompleted = (id) => {
    const dataUpdate = [...dataRecord];
    const index = dataUpdate.findIndex(record => record.id === id);
    dataUpdate[index].completed = true;
    setDataRecord(dataUpdate);
    updateRecord(dataUpdate);
  }

  const infoData = (
      <div className="data">
        {dataRecord.map((d) => {
          return title === 'Todos' ? (
            <Todo key={d.id} todo={d} onCompleted={handleMarkCompleted} type='todo'/>
          ) : (
            <Post key={d.id} post={d} type='post' />
          );
        })}
      </div>
  );

  const infoEdit = (
      <div className="data">
        <EditNew labels={labels} exitEdit={handelClick} addRecord={handleAddRecord}/>
      </div>
  );

  return (
    <div className="info-card">
      <div style={{ marginBottom: '0.5em' }}>
        <label style={{ marginRight: '75%' }}>
          {title} - User {userId}{' '}
        </label>
        {!isEdit && <Button
          clickButton={handelClick}
          title="Add"
          style="button-style-tine"
        />}
      </div>
      {isEdit ? infoEdit : infoData}
    </div>
  );
}

export default UserInfo;
