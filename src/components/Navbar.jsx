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

  return (
    <section className={`${styles.navbar} Navbar`} style={{ background: `linear-gradient(to bottom, #000000, #${navbarColor})` }}>
      <div className={styles.navbarLeft}>
        <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' onClick={() => navigate('/home')}/>
        <nav>
          <Link className={thisPage === 'Home' ? styles.bold : ''} to='/home' onClick={() => changePage()}>Home</Link>
          <Link className={thisPage === 'Tv' ? styles.bold : ''} to='/tvshows' onClick={() => changePage()}>TV Shows</Link>
          <Link className={thisPage === 'Movies' ? styles.bold : ''} to='/movies' onClick={() => changePage()}>Movies</Link>
          <Link>News & Popular</Link>
          <Link className={thisPage === 'mylist' ? styles.bold : ''} to='/mylist' onClick={() => changePage()}>My List</Link>
        </nav>
      </div>
      <div className={styles.navbarRight}>
        <input id='searchBar' className={styles.searchBar} type='text' value={input} onChange={handleChange}></input>
        <BsSearch />
        <BsBell />
        <BsSquare />
      </div>
    </section>
  )
}

export default Navbar;