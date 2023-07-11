import { useState, useEffect } from "react";
import { getLists } from "../database/tmdb";
import NewsPage from "../components/NewsPage";

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
  
  return (
    <NewsPage data={data}/>
  )
}

export default News;