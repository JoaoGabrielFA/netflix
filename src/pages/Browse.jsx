import { useState, useEffect } from 'react';
import Row from '../components/Row';
import Banner from '../components/Banner';
import LoadingScreen from '../components/LoadingScreen';
import { getLists } from '../database/tmdbAPI';

function Browse({ name }) {
  document.title = `${name} - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', name);

  const [data, setData] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const randomNumber = Math.floor(Math.random() * 20);

  useEffect(() => {
    getLists(name).then((resp) => {
      setData(resp);
      setBannerData(resp[0].data[randomNumber]);
      setIsLoading(false);
    })
  }, [])

  return (
    <main>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {bannerData && (<Banner data={bannerData} />)}
          {data.length > 0 && data.map((element, key) => {
            return <Row key={key} name={element.title} data={element.data} />
          })}
        </>
      )}
    </main>
  )
}

export default Browse;