import React from "react";
import "./Search.css";
import { SearchApi } from "../api/Api";
import { useState, useEffect } from "react";
import { Popular } from "../popular/Popular";
import { Api } from "../api/Api";

export const SearchList = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        Api().then((result) => {
          setMovie(result.data.results);
          setLoading(false);
        });
      }, 2000);
    }
  }, [loading]);

  const MovieList = () => {
    return movie.map((p) => <Popular data={p} key={p.id} />);
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await SearchApi(q);
      setMovie(query.results);
    }
  };

  return (
    <>
      <div className="container">
        <input
          className="search"
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={({ target }) => search(target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="container">
        <MovieList />
      </div>
    </>
  );
};
