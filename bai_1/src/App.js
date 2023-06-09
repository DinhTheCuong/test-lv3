import './styles.css';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

export const AppContext = createContext();

const data = JSON.parse(localStorage.getItem('task'))
  ? JSON.parse(localStorage.getItem('task')).task
  : [];

export default function App() {
  const [task, setTask] = useState(data);
  const [taskLeft, setTaskLeft] = useState(0);
  const [checked, setChecked] = useState([]);
  const [filter, setFilter] = useState(false);
  const [time, setTime] = useState('7 days left');

  const appData = { task, time };
  localStorage.setItem('task', JSON.stringify(appData));

  return (
    <AppContext.Provider
      value={{
        task,
        setTask,
        taskLeft,
        setTaskLeft,
        checked,
        setChecked,
        filter,
        setFilter,
        time,
        setTime,
      }}
    >
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

const Home = () => {
  return (
    <div className='App'>
      <div className='container'>
        <TodoListHeader />
        <TodoList />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
