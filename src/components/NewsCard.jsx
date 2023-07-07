import styles from './NewsCard.module.css';
import { Link } from 'react-router-dom';

function NewsCard({ data }) {
  const months = ['','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCardDate}>
        <span className={styles.newsCardDateMonth}>
          {months[data.release_date.slice(6, 7)]}
        </span>
        <span className={styles.newsCardDateDay}>
          {data.release_date.slice(8, 10)}
        </span>
      </div>
      <div className={styles.newsCardInfo}>
        <div className={styles.newsCardInfoImg}
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
        </div>
        <span className={styles.newsCardInfoName}>
          {data.title}
        </span>
        <span className={styles.newsCardInfoOverview}>
          {
            data.overview.length > 150 ?
            data.overview.substring(0, 150) + "..." : data.overview
          }
        </span>
        <Link to={`/movie/${data.id}`}>
          <button className={styles.newsCardInfoButton}>More Info</button>
        </Link>
      </div>
    </div>
  )
}

export default NewsCard;