import styles from '../components/NewsPage.module.css';
import NewsCard from '../components/NewsCard';
import LoadingScreen from '../components/LoadingScreen';
import { useEffect, useState } from 'react';
import { getData } from '../database/tmdbAPI';

function News() {
  document.title = `News - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', 'News');

  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setDate(today.getDate() - 30);
  lastMonth.toISOString().slice(0, 10);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData('/movie/upcoming?').then(resp => {
      const sortedData = resp.sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateA - dateB;
      });
      setData(sortedData);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <section className={styles.newsPage}>
            <div className={styles.newsPageList}>
              {data.filter(element => new Date(element.release_date) >= new Date(today)).map((element, key) => (
                element.backdrop_path && <NewsCard data={element} key={key} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  )
}

export default News;