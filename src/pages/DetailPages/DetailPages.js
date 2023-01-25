import React from "react";
import { useParams } from "react-router-dom";
import { GetDetailMovie } from "../../component/api/Api";
import { useEffect, useState } from "react";
import "./DetailPages.css";

export const DetailPages = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    GetDetailMovie(id).then((res) => {
      console.log(res);
      setMovie(res);
    });
  }, []);

  return (
    <div
      className="myjumbotron"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASEIMAGURL}/${movie.backdrop_path})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              className="w-100"
              src={`${process.env.REACT_APP_BASEIMAGURL}/${movie.poster_path}`}
            />
          </div>
          <div className="col-7">
            <h4>{movie.original_title}</h4>
            <p style={{ fontStyle: "italic" }}>"{movie.tagline}"</p>
            <p style={{ fontSize: 12, color: "#f4f4f4" }}>{movie.release_date}</p>
            <div>
              <h5 className="d-block mt-3">Genres </h5>
              {movie.genres?.map((g) => g.name + " ")}
              <p className="mt-2">Rate: ⭐ {movie.vote_average}</p>
            </div>
            <div>
              <h5>Overview</h5>
              <p className="mt-1"> {movie.overview}</p>
            </div>
            <div className="production">
              <h5>Production Companies</h5>
              <div className="d-flex">
                {movie.production_companies?.map((p) => (
                  <div key={p.id}>
                    <img
                      className=" w-50 h-50 mt-2"
                      src={`${process.env.REACT_APP_BASEIMAGURL}/${p.logo_path}`}
                    />
                    <div className="fw-bold">{p.name}</div>
                    <div> {p.origin_country}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
