import styles from './NewsPage.module.css';
import NewsCard from './NewsCard';

function NewsPage({data}) {
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setDate(today.getDate() - 30);
  lastMonth.toISOString().slice(0, 10);

  return (
    <div className={styles.newsPage}>
      <div className={styles.newsPageList}>
        {data && data.results && data.results.length > 0 && data.results
          .filter(element => new Date(element.release_date) >= new Date(today))
          .map((element, key) => (
            <NewsCard data={element} key={key} />
          ))}
      </div>
    </div>
  )
}

export default NewsPage;