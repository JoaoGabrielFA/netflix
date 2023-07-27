import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import Row from '../components/Row';
import LoadingScreen from '../components/LoadingScreen';
import { searchById } from "../database/tmdbAPI";

function Watch() {
  document.title = "Watch - Netflix";
  localStorage.setItem('actualPage', '');

  window.scrollTo(0, 0);

  const { type, id } = useParams();
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await searchById(type, id).then(resp => {
        setData(resp);
        setRelated(resp.recommendations.results);
      });
      setIsLoading(false);
    };
    loadData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Details data={data} type={type} />
          {related && related.length !== 0 && <Row name="More Like This" data={related} />}
        </>
      )}
    </>
  )
}

export default Watch;