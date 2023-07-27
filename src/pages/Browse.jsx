import { useState, useEffect } from 'react';
import styles from '../components/Banner.module.css';
import Row from '../components/Row';
import LoadingScreen from '../components/LoadingScreen';
import { getLists } from '../database/tmdbAPI';
import { Link } from 'react-router-dom';

function Browse({ name }) {
  document.title = `${name} - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', name);

  const [data, setData] = useState([]);
  const [banner, setBanner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const randomNumber = Math.floor(Math.random() * 20);
  const bannerName = banner && (banner.title || banner.name);

  useEffect(() => {
    getLists(name).then((resp) => {
      setData(resp);
      setBanner(resp[0].data[randomNumber]);
      setIsLoading(false);
    })
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {banner &&
            (<section className={styles.banner} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${banner.backdrop_path}')` }}>
              <div className={styles.bannerMask}>
                <div className={styles.bannerContent}>
                  <h1>{bannerName.length > 40 ? bannerName.substring(0, 40) + '...' : bannerName}</h1>
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
            </section>)}
          {data.length > 0 && data.map((element, key) => {
            return <Row key={key} name={element.title} data={element.data} />
          })}
        </>
      )}
    </>
  )
}

export default Browse;