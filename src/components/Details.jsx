import styles from './Details.module.css';
import { BsPlusLg, BsCheckLg } from "react-icons/bs";
import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { addToMyList, areInMyList } from '../database/myList';

function Details({ data, type }) {
  const [playerVisible, setPlayerVisible] = useState(false);
  const [player, setPlayer] = useState(null);
  const [videoId, setVideoId] = useState('');
  const [inMyList, setInMyList] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    if (data.videos && data.videos.results && data.videos.results[0]) {
      setVideoId(data.videos.results[0].key);
    }
    
    setInMyList(areInMyList(data.id));
  }, [data]);

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  const playVideo = () => {
    if (player) {
      setPlayerVisible(true);
      player.playVideo();
      player.getIframe().requestFullscreen();
    }
  };

  const pauseVideo = () => {
    if (player) {
      setPlayerVisible(false);
      player.pauseVideo();
    }
  };

  document.addEventListener('fullscreenchange', exitFullscreenHandler);
  document.addEventListener('webkitfullscreenchange', exitFullscreenHandler);

  function exitFullscreenHandler() {
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        pauseVideo();
      }
    } catch (error) {
      console.log('Ocorreu um erro ao pausar o vídeo:', error);
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
      playVideo();
    }
  });
  
  const handleAddToMyList = async () => {
    addToMyList(data.id, type);
    setInMyList(areInMyList(data.id));
  };

  return (
    <section className={styles.detailsImg} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
      <div className={styles.detailsMask}>
        <div className={styles.detailsContent}>
          <h1 className={styles.detailsTitle}>{data.title || data.name}</h1>
          <h3 className={styles.detailsOverview}>
            {data.overview && data.overview.length > 220 ? data.overview.substring(0, 220) + "..." : data.overview}
          </h3>
          <div className={styles.detailsData}>
            <span>
              {data.runtime && (data.runtime > 60 ?
                Math.floor(data.runtime / 60) + 'h' + (data.runtime - (Math.floor(data.runtime / 60) * 60)) + 'min' : data.runtime + 'min') 
                || (data.number_of_episodes && data.number_of_episodes + " episodes") || "Coming Soon"
              }
            </span>
            <span>{data.release_date && data.release_date.slice(0, 4) || data.first_air_date && data.first_air_date.slice(0, 4)}</span>
            <span>{data.genres && data.genres[0] && data.genres[0].name}</span>
            <span>{data.genres && data.genres[1] && data.genres[1].name}</span>
          </div>
          <div className={styles.detailsButtons}>
            <button className={styles.detailsPlay} onClick={playVideo} disabled={player ? false : true}>
              <span>&#9654;</span> Play
            </button>
            <button className={styles.detailsAddToMyList} onClick={handleAddToMyList} title={inMyList ? "Remove from My List" : "Add to My List"}>
              {inMyList ? <BsCheckLg/> : <BsPlusLg/>}
            </button>
          </div>
        </div>
      </div>
      <div ref={playerRef}>
        <YouTube
          key={data.id}
          style={{ display: `${playerVisible ? 'inherit' : 'none'}` }}
          className={styles.detailsTrailer}
          videoId={videoId}
          opts={{
            playerVars: {
              controls: 0,
              showinfo: 0
            }
          }}
          onReady={onPlayerReady}
        />
      </div>
    </section>
  );
}

export default Details;