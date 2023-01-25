import React from "react";
import { Link } from "react-router-dom";
import "./TopRated.css";

export const TopRated = ({ data }) => {
  return (
    <div className="mycard">
      <Link to={"/movie/" + data.id}>
        <img className="img" src={`${process.env.REACT_APP_BASEIMAGURL}/${data.poster_path}`} />
      </Link>
      <div className="rate">⭐{data.vote_average}</div>
      <Link className="text-decoration-none text-white" to={"/movie/" + data.id}>
        <p className="title">{data.original_title}</p>
      </Link>
      <p style={{ fontSize: 12 }}>{data.release_date}</p>
    </div>
  );
};
