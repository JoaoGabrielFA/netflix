import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner({ data }) {
  const {title, name, backdrop_path, overview, id} = data;
  const backdropImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
  const bannerOverview = overview?.length > 210 ? overview.substring(0, 210) + '...' : overview;
  const bannerTitle = name?.length > 40 ? name.substring(0, 40) + '...' : name || title?.length > 40 ? title.substring(0, 40) + '...' : title;
  const type = title ? 'movie' : 'tv';

  return (
    <>
      {data && (
        <section className={styles.banner} style={{ backgroundImage: backdropImage }}>
          <div className={styles.bannerMask}>
            <div className={styles.bannerContent}>
              <h1>{bannerTitle}</h1>
              <p>{bannerOverview}</p>
              <div>
                <button className={styles.bannerPlay}><span>&#9654;</span> Play</button>
                <Link to={`/${type}/${id}`}id={id}>
                  <button className={styles.bannerInfo}><span>&#9432;</span> More Info</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Banner;