import "./Popular.css";

export const Popular = (data) => {
  console.log(data);

  return (
    <div className="card">
      <img className="img" src={`${process.env.REACT_APP_BASEIMAGURL}/${data.data.poster_path}`} />
      <div className="rate">⭐{data.data.vote_average}</div>
      <p className="title">{data.data.original_title}</p>
      <p style={{ fontSize: 12 }}>{data.data.release_date}</p>
    </div>
  );
};
