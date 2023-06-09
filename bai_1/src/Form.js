import { useContext, useState } from 'react';
import { AppContext } from './App.js';

const Form = () => {
  const appValue = useContext(AppContext);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (event) => {
    event.preventDefault();
    appValue.setTask([...appValue.task, newTask]);
    appValue.setTaskLeft(appValue.task.length + 1);
  };

  return (
    <form className='form'>
      <input
        onChange={(event) => setNewTask(event.target.value)}
        placeholder='Enter task ...'
      />
      <button onClick={handleAddTask}>Submit</button>
    </form>
  );
};

export default Form;
