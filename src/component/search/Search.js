import React from "react";
import { TextField } from "@mui/material";
import "./Search.css";
import Button from "@mui/material/Button";
import { SearchApi } from "../api/Api";
import { useState, useEffect } from "react";
import { Popular } from "../popular/Popular";
import { Api } from "../api/Api";

export const SearchList = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    Api().then((result) => {
      // console.log(result.data.results);
      setMovie(result.data.results);
    });
  }, []);

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
