import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { BsBell, BsSquare } from 'react-icons/bs';
import SearchBar from './SearchBar';

function Navbar() {
  const [navbarColor, setNavbarColor] = useState('00000000');
  const linearGradient = `linear-gradient(to bottom, #000000, #${navbarColor})`;
  const thisPage = localStorage.getItem('actualPage');
  const logoPath = 'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png';

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 1) {
      setNavbarColor('000000');
    } else {
      setNavbarColor('00000000');
    };
  });

  const changePage = () => {
    localStorage.setItem('SearchBarContent', '');
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const checkPage = (page) => {
    return thisPage === page ? styles.bold : '';
  };

  return (
    <header className={styles.navbar} style={{ background: linearGradient }}>
      <div className={styles.navbarLeft}>
        <Link className={styles.logo} to='/home' onClick={changePage}><img src={logoPath} /></Link>
        <nav>
          <Link className={checkPage('Home')} to='/home' onClick={changePage}>Home</Link>
          <Link className={checkPage('Tv')} to='/tvshows' onClick={changePage}>TV Shows</Link>
          <Link className={checkPage('Movies')} to='/movies' onClick={changePage}>Movies</Link>
          <Link className={checkPage('News')} to='/news' onClick={changePage}>News & Popular</Link>
          <Link className={checkPage('MyList')} to='/mylist' onClick={changePage}>My List</Link>
        </nav>
      </div>
      <div className={styles.navbarRight}>
        <SearchBar/>
        <BsBell />
        <BsSquare />
      </div>
    </header>
  )
}

export default Navbar;