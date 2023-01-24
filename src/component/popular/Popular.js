import "./Popular.css";
import { Link } from "react-router-dom";

export const Popular = (data) => {
  return (
    <div className="mycard">
      <Link to={"/movie/" + data.data.id}>
        <img
          className="img"
          src={`${process.env.REACT_APP_BASEIMAGURL}/${data.data.poster_path}`}
        />
      </Link>
      <div className="rate">⭐{data.data.vote_average}</div>
      <Link className="text-decoration-none text-white" to={"/movie/" + data.data.id}>
        <p className="title">{data.data.original_title}</p>
      </Link>
      <p style={{ fontSize: 12 }}>{data.data.release_date}</p>
    </div>
  );
};
