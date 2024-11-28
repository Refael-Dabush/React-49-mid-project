/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import './todo.css';

function Todo({todo, onCompleted}) {
    const handleClick = () => {
        onCompleted(todo.id);
    }

    return <div className='todo-card'>
        <div className='todo-info'>
            <div style={{marginBottom: '0.5em'}}><b>Title:</b> {todo.title}</div>
            <div style={{display: 'inline-block', marginRight: '60%'}}><b>Completed:</b> {todo.completed ? 'True' : 'False'}</div> 
            { !todo.completed && <Button clickButton={handleClick} title='Mark Completed' style=''/>}
        </div>
    </div>
}

export default Todo;