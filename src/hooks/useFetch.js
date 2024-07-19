import { useState, useEffect } from 'react';

export const useFetch = (apiPath, queryTerm) => {
  if (typeof queryTerm != 'undefined') {
    apiPath = queryTerm;
  }
  const [data, setData] = useState([]);

  const url = `https://www.omdbapi.com/?s=${apiPath}&apikey=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.Search);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
