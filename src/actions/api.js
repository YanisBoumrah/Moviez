import axios from 'axios';

const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?api_key=17a3557a96f0f45ee8ce6e79f5592f23&language=en-US&page=1&include_adult=false&query=";
    

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES';
export const GET_POPULAR_MOVIES  =   'GET_POPULAR_MOVIES';
export const GET_TOP_RATED_MOVIES = 'GET_TOP_RATED_MOVIES';
export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';


export const get_now_playing_movies = movies =>{
    return{
        type:GET_NOW_PLAYING_MOVIES,
        payload:movies
    }
}

export const get_popular_movies = movies =>{
  return{
    type:GET_POPULAR_MOVIES,
    payload:movies
  }
}

export const get_top_rated_movies = movies =>{
  return{
    type:GET_TOP_RATED_MOVIES,
    payload:movies
  }
}

export const get_upcoming_movies = movies =>{
  return{
    type:GET_UPCOMING_MOVIES,
    payload:movies
  }
}

export const getUpcoming = () => dispatch =>{
  axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=934780721e54373dbb92f5d1dc942560"
      )
      .then((response) => {
        dispatch(get_upcoming_movies((response.data.results)));
      });
}

export const getTopRated = () => dispatch =>{
  axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=934780721e54373dbb92f5d1dc942560"
      )
      .then((response) => {
        dispatch(get_top_rated_movies((response.data.results)));
      });
}

export const getPopular = () => dispatch =>{
  axios
  .get(
    "https://api.themoviedb.org/3/movie/popular?api_key=934780721e54373dbb92f5d1dc942560"
  )
  .then((response) => {
    dispatch(get_popular_movies((response.data.results)));
  });
}

export const getNowPlaying = () => dispatch =>{
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=934780721e54373dbb92f5d1dc942560"
      )
      .then((response) => {
        dispatch(get_now_playing_movies(response.data.results));
      });
}



export const getSearch = (searchTerm) => dispatch =>{
  axios.get(SEARCH_API+searchTerm).then((response) => {
    dispatch(get_now_playing_movies(response.data.results));
    })
}