import axios from "axios";

export const Api = async () => {
  const moviePopular = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return moviePopular;
};

export const SearchApi = async (q) => {
  const searchMovie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search/movie?page=1&query=${q}&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return searchMovie.data;
};

export const GetDetailMovie = async (id) => {
  const getDetail = await axios.get(`
  ${process.env.REACT_APP_BASEURL}/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}
  `);
  return getDetail.data;
};
