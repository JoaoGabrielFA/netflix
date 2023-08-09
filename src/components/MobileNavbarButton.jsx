import { Link } from 'react-router-dom';
import styles from './MobileNavbarButton.module.css';
import { BsSquare, BsSquareFill } from 'react-icons/bs';

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
          <BsSquareFill className={styles.navbarButtonIcon} />
        ) : (
          <BsSquare className={styles.navbarButtonIcon} />
        )}
        <label className={styles.navbarButtonLabel}>{label}</label>
      </li>
    </Link>
  )
}

export default MobileNavbarButton;