import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Row from '../components/Row';
import Details from '../components/Details';

function Watch() {
  document.title = "Watch - Netflix";

  window.scrollTo(0, 0);

  const api_key = 'api_key=a582086197c04ae62e80b81394a51086';
  const api_base = 'https://api.themoviedb.org/3';

  const { type, id } = useParams();
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${api_base}/${type}/${id}?${api_key}&append_to_response=videos`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, [api_base, type, id, api_key]);
  
  useEffect(() => {
    const loadDataa = async () => {
      try {
        const response = await fetch(`${api_base}/${type}/${id}?${api_key}&append_to_response=recommendations`);
        const related = await response.json();
        setRelated(related.recommendations.results);
      } catch (error) {
        console.error(error);
      }
    };
    loadDataa();
  }, [api_base, type, id, api_key]);

  const relatedMovies = {
    results: related || []
  }
  
  return (
    <>
      <Details data={data} type={type}/>
      {relatedMovies.results && <Row name="Related" data={relatedMovies} />}
    </>
  )
}

export default Watch;