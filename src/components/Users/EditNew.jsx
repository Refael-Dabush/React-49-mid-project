/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../Button/Button';
import './EditNew.css';
function EditNew({ labels, exitEdit, addRecord, type }) {
    const [newRecord, setNewRecord] = useState({}); 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewRecord({...newRecord, [name]: value});
    }

  const handleCancel = () => {
    exitEdit();
  };

  const handleAddRecord = () => {
    if(type === 'todo'){
        addRecord({...newRecord, id: toString(Math.floor(Math.random() * 10000)), completed: false});
    } else if(type === 'user'){
        addRecord({...newRecord, id: Math.floor(Math.random() * 1000), address: {city: '', street: '', zipcode: ''}, todos: [], posts: []})
    } else {
        addRecord({...newRecord, id: Math.floor(Math.random() * 1000)});
    }
  };

  return (
    <div className="edit-card">
        {labels.map((l, index) => {
         return( <div key={index}>
            <b style={{ marginRight: '1em' }}>{l}:</b>
            <input type="text" name={l} onChange={handleChange}/>
          </div>
         );
        })}
        <div style={{ marginLeft: '78%', marginTop: '60px' }}>
          <Button
            title="Cancel"
            clickButton={handleCancel}
            style="button-style-tine space"
          />
          <Button
            title="Add"
            clickButton={handleAddRecord}
            style="button-style-tine"
          />
        </div>
    </div>
  );
}

export default EditNew;
