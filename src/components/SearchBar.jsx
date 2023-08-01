import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import {BsSearch} from 'react-icons/bs';

function SearchBar() {
  const searchBarContent = localStorage.getItem('SearchBarContent') ?? '';
  localStorage.setItem('SearchBarContent', searchBarContent);

  const navigate = useNavigate();
  const [input, setInput] = useState(searchBarContent);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [searchInputVisibility, setSearchInputVisibility] = useState(styles.searchInputClosed);
  const [searchBarVisibility, setSearchBarVisibility] = useState(styles.searchBarClosed);

  useEffect(() => {
    setInput(searchBarContent);
    if (localStorage.getItem('SearchBarContent').length > 0) {
      navigate(`/search/${input}`);
    };
  }, [input, navigate]);

  const handleChange = async (event) => {
    const value = event.target.value;
    localStorage.setItem('SearchBarContent', value);
    setInput(value);
  };

  const openSearchBar = () => {
    if(!searchBarIsOpen){
      setSearchInputVisibility(styles.searchInputOpen);
      setSearchBarVisibility(styles.searchBarOpen);
      setSearchBarIsOpen(true);
      document.getElementById('searchInput').focus();
    } else {
      setSearchInputVisibility(styles.searchInputClosed);
      setSearchBarVisibility(styles.searchBarClosed);
      setSearchBarIsOpen(false);
    };
  };

  return (
    <div className={`${styles.searchBar} ${searchBarVisibility}`}>
      <BsSearch className={styles.searchButton} onClick={openSearchBar} />
      <input id='searchInput' className={`${styles.searchInput} ${searchInputVisibility}`} type='text' value={input} onChange={handleChange}></input>
    </div>
  )
}

export default SearchBar;