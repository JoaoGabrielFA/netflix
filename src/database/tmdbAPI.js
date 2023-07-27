export const api_key = 'api_key=a582086197c04ae62e80b81394a51086';
export const api_base = 'https://api.themoviedb.org/3';

export const getData = async (endpoint, filter) => {
  try{
    const page1 = await fetch(`${api_base + endpoint + api_key}&page=1&include_adult=false${filter}`).then(resp => resp.json()).then(resp => resp.results);
    const page2 = await fetch(`${api_base + endpoint + api_key}&page=2&include_adult=false${filter}`).then(resp => resp.json()).then(resp => resp.results);
    const page3 = await fetch(`${api_base + endpoint + api_key}&page=3&include_adult=false${filter}`).then(resp => resp.json()).then(resp => resp.results);
    const data  = [...page1, ...page2, ...page3];
    return data;
  } catch(error) {
    console.log('ERROR: ' + error);
    return[];
  }
}

export const search = async (value) => {
  try{
    let moviesData = await fetch(`${api_base + '/search/movie?' + api_key}&query=${value}&include_adult=false`).then(resp => resp.json()).then(resp => resp.results);
    let tvData = await fetch(`${api_base + '/search/tv?' + api_key}&query=${value}&include_adult=false`).then(resp => resp.json()).then(resp => resp.results);
    if(moviesData.length >= tvData.length){
      moviesData = [...moviesData.slice(0,12), ...tvData.slice(0,12)];
      return moviesData;
    } else {
      tvData = [...tvData.slice(0,12), ...moviesData.slice(0,12)];
      return tvData;
    }
  } catch(error) {
    console.log('ERROR: ' + error);
    return[];
  }
}

export const searchById = async (type, id) => {
  try{
    const response = await fetch(`${api_base}/${type}/${id}?${api_key}&include_adult=false&append_to_response=videos,recommendations`).then(resp => resp.json());
    return response;
  } catch(error) {
    console.log('ERROR: ' + error);
    return[];
  }
}

export const getLists = async (name) =>{
  switch(name){
    case 'Home': return getHomeLists('');
    case 'Tv': return getTvLists('');
    case 'Movies': return getMoviesLists('');
  }
}

export const getHomeLists = async () => {
  return[
    {
      title: 'Trending Now',
      data: await getData('/movie/popular?')
    },
    {
      title: 'New Releases',
      data: await getData('/movie/upcoming?')
    },
    {
      title: 'Action',
      data: await getData('/discover/movie?with_genres=28&sort_by=vote_average.desc&', '&vote_count.gte=5000')
    },
    {
      title: 'Animation',
      data: await getData('/discover/movie?with_genres=16&sort_by=vote_average.desc&', '&vote_count.gte=5000')
    },
    {
      title: 'Horror',
      data: await getData('/discover/movie?with_genres=27&sort_by=vote_average.desc&', '&vote_count.gte=5000')
    },
    {
      title: 'War',
      data: await getData('/discover/movie?with_genres=10752&sort_by=vote_average.desc&', '&vote_count.gte=5000')
    }
  ]
}

