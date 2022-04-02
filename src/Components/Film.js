const Film = (props) => {
  const { loc } = props;

  return (
    <tr>
      <td style={{ height: "60px" }}>{loc.title}</td>
      <td style={{ height: "60px" }}>{loc.locations}</td>
      <td style={{ height: "60px" }}>{loc.director}</td>
      <td style={{ height: "60px" }}>{loc.release_year}</td>
    </tr>
  );
};

export default Film;
