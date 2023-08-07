import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropdownMenu.module.css';

function DropdownMenu({changePage , checkPage}) {
  const [isListVisible, setListVisible] = useState(false);
  let mouseLeaveTime;

  const handleMouseOver = () => {
    setListVisible(true);
    clearTimeout(mouseLeaveTime)
  };

  const handleMouseLeave = () => {
    mouseLeaveTime = setTimeout(() => {
      setListVisible(false);
    }, 500);
  };

  return (
    <div className={styles.dropdownMenu} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} > Browse &#9207;
      {isListVisible && (
        <ul className={styles.dropdownMenuList} >
          <Link className={checkPage('Home')} to='/home' onClick={changePage}>Home</Link>
          <Link className={checkPage('Tv')} to='/tvshows' onClick={changePage}>TV Shows</Link>
          <Link className={checkPage('Movies')} to='/movies' onClick={changePage}>Movies</Link>
          <Link className={checkPage('News')} to='/news' onClick={changePage}>News & Popular</Link>
          <Link className={checkPage('MyList')} to='/mylist' onClick={changePage}>My List</Link>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
