import React, { useRef, useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styles from './Details.module.css';
import { BsPlusLg, BsCheckLg } from 'react-icons/bs';
import { addToMyList, areInMyList } from '../database/myList';

function Details({ data, type }) {
  const { id, title, name, backdrop_path, overview, runtime, genres, number_of_episodes, first_air_date, release_date, videos } = data;
  const [inMyList, setInMyList] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [player, setPlayer] = useState(null);
  const [videoId, setVideoId] = useState(videos?.results?.[0]?.key);
  const playerRef = useRef(null);
  const myListButtonHoverTitle = inMyList ? "Remove from My List" : "Add to My List";
  const myListButtonIcon = inMyList ? <BsCheckLg /> : <BsPlusLg />;
  const releaseYear = release_date?.slice(0, 4) || first_air_date?.slice(0, 4);
  const runtimeOrEpisodes = runtime && (runtime > 60 ? Math.floor(runtime / 60) + 'h' + (runtime - (Math.floor(runtime / 60) * 60)) + 'min' : runtime + 'min') || (number_of_episodes && number_of_episodes + " episodes") || "Coming Soon";
  const thisBackdropImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  const playVideo = () => {
    if (player) {
      setPlayerVisible(true);
      player.playVideo();
      player.getIframe().requestFullscreen();
    };
  };

  const pauseVideo = () => {
    if (player) {
      setPlayerVisible(false);
      player.pauseVideo();
    };
  };

  const exitFullscreenHandler = () => {
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        pauseVideo();
      };
    } catch (error) {
      console.log('An error occurred while pausing the video: ', error);
    };
  }

  const handleAddToMyList = async () => {
    addToMyList(id, type);
    setInMyList(areInMyList(id));
  };

  useEffect(() => {
    setVideoId(videos?.results?.[0]?.key);
    setInMyList(areInMyList(id));
  }, [data]);  

  useEffect(() => {
    document.addEventListener('fullscreenchange', exitFullscreenHandler);
    document.addEventListener('webkitfullscreenchange', exitFullscreenHandler);

    return () => {
      document.removeEventListener('fullscreenchange', exitFullscreenHandler);
      document.removeEventListener('webkitfullscreenchange', exitFullscreenHandler);
    };
  }, []);

  document.addEventListener('fullscreenchange', exitFullscreenHandler);
  document.addEventListener('webkitfullscreenchange', exitFullscreenHandler);

  return (
    <>
      {window.innerWidth <= 600 && <div style={{ height: '70px' }}></div>}
      <section className={styles.detailsImg} style={{ backgroundImage: thisBackdropImage}}>
        <div className={styles.detailsMask}>
          <div className={styles.detailsContent}>
            <h1 className={styles.detailsTitle}>{title || name}</h1>
            <h3 className={styles.detailsOverview}>{overview}</h3>
            <div className={styles.detailsData}>
              <span>{runtimeOrEpisodes}</span>
              <span>{releaseYear}</span>
              <span>{genres?.[0]?.name}</span>
              <span>{genres?.[1]?.name}</span>
            </div>
            <div className={styles.detailsButtons}>
              <button className={styles.detailsPlay} onClick={playVideo} disabled={!player}><span>&#9654;</span> Play</button>
              <button className={styles.detailsAddToMyList} onClick={handleAddToMyList} title={myListButtonHoverTitle}>{myListButtonIcon}</button>
            </div>
          </div>
        </div>
        <div ref={playerRef}>
          <YouTube
            key={id}
            style={{ display: playerVisible ? 'inherit' : 'none' }}
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
    </>
  );
}

export default Details;