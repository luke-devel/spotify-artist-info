function Genres({ genres }) {
  const genreList = genres.list.map((genre, i) => <li key={i}>{genre}</li>);

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>{genreList}</div>
  );
}

export default Genres;
