const Film = (props) => {
  const { dragStart, loc } = props;
  return (
    <tr
      style={{ fontSize: "1rem" }}
      className="locations"
      draggable
      onDragStart={(event) => {
        dragStart(event);
      }}
    >
      <td className="locations" style={{ height: "auto" }}>
        {loc.title}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {loc.locations}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {loc.director}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {loc.release_year}
      </td>
    </tr>
  );
};

export default Film;
