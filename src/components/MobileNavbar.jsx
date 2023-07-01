import styles from './MobileNavbar.module.css';
import { BsHouse, BsHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  const thisPage = localStorage.getItem('actualPage');

  const changePage = () => {
    localStorage.setItem('SearchBarContent', '')
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  return (
    <ul className={styles.navbar}>
      <Link to='/home' onClick={() => changePage()}>
        <li className={styles.navbarButton}>
          {thisPage === 'Home' ? (
            <BsHouseFill className={styles.navbarButtonIcon} />
          ) : (
            <BsHouse className={styles.navbarButtonIcon} />
          )}
          <label className={styles.navbarButtonLabel}>HOME</label>
        </li>
      </Link>
      <Link to='/movies' onClick={() => changePage()}>
        <li className={styles.navbarButton}>
          {thisPage === 'Movies' ? (
            <BsHouseFill className={styles.navbarButtonIcon} />
          ) : (
            <BsHouse className={styles.navbarButtonIcon} />
          )}
          <label className={styles.navbarButtonLabel}>MOVIES</label>
        </li>
      </Link>
      <Link to='/tvshows' onClick={() => changePage()}>
        <li className={styles.navbarButton}>
          {thisPage === 'Tv' ? (
            <BsHouseFill className={styles.navbarButtonIcon} />
          ) : (
            <BsHouse className={styles.navbarButtonIcon} />
          )}
          <label className={styles.navbarButtonLabel}>TV SHOWS</label>
        </li>
      </Link>
      <Link to='/home' onClick={() => changePage()}>
        <li className={styles.navbarButton}>
          {thisPage === 'News' ? (
            <BsHouseFill className={styles.navbarButtonIcon} />
          ) : (
            <BsHouse className={styles.navbarButtonIcon} />
          )}
          <label className={styles.navbarButtonLabel}>NEWS</label>
        </li>
      </Link>
      <Link to='/mylist' onClick={() => changePage()}>
        <li className={styles.navbarButton}>
          {thisPage === 'mylist' ? (
            <BsHouseFill className={styles.navbarButtonIcon} />
          ) : (
            <BsHouse className={styles.navbarButtonIcon} />
          )}
          <label className={styles.navbarButtonLabel}>MY LIST</label>
        </li>
      </Link>
    </ul>
  )
}

export default MobileNavbar;