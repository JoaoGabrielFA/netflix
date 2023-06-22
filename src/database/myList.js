const api_key = 'api_key=a582086197c04ae62e80b81394a51086';
const api_base = 'https://api.themoviedb.org/3';

export let myList = [];
myList = JSON.parse(localStorage.getItem('My List')) == null ? myList = [] : myList = JSON.parse(localStorage.getItem('My List', myList));

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
  return Promise.all(myList.map((element, key) => {
    return fetch(`${api_base}/${element[1]}/${element[0]}?${api_key}`).then(response => (response.json()));
  }));
};

export const areInMyList = (id) => {
  let inMyList;
  for(let i = 0; i < myList.length; i++){
    if(myList[i].includes(id)){
      inMyList = true;
      break;
    }
  }
  return inMyList;
};