export const api_key = 'api_key=a582086197c04ae62e80b81394a51086';
export const api_base = 'https://api.themoviedb.org/3';

const getData = async (endpoint, filter) => {
  const req = await fetch(`${api_base}${endpoint}${api_key}&include_adult=false` + filter);
  const req2 = await fetch(`${api_base}${endpoint}${api_key}&page=2&include_adult=false` + filter);
  const json = await req.json();
  const json2 = await req2.json();
  json.results = [...json.results, ...json2.results]
  return json;
}

//&sort_by=popularity.desc&&with_original_language=pt
//language=pt-BR&

export const getLists = async (name) =>{
  if(name === 'Home'){
    return getHomeLists('');
  }
  if(name === 'Tv'){
    return getTvLists('');
  }
  if(name === 'Movies'){
    return getMoviesLists('');
  }
  if(name === 'News'){
    return getNewsLists('');
  }
}

export const getHomeLists = async (language) => {
  return[
    {
      title: 'Trending Now',
      data: await getData('/movie/popular?'+ language)
    },
    {
      title: 'New Releases',
      data: await getData('/movie/upcoming?'+ language)
    },
    {
      title: 'Action',
      data: await getData('/discover/movie?with_genres=28&sort_by=vote_average.desc&'+ language, '&vote_count.gte=5000')
    },
    {
      title: 'Animation',
      data: await getData('/discover/movie?with_genres=16&sort_by=vote_average.desc&'+ language, '&vote_count.gte=5000')
    },
    {
      title: 'Horror',
      data: await getData('/discover/movie?with_genres=27&sort_by=vote_average.desc&'+ language, '&vote_count.gte=5000')
    },
    {
      title: 'War',
      data: await getData('/discover/movie?with_genres=10752&sort_by=vote_average.desc&'+ language, '&vote_count.gte=5000')
    }
  ]
}

export const getTvLists = async (language) => {
  return[
    {
      title: 'Trending Now',
      data: await getData(`/discover/tv?popular&${language}`, '&vote_count.gte=5000')
    },
    {
      title: 'Action & Adventure',
      data: await getData('/discover/tv?with_genres=10759&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Animation',
      data: await getData('/discover/tv?with_genres=16&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Comedy',
      data: await getData('/discover/tv?with_genres=35&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Crime',
      data: await getData('/discover/tv?with_genres=80&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Documentary',
      data: await getData('/discover/tv?with_genres=99&'+ language, '&vote_count.gte=50')
    },
    {
      title: 'Drama',
      data: await getData('/discover/tv?with_genres=18&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Family',
      data: await getData('/discover/tv?with_genres=10751&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Kids',
      data: await getData('/discover/tv?with_genres=10762&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Mistery',
      data: await getData('/discover/tv?with_genres=9648&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'News',
      data: await getData('/discover/tv?with_genres=10763&'+ language, '&vote_count.gte=20')
    },
    {
      title: 'Reality',
      data: await getData('/discover/tv?with_genres=10764&'+ language, '&vote_count.gte=50')
    },
    {
      title: 'Sci-Fi & Fantasy',
      data: await getData('/discover/tv?with_genres=10765&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Soap',
      data: await getData('/discover/tv?with_genres=10766&'+ language, '&vote_count.gte=50')
    },
    {
      title: 'Talk',
      data: await getData('/discover/tv?with_genres=10767&'+ language, '&vote_count.gte=50')
    },
    {
      title: 'War & Politics',
      data: await getData('/discover/tv?with_genres=10768&'+ language, '&vote_count.gte=50')
    },
    {
      title: 'Western',
      data: await getData('/discover/tv?with_genres=37&'+ language, '&vote_count.gte=50')
    }
  ]
}

export const getMoviesLists = async (language) => {
  return[
    {
      title: 'Trending Now',
      data: await getData('/movie/popular?'+ language)
    },
    {
      title: 'Action',
      data: await getData('/discover/movie?with_genres=28&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Adventure',
      data: await getData('/discover/movie?with_genres=12&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Animation',
      data: await getData('/discover/movie?with_genres=16&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Comedy',
      data: await getData('/discover/movie?with_genres=35&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Crime',
      data: await getData('/discover/movie?with_genres=80&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Documentary',
      data: await getData('/discover/movie?with_genres=99&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Drama',
      data: await getData('/discover/movie?with_genres=18&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Family',
      data: await getData('/discover/movie?with_genres=10751&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Fantasy',
      data: await getData('/discover/movie?with_genres=14&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'History',
      data: await getData('/discover/movie?with_genres=36&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Horror',
      data: await getData('/discover/movie?with_genres=27&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Music',
      data: await getData('/discover/movie?with_genres=10402&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Mystery',
      data: await getData('/discover/movie?with_genres=9648&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Romance',
      data: await getData('/discover/movie?with_genres=10749&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Science Fiction',
      data: await getData('/discover/movie?with_genres=878&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'TV Movie',
      data: await getData('/discover/movie?with_genres=10770&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Thriller',
      data: await getData('/discover/movie?with_genres=53&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'War',
      data: await getData('/discover/movie?with_genres=10752&'+ language, '&vote_count.gte=500')
    },
    {
      title: 'Western',
      data: await getData('/discover/movie?with_genres=37&'+ language, '&vote_count.gte=500')
    }
  ]
}

export const getNewsLists = async (language) => {
  return await getData('/movie/upcoming?sort_by=relese_date&'+ language);
}