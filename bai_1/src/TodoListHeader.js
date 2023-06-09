import { useContext } from 'react';
import { AppContext } from './App';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

const Header = () => {
  const appValue = useContext(AppContext);

  const handleFilter = () => {
    appValue.setFilter(true);
  };

  const handleNotFilter = () => {
    appValue.setFilter(false);
  };

  return (
    <div className='header'>
      You have {appValue.taskLeft} tasks left!
      {!appValue.filter ? (
        <div className='not-finished'>
          <FaRegCircle
            onClick={() => handleFilter()}
            className='item-done-button'
            color='#9a9a9a'
          />
          <p>Not finished only</p>
        </div>
      ) : (
        <div className='not-finished'>
          <FaRegCheckCircle
            onClick={() => handleNotFilter()}
            className='item-done-button'
            color='#9a9a9a'
          />
          <p>Not finished only</p>
        </div>
      )}
    </div>
  );
};

export default Header;
