import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

function Banner({ banner }) {

  const name = banner && (banner.title || banner.name);

  return (
    <>
      {banner && (
        <section className={styles.banner} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner.backdrop_path}')` }}>
          <div className={styles.bannerMask}>
            <div className={styles.bannerContent}>
              <h1>{name.length > 40 ? name.substring(0, 40) + '...' : name}</h1>
              <p>{banner.overview.length > 210 ? banner.overview.substring(0, 210) + '...' : banner.overview}</p>
              <div>
                <button className={styles.bannerPlay}><span>&#9654;</span> Play</button>
                <Link
                  to={`/${banner.title ? 'movie' : 'tv'}/${banner.id}`}
                  id={banner.id}>
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