import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Row.module.css";
import Card from "../components/Card";

function Search() {
  document.title = "Search - Netflix";

  const { name } = useParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const handleChange = async (value) => {
      const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a582086197c04ae62e80b81394a51086&query=${value}&include_adult=false`);
      const tv = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=a582086197c04ae62e80b81394a51086&query=${value}&include_adult=false`);
      const dataMovies = await movies.json();
      const dataTv = await tv.json();
      let data;
      if(dataMovies.length >= dataTv.length){
        dataMovies.results = [...dataMovies.results.slice(0,12), ...dataTv.results.slice(0,12)];
        data = dataMovies;
      } else {
        dataTv.results = [...dataTv.results.slice(0,12), ...dataMovies.results.slice(0,12)];
        data = dataTv;
      }
      document.getElementById("searchBar").addEventListener('input', setSearchData(data.results));
    }

    handleChange(name)
  })

  return (
    <div className={styles.row} style={{paddingTop: "60px"}}>
      <div className={styles.rowCards} style={{flexWrap: "wrap"}}>
        {searchData.length > 0 && searchData.map((element, key) => {
          if (element.poster_path != null) {
            return <Card element={element} key={key} customClass={'page'}/>
          }
        })}
      </div>
    </div>
  )
}

export default Search;