import React from "react";
import { useState, useEffect } from "react";
import { Popular } from "../../component/popular/Popular";
import { Api } from "../../component/api/Api";
import "./PopularPages.css";

export const PopularPages = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!loading) {
      setTimeout(() => {
        Api().then((result) => {
          setPopular(result.data.results);
          setLoading(false);
        });
      }, 2000);
    }
  }, []);

  const MovieList = () => {
    return loading ? (
      <p style={{ color: "#fff" }}>Loading...</p>
    ) : (
      popular.map((p) => <Popular data={p} key={p.id} />)
    );
  };

  return (
    <div className="container">
      <MovieList />
    </div>
  );
};