export const getTvLists = async () => {
  return[
    {
      title: 'Trending Now',
      data: await getData(`/discover/tv?popular&`, '&vote_count.gte=5000')
    },
    {
      title: 'Action & Adventure',
      data: await getData('/discover/tv?with_genres=10759&', '&vote_count.gte=500')
    },
    {
      title: 'Animation',
      data: await getData('/discover/tv?with_genres=16&', '&vote_count.gte=500')
    },
    {
      title: 'Comedy',
      data: await getData('/discover/tv?with_genres=35&', '&vote_count.gte=500')
    },
    {
      title: 'Crime',
      data: await getData('/discover/tv?with_genres=80&', '&vote_count.gte=500')
    },
    {
      title: 'Documentary',
      data: await getData('/discover/tv?with_genres=99&', '&vote_count.gte=50')
    },
    {
      title: 'Drama',
      data: await getData('/discover/tv?with_genres=18&', '&vote_count.gte=500')
    },
    {
      title: 'Family',
      data: await getData('/discover/tv?with_genres=10751&', '&vote_count.gte=500')
    },
    {
      title: 'Kids',
      data: await getData('/discover/tv?with_genres=10762&', '&vote_count.gte=500')
    },
    {
      title: 'Mistery',
      data: await getData('/discover/tv?with_genres=9648&', '&vote_count.gte=500')
    },
    {
      title: 'News',
      data: await getData('/discover/tv?with_genres=10763&', '&vote_count.gte=20')
    },
    {
      title: 'Reality',
      data: await getData('/discover/tv?with_genres=10764&', '&vote_count.gte=50')
    },
    {
      title: 'Sci-Fi & Fantasy',
      data: await getData('/discover/tv?with_genres=10765&', '&vote_count.gte=500')
    },
    {
      title: 'Soap',
      data: await getData('/discover/tv?with_genres=10766&', '&vote_count.gte=50')
    },
    {
      title: 'Talk',
      data: await getData('/discover/tv?with_genres=10767&', '&vote_count.gte=50')
    },
    {
      title: 'War & Politics',
      data: await getData('/discover/tv?with_genres=10768&', '&vote_count.gte=50')
    },
    {
      title: 'Western',
      data: await getData('/discover/tv?with_genres=37&', '&vote_count.gte=50')
    }
  ]
}

export const getMoviesLists = async () => {
  return[
    {
      title: 'Trending Now',
      data: await getData('/movie/popular?')
    },
    {
      title: 'Action',
      data: await getData('/discover/movie?with_genres=28&', '&vote_count.gte=500')
    },
    {
      title: 'Adventure',
      data: await getData('/discover/movie?with_genres=12&', '&vote_count.gte=500')
    },
    {
      title: 'Animation',
      data: await getData('/discover/movie?with_genres=16&', '&vote_count.gte=500')
    },
    {
      title: 'Comedy',
      data: await getData('/discover/movie?with_genres=35&', '&vote_count.gte=500')
    },
    {
      title: 'Crime',
      data: await getData('/discover/movie?with_genres=80&', '&vote_count.gte=500')
    },
    {
      title: 'Documentary',
      data: await getData('/discover/movie?with_genres=99&', '&vote_count.gte=500')
    },
    {
      title: 'Drama',
      data: await getData('/discover/movie?with_genres=18&', '&vote_count.gte=500')
    },
    {
      title: 'Family',
      data: await getData('/discover/movie?with_genres=10751&', '&vote_count.gte=500')
    },
    {
      title: 'Fantasy',
      data: await getData('/discover/movie?with_genres=14&', '&vote_count.gte=500')
    },
    {
      title: 'History',
      data: await getData('/discover/movie?with_genres=36&', '&vote_count.gte=500')
    },
    {
      title: 'Horror',
      data: await getData('/discover/movie?with_genres=27&', '&vote_count.gte=500')
    },
    {
      title: 'Music',
      data: await getData('/discover/movie?with_genres=10402&', '&vote_count.gte=500')
    },
    {
      title: 'Mystery',
      data: await getData('/discover/movie?with_genres=9648&', '&vote_count.gte=500')
    },
    {
      title: 'Romance',
      data: await getData('/discover/movie?with_genres=10749&', '&vote_count.gte=500')
    },
    {
      title: 'Science Fiction',
      data: await getData('/discover/movie?with_genres=878&', '&vote_count.gte=500')
    },
    {
      title: 'TV Movie',
      data: await getData('/discover/movie?with_genres=10770&', '&vote_count.gte=500')
    },
    {
      title: 'Thriller',
      data: await getData('/discover/movie?with_genres=53&', '&vote_count.gte=500')
    },
    {
      title: 'War',
      data: await getData('/discover/movie?with_genres=10752&', '&vote_count.gte=500')
    },
    {
      title: 'Western',
      data: await getData('/discover/movie?with_genres=37&', '&vote_count.gte=500')
    }
  ]
}