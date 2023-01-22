import React from "react";
import { useState, useEffect } from "react";
import { Popular } from "../../component/popular/Popular";
import { Api } from "../../component/api/Api";
import "./PopularPages.css";

export const PopularPages = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    Api().then((result) => {
      // console.log(result.data.results);
      setPopular(result.data.results);
    });
  }, []);

  const MovieList = () => {
    return popular.map((p) => <Popular data={p} key={p.id} />);
  };

  return (
    <div className="container">
      <MovieList />
    </div>
  );
};
