import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { api_base, api_key } from '../database/tmdb';
import Details from '../components/Details';
import Row from '../components/Row';

function Watch() {
  document.title = "Watch - Netflix";
  localStorage.setItem('actualPage', '');

  window.scrollTo(0, 0);

  const { type, id } = useParams();
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${api_base}/${type}/${id}?${api_key}&include_adult=false&append_to_response=videos`);
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
      {relatedMovies.results && relatedMovies.results.length !== 0 && <Row name="More Like This" data={relatedMovies}/>}
    </>
  )
}

export default Watch;