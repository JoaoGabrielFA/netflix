import { useState, useEffect } from "react";
import { getMyList } from "../database/myList";
import styles from "../components/Row.module.css";
import Card from "../components/Card";

function MyList() {
  document.title = "My List - Netflix";

  const [myList, setMyList] = useState([]);
  const [cardWidth, setCardWidth] = useState(window.innerWidth > 1024 ? ((window.innerWidth - 130) * 16.666 / 100)
    : window.innerWidth > 800 ? ((window.innerWidth - 130) * 20 / 100)
      : window.innerWidth > 600 ? ((window.innerWidth - 130) * 25 / 100)
        : ((window.innerWidth - 130) * 33.333 / 100));

  const attCardWidth = () => {
    setCardWidth(window.innerWidth > 1024 ? ((window.innerWidth - 130) * 16.666 / 100)
      : window.innerWidth > 800 ? ((window.innerWidth - 130) * 20 / 100)
        : window.innerWidth > 600 ? ((window.innerWidth - 130) * 25 / 100)
          : ((window.innerWidth - 130) * 33.333 / 100));
  }

  useEffect(() => {
    const loadMyList = async () => {
      const list = await getMyList();
      setMyList(list);
    };

    loadMyList();
  }, []);
  console.log(myList)
  return (
    <div className={styles.row} style={{ paddingTop: "60px" }}>
      {myList.length > 0 ? (
        <>
          <p>My List</p>
          <div className={styles.rowCards} style={{ flexWrap: "wrap" }}>
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
  )
}

export default MyList;