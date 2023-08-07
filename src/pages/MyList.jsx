import { useState, useEffect } from 'react';
import { getMyList } from '../database/myList';
import styles from './MyList.module.css';
import Card from '../components/Card';
import LoadingScreen from '../components/LoadingScreen';
import { responsiveCardWidth } from '../database/cardWidth';

function MyList() {
  document.title = 'My List - Netflix';
  window.scrollTo(0, 0);
  localStorage.setItem('actualPage', 'MyList');

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
    <main>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className={styles.myList}>
            {myList.length > 0 ? (
              <>
                <p className={styles.myListTitle}>My List</p>
                <div className={styles.myListCards}>
                  {myList.map((element, key) => {
                    if (element.poster_path != null) {
                      return <Card element={element} key={key} customClass={'page'} width={cardWidth} />;
                    }
                  })}
                </div>
              </>
            ) : (
              <div className={styles.myListEmpty}>
                <span className={styles.myListEmptyMessage}>YOUR LIST IS EMPTY</span>
                <span className={styles.myListEmptyMessageDescription}>YOU CAN ADD SOMETHING TO YOUR LIST BY PRESSING THE PLUS SIGN (+) ON THE CARD</span>
              </div>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export default MyList;