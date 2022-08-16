import axios from 'axios';

const API_KEY = '6caca0c75338accb735dd13cb80db2a1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

class dataFetchApi {
  #SEARCH = 'search/movie';
  #TRAND = 'trending/movie/day';
  #BASE = 'movie/';

  //? Home trend

  trend = async page => {
    const respons = await axios.get(
      `${this.#TRAND}?api_key=${API_KEY}&page=${page}`
    );
    return respons.data.results;
  };

  //? search form

  search = async (query, page) => {
    const respons = await axios.get(
      `${this.#SEARCH}?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return respons.data;
  };

  //? fetchId

  fetchId = async id => {
    const respons = await axios.get(`${this.#BASE}/${id}?api_key=${API_KEY}`);

    return respons.data;
  };

  //? Cast

  cast = async id => {
    const respons = await axios.get(
      `${this.#BASE}/${id}/credits?api_key=${API_KEY}`
    );

    return respons.data.cast;
  };

  //? Reviews

  reviews = async id => {
    const respons = await axios.get(
      `${this.#BASE}/${id}/reviews?api_key=${API_KEY}`
    );

    return respons.data.results;
  };
}

const api = new dataFetchApi();

export default api;


  
