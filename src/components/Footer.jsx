import styles from './Footer.module.css';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMedia}>
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter/>
        <BsYoutube/>
      </div>
      <ul className={styles.footerList}>
        <li><a href='#'>Audio Description</a></li>
        <li><a href='#'>Help Center</a></li>
        <li><a href='#'>Gift Cards</a></li>
        <li><a href='#'>Media Center</a></li>
        <li><a href='#'>Investor Relations</a></li>
        <li><a href='#'>Jobs</a></li>
        <li><a href='#'>Terms of Use</a></li>
        <li><a href='#'>Privacy</a></li>
        <li><a href='#'>Legal Notices</a></li>
        <li><a href='#'>Cookie Preferences</a></li>
        <li><a href='#'>Corporate Information</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
      <p className={styles.footerButton}>Service Code</p>
      <p className={styles.copyright}>&copy; 1997-2023 Netflix, Inc.</p>
      <p className={styles.disclaimer}>Developed by <a href='https://www.linkedin.com/in/joao-gabriel-fa/' target='_blank'>João Gabriel de Freitas Antunes</a> based on Netflix site to study React.js, all the data is from the <a href='https://developer.themoviedb.org/reference/intro/getting-started' target='_blank'>TMDB API</a>.</p>
    </footer>
  )
}

export default Footer;