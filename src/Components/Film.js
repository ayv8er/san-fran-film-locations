const Film = (props) => {
  const { loc } = props;

  return (
    <tr>
      <td>{loc.title}</td>
      <td>{loc.locations}</td>
      <td>{loc.director}</td>
      <td>{loc.release_year}</td>
    </tr>
  );
};

export default Film;
