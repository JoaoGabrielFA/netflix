import { useState, useEffect } from 'react';
import { getMyList } from '../database/myList';
import styles from '../components/Row.module.css';
import Card from '../components/Card';
import LoadingScreen from '../components/LoadingScreen';
import { responsiveCardWidth } from '../database/cardWidth';

function MyList() {
  document.title = 'My List - Netflix';
  localStorage.setItem('actualPage', 'mylist');

  const [myList, setMyList] = useState([]);
  const [cardWidth, setCardWidth] = useState(responsiveCardWidth);
  const [isLoading, setIsLoading] = useState(true);

  const attCardWidth = () => {
    setCardWidth(responsiveCardWidth);
  }

  window.addEventListener('resize', attCardWidth);

  useEffect(() => {
    const loadMyList = async () => {
      const list = await getMyList();
      setMyList(list);
      setIsLoading(false);
    };
    loadMyList();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className={styles.row} style={{ paddingTop: '60px' }}>
            {myList.length > 0 ? (
              <>
                <p>My List</p>
                <div className={styles.rowCards} style={{ flexWrap: 'wrap' }}>
                  {myList.map((element, key) => {
                    if (element.poster_path != null) {
                      return <Card element={element} key={key} customClass={'page'} width={cardWidth} />;
                    }
                  })}
                </div>
              </>
            ) : (
              <p style={{ margin: 'auto', minHeight: '80vh' }}>Sua lista está vazia.</p>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default MyList;