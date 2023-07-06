import { useState, useEffect } from 'react';
import { getLists } from '../database/tmdb';
import Page from '../components/Page';

function Browse({ name }) {
  document.title = `${name} - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', name);

  let date = new Date().toJSON().slice(0, 10);
  console.log(date);

  const [data, setData] = useState([]);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setData(await getLists(name));
    };

    loadData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const randomNumber = Math.floor(Math.random() * 20);
      setBanner(data[0].data.results[randomNumber]);
    }
  }, [data]);

  return (
    <Page banner={banner} data={data} />
  )
}

export default Browse;