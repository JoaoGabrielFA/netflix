import { useState, useEffect } from "react";
import { getMyList } from "../database/myList";
import styles from "../components/Row.module.css";
import Card from "../components/Card";

function MyList() {
  document.title = "My List - Netflix";

  const [myList, setMyList] = useState([]);

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
                return <Card element={element} key={key} customClass={'page'} />;
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