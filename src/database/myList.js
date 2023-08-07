import { api_base, api_key } from '../database/tmdbAPI';

export const myList =  JSON.parse(localStorage.getItem('My List')) || []; 

export const addToMyList = (id, type) => {
  const index = myList.findIndex((element) => element[0] === id && element[1] === type);
  if (index === -1) {
    myList.push([id, type]);
  } else {
    myList.splice(index, 1);
  }
  localStorage.setItem('My List', JSON.stringify(myList));
};

export const getMyList = async () => {
  try{
    return await Promise.all(myList.map(async element => {
      return await fetch(`${api_base}/${element[1]}/${element[0]}?${api_key}`).then(response => (response.json()));
    }));
  } catch (error) {
    console.log('ERROR: ' + error);
    return [];
  };
};

export const areInMyList = (id) => {
  return myList.some(element => element.includes(id));
};