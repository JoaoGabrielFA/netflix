import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { BsPlusLg, BsCheckLg } from 'react-icons/bs';
import { addToMyList, areInMyList } from '../database/myList';

function Card({ width, element, customClass }) {
  const {id, title, poster_path} = element;
  const [inMyList, setInMyList] = useState(false);
  const [cardWidth, setCardWidth] = useState(width);
  const posterImage = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  const type = title ? 'movie' : 'tv';

  const handleAddToMyList = async () => {
    addToMyList(id, type);
    setInMyList(areInMyList(id));
  };

  useEffect(() => {
    setInMyList(areInMyList(id));
    setCardWidth(width)
  })

  return (
    <div className={`${styles.card} ${styles[customClass]}`}>
      <Link
        to={`/${type}/${id}`}
        style={{ position: 'relative' }}
        id={id}>
        <img
          style={{ width: cardWidth }}
          onClick={() => localStorage.setItem('SearchBarContent', '')}
          src={posterImage}
          alt={title}
          id={id}
        />
      </Link>
      <button className={styles.addToMyListButton} onClick={handleAddToMyList} title={inMyList ? 'Remove from My List' : 'Add to My List'}>
        {inMyList ? <BsCheckLg /> : <BsPlusLg />}
      </button>
    </div>
  )
}

export default Card;