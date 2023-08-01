import styles from './MobileNavbar.module.css';
import MobileNavbarButton from './MobileNavbarButton';

function MobileNavbar() {

  return (
    <ul className={styles.navbar}>
      <MobileNavbarButton path='/home' page='Home' label='HOME'/>
      <MobileNavbarButton path='/tvshows' page='Tv' label='TV SHOWS'/>
      <MobileNavbarButton path='/movies' page='Movies' label='MOVIES'/>
      <MobileNavbarButton path='/news' page='News' label='NEWS'/>
      <MobileNavbarButton path='/mylist' page='MyList' label='MY LIST'/>
    </ul>
  )
}

export default MobileNavbar;