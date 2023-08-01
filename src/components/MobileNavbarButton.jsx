import { Link } from 'react-router-dom';
import styles from './MobileNavbarButton.module.css';
import { BsHouse, BsHouseFill } from 'react-icons/bs';

function MobileNavbarButton({ path, page, label }) {

  const thisPage = localStorage.getItem('actualPage');

  const changePage = () => {
    localStorage.setItem('SearchBarContent', '');
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

  return (
    <Link to={path} className={styles.navbarButton} onClick={() => changePage()}>
      <li className={styles.navbarButtonLi}>
        {thisPage === page ? (
          <BsHouseFill className={styles.navbarButtonIcon} />
        ) : (
          <BsHouse className={styles.navbarButtonIcon} />
        )}
        <label className={styles.navbarButtonLabel}>{label}</label>
      </li>
    </Link>
  )
}

export default MobileNavbarButton;