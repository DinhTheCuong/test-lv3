import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import { AppContext } from './App';
import { useContext } from 'react';

const TodoList = () => {
  const appValue = useContext(AppContext);
  const taskList = appValue.task;

  const handleCheckTask = (ele, index) => {
    appValue.setChecked([...appValue.checked, ele]);
    appValue.setTask(
      appValue.task.filter((element, ind) => {
        // eslint-disable-next-line no-unused-expressions
        ind === index;
      })
    );
    appValue.setTaskLeft(appValue.taskLeft > 0 ? appValue.taskLeft - 1 : 0);
  };

  if (appValue.filter) {
    return (
      <div className='todo-list-container'>
        {taskList.map((ele, index) => (
          <div
            key={index}
            className='todo-item-container'
          >
            <FaRegCircle
              onClick={() => handleCheckTask(ele, index)}
              className='item-done-button'
              color='#9a9a9a'
            />
            <div className='item-title'>{ele}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className='todo-list-container'>
        {taskList.map((ele, index) => (
          <div
            key={index}
            className='todo-item-container'
          >
            <FaRegCircle
              onClick={() => handleCheckTask(ele, index)}
              className='item-done-button'
              color='#9a9a9a'
            />
            <div className='item-title'>{ele}</div>
            <div className='item-time'>{appValue.time}</div>
          </div>
        ))}

        {appValue.checked.map((ele, index) => (
          <div
            key={index}
            className='todo-item-container done'
          >
            <FaRegCheckCircle
              color='#9a9a9a'
              className='item-done-button'
            />
            <div className='item-title'>{ele}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default TodoList;
