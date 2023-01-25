import React, { useEffect, useState } from "react";
import { MovieTopRated } from "../../component/api/Api";
import { TopRated } from "../../component/toprated/TopRated";

export const TopRatedPages = () => {
  const [rated, setRated] = useState([]);

  useEffect(() => {
    MovieTopRated().then((result) => {
      setRated(result.results);
    });
  }, []);

  const MovieRated = () => {
    return rated.map((r) => <TopRated data={r} key={r.id} />);
  };

  return (
    <div className="container">
      <MovieRated />
    </div>
  );
};
