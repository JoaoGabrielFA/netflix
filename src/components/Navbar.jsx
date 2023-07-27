import styles from './Navbar.module.css';
import { BsBell, BsSearch, BsSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  localStorage.getItem('SearchBarContent') == null ? localStorage.setItem('SearchBarContent', '') : localStorage.getItem('SearchBarContent');

  const [navbarColor, setNavbarColor] = useState('00000000');
  const [input, setInput] = useState(localStorage.getItem('SearchBarContent'));
  const thisPage = localStorage.getItem('actualPage');
  const navigate = useNavigate();

  useEffect(() => {
    setInput(localStorage.getItem('SearchBarContent'))
    if (localStorage.getItem('SearchBarContent').length > 0) {
      navigate(`/search/${input}`);
    }
  }, [input, navigate]);

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
      setNavbarColor('000000');
    } else {
      setNavbarColor('00000000')
    }
  });

  const handleChange = async (event) => {
    const value = event.target.value;
    localStorage.setItem('SearchBarContent', value)
    setInput(value);
  };

  const changePage = () => {
    localStorage.setItem('SearchBarContent', '')
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  const att = () =>{
    const input = document.getElementById('searchBar');
    const div = document.getElementById('searchBarDiv');

    if (input.style.opacity === '0' || input.style.opacity === '') {
      input.style.opacity = '1';
      input.focus();
      input.style.width = '50%';
      input.style.padding = '0 8px';
      div.style.padding = '4px 7px';
      div.style.width = '250px';
      div.style.borderColor = '#FFFFFF';
      div.style.backgroundColor = '#00000036';
    } else {
      input.style.opacity = '0';
      input.style.width = '0';
      input.style.padding = '0';
      div.style.padding = '0';
      div.style.width = '24px';
      div.style.borderColor = '#FFFFFF00';
      div.style.backgroundColor = '#00000000';
    }
  }

  return (
    <header className={`${styles.navbar} Navbar`} style={{ background: `linear-gradient(to bottom, #000000, #${navbarColor})` }}>
      <div className={styles.navbarLeft}>
        <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' onClick={() => navigate('/home')} />
        <nav>
          <Link className={thisPage === 'Home' ? styles.bold : ''} to='/home' onClick={() => changePage()}>Home</Link>
          <Link className={thisPage === 'Tv' ? styles.bold : ''} to='/tvshows' onClick={() => changePage()}>TV Shows</Link>
          <Link className={thisPage === 'Movies' ? styles.bold : ''} to='/movies' onClick={() => changePage()}>Movies</Link>
          <Link className={thisPage === 'News' ? styles.bold : ''} to='/news' onClick={() => changePage()}>News & Popular</Link>
          <Link className={thisPage === 'mylist' ? styles.bold : ''} to='/mylist' onClick={() => changePage()}>My List</Link>
        </nav>
      </div>
      <div className={styles.navbarRight}>
        <div id='searchBarDiv' className={styles.searchBar}>
          <BsSearch className={styles.searchButton} onClick={att}/>
          <input id='searchBar' className={styles.searchInput} type='text' value={input} onChange={handleChange}></input>
        </div>
        <BsBell />
        <BsSquare />
      </div>
    </header>
  )
}

export default Navbar;