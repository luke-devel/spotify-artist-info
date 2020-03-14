function Genres({ genres }) {
  const genreList = genres.list.map(genre => <li>{genre}</li>);

  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>{genreList}</div>
  );
}

export default Genres;
