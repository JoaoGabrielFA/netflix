import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.css';
import { search } from '../database/tmdbAPI';
import Card from '../components/Card';
import { responsiveCardWidth } from '../database/cardWidth';

function Search() {
  document.title = 'Search - Netflix';
  localStorage.setItem('actualPage', '');

  const { name } = useParams();
  const [searchData, setSearchData] = useState([]);

  const cardWidth = responsiveCardWidth;

  useEffect(() => {
    const handleChange = async (value) => {
      search(value).then(resp => setSearchData(resp));
    };

    handleChange(name);
  })

  return (
    <main className={styles.search} >
      <div className={styles.searchCards} >
        {searchData.length > 0 && searchData.map((element, key) => {
          if (element.poster_path != null) {
            return <Card element={element} key={key} customClass={'page'} width={cardWidth} />
          }
        })}
      </div>
    </main>
  )
}

export default Search;