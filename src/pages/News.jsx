import { useState, useEffect } from "react";
import { getLists } from "../database/tmdb";
import NewsCard from "../components/NewsCard";

function News() {
  document.title = `News - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', 'News');

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await getLists('News');
      if (fetchedData && fetchedData.results && fetchedData.results.length > 0) {
        fetchedData.results.sort((a, b) => {
          const dateA = new Date(a.release_date);
          const dateB = new Date(b.release_date);
          return dateA - dateB;
        });
      }
      setData(fetchedData);
    };

    loadData();
  }, []);

  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setDate(today.getDate() - 30);
  lastMonth.toISOString().slice(0, 10);
  
  return (
    <div style={{ width: 'calc(100% - 20px)', padding: '65px 10px 10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data && data.results && data.results.length > 0 && data.results
          .filter(element => new Date(element.release_date) >= new Date(today))
          .map((element, key) => (
            <NewsCard data={element} key={key} />
          ))}
      </div>
    </div>
  )
}

export default News;