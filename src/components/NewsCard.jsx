import { Link } from 'react-router-dom';
import styles from './NewsCard.module.css';

function NewsCard({ data }) {
  const {backdrop_path, id, overview, release_date, title} = data;
  const months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const moreInfoPath = `/movie/${id}`;
  const thisBackdropImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
  const thisDay = release_date.slice(8, 10);
  const thisMonth = months[release_date.slice(6, 7)];
  const thisOverview = overview.length > 150 ? overview.substring(0, 150) + "..." : overview;

  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCardDate}>
        <span className={styles.newsCardDateMonth}>{thisMonth}</span>
        <span className={styles.newsCardDateDay}>{thisDay}</span>
      </div>
      <div className={styles.newsCardInfo}>
        <div className={styles.newsCardInfoImg}style={{ backgroundImage: thisBackdropImage }}></div>
        <span className={styles.newsCardInfoName}>{title}</span>
        <span className={styles.newsCardInfoOverview}>{thisOverview}</span>
        <Link to={moreInfoPath}><button className={styles.newsCardInfoButton}>More Info</button></Link>
      </div>
    </div>
  )
}

export default NewsCard;