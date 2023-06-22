import styles from './Card.module.css';
import { BsPlusLg, BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToMyList, areInMyList } from '../database/myList';

function Card({ width, element, customClass }) {
  const [inMyList, setInMyList] = useState(false);
  const [cardWidth, setCardWidth] = useState(width);

  const handleAddToMyList = async () => {
    addToMyList(element.id, element.title ? 'movie' : 'tv');
    setInMyList(areInMyList(element.id));
  };

  useEffect(() => {
    setInMyList(areInMyList(element.id));
    setCardWidth(width)
  })

  return (
    <div className={`${styles.card} ${styles[customClass]}`}>
      <Link 
        to={`/${element.title ? 'movie' : 'tv'}/${element.id}`} 
        style={{ position: 'relative' }} 
        id={element.id}>
        <img
          style={{width: cardWidth}}
          onClick={() => localStorage.setItem('SearchBarContent', '')}
          src={`https://image.tmdb.org/t/p/w400/${element.poster_path}`}
          alt={element.title}
          id={element.id}
        />
      </Link>
      <button className={styles.addToMyListButton} onClick={handleAddToMyList} title={inMyList ? 'Remove from My List' : 'Add to My List'}>
        {inMyList ? <BsCheckLg /> : <BsPlusLg />}
      </button>
    </div>
  )
}

export default Card;