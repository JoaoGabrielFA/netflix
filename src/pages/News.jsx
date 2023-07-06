import { useState, useEffect } from "react";
import { getLists } from "../database/tmdb";

function News() {
  document.title = `News - Netflix`;
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', 'News');

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setData(await getLists('News'));
    };

    loadData();
  }, []);

  console.log(data)

  return (
    <div style={{ width: 'calc(100% - 20px)', padding: '65px 10px 10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', color: 'grey', fontSize: '1rem', marginBottom: '-5px' }}>
              0{data && data.results && data.results[0] && data.results[0].release_date && data.results[0].release_date.slice(6, 7)}
            </span>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5rem' }}>
              {data && data.results && data.results[0] && data.results[0].release_date && data.results[0].release_date.slice(8, 10)}
            </span>
          </div>
          <div style={{ width: '86%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data && data.results && data.results[0].backdrop_path})`
              }}>
            </div>
            <span style={{margin:'5px 0', 
                          color: 'white', 
                          fontSize:'1.5rem', 
                          fontWeight:'bold'}}>
            {data &&
                data.results &&
                data.results[0] &&
                data.results[0].title}
            </span>
            <span style={{ color: 'white' }}>
                {data &&
                data.results &&
                data.results[0] &&
                data.results[0].overview &&
                data.results[0].overview.length > 150 ?
                data.results[0].overview.substring(0, 150) + "..." : data.overview
                }
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', color: 'grey', fontSize: '1rem', marginBottom: '-5px' }}>
              0{data && data.results && data.results[1] && data.results[1].release_date && data.results[1].release_date.slice(6, 7)}
            </span>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5rem' }}>
              {data && data.results && data.results[1] && data.results[1].release_date && data.results[1].release_date.slice(8, 10)}
            </span>
          </div>
          <div style={{ width: '86%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data && data.results && data.results[1].backdrop_path})`
              }}>
            </div>
            <span style={{margin:'5px 0', 
                          color: 'white', 
                          fontSize:'1.5rem', 
                          fontWeight:'bold'}}>
            {data &&
                data.results &&
                data.results[1] &&
                data.results[1].title}
            </span>
            <span style={{ color: 'white' }}>
                {data &&
                data.results &&
                data.results[1] &&
                data.results[1].overview &&
                data.results[1].overview.length > 150 ?
                data.results[1].overview.substring(0, 150) + "..." : data.overview
                }
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', color: 'grey', fontSize: '1rem', marginBottom: '-5px' }}>
              0{data && data.results && data.results[2] && data.results[2].release_date && data.results[2].release_date.slice(6, 7)}
            </span>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5rem' }}>
              {data && data.results && data.results[2] && data.results[2].release_date && data.results[2].release_date.slice(8, 10)}
            </span>
          </div>
          <div style={{ width: '86%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data && data.results && data.results[2].backdrop_path})`
              }}>
            </div>
            <span style={{margin:'5px 0', 
                          color: 'white', 
                          fontSize:'1.5rem', 
                          fontWeight:'bold'}}>
            {data &&
                data.results &&
                data.results[2] &&
                data.results[2].title}
            </span>
            <span style={{ color: 'white' }}>
                {data &&
                data.results &&
                data.results[2] &&
                data.results[2].overview &&
                data.results[2].overview.length > 150 ?
                data.results[2].overview.substring(0, 150) + "..." : data.overview
                }
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', color: 'grey', fontSize: '1rem', marginBottom: '-5px' }}>
              0{data && data.results && data.results[3] && data.results[3].release_date && data.results[3].release_date.slice(6, 7)}
            </span>
            <span style={{ fontWeight: 'bold', color: 'white', fontSize: '2.5rem' }}>
              {data && data.results && data.results[3] && data.results[3].release_date && data.results[3].release_date.slice(8, 10)}
            </span>
          </div>
          <div style={{ width: '86%', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%',
                aspectRatio: '16/9',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data && data.results && data.results[3].backdrop_path})`
              }}>
            </div>
            <span style={{margin:'5px 0', 
                          color: 'white', 
                          fontSize:'1.5rem', 
                          fontWeight:'bold'}}>
            {data &&
                data.results &&
                data.results[3] &&
                data.results[3].title}
            </span>
            <span style={{ color: 'white' }}>
                {data &&
                data.results &&
                data.results[3] &&
                data.results[3].overview &&
                data.results[3].overview.length > 150 ?
                data.results[3].overview.substring(0, 150) + "..." : data.overview
                }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;