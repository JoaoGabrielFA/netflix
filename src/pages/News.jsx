import { useState, useEffect } from "react";
import { getLists } from "../database/tmdb";
import NewsCard from "../components/NewsCard";

function News() {
  document.title = `News - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', 'News');

  let date = new Date().toJSON().slice(5, 7);
  console.log(date);

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setData(await getLists('News'));
    };

    loadData();
  }, []);

  return (
    <div style={{ width: 'calc(100% - 20px)', padding: '65px 10px 10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {data && data.results && data.results.length > 0 && data.results.map((element, key) => {
          if(0 + element.release_date.slice(6, 7) >= new Date().toJSON().slice(5, 7))
          return <NewsCard data={element} key={key}/>
        })}
      </div>
    </div>
  )
}

export default News;