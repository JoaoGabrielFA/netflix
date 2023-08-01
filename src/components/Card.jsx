import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { BsPlusLg, BsCheckLg } from 'react-icons/bs';
import { addToMyList, areInMyList } from '../database/myList';

function Card({ width, element, customClass }) {
  const {id, title, poster_path} = element;
  const [inMyList, setInMyList] = useState(false);
  const [cardWidth, setCardWidth] = useState(width);
  const myListButtonHoverTitle = inMyList ? "Remove from My List" : "Add to My List";
  const myListButtonIcon = inMyList ? <BsCheckLg /> : <BsPlusLg />;
  const thisPosterImage = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  const type = title ? 'movie' : 'tv';

  const clearSearchBar = () => {
    localStorage.setItem('SearchBarContent', '');
  }

  const handleAddToMyList = async () => {
    addToMyList(id, type);
    setInMyList(areInMyList(id));
  };

  useEffect(() => {
    setInMyList(areInMyList(id));
    setCardWidth(width);
  })

  return (
    <div className={`${styles.card} ${styles[customClass]}`}>
      <Link
        to={`/${type}/${id}`}
        id={id}>
        <img
          style={{ width: cardWidth }}
          onClick={clearSearchBar}
          src={thisPosterImage}
          alt={title}
          id={id}
        />
      </Link>
      <button className={styles.addToMyListButton} onClick={handleAddToMyList} title={myListButtonHoverTitle}>{myListButtonIcon}</button>
    </div>
  )
}

export default Card;