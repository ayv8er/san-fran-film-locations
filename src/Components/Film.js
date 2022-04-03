const Film = (props) => {
  const { dragStart, loc, index } = props;
  return (
    <tr
      className="locations"
      draggable
      onDragStart={() => {
        dragStart(index);
      }}
    >
      <td className="locations" style={{ height: "60px" }}>
        {loc.title}
      </td>
      <td className="locations" style={{ height: "60px" }}>
        {loc.locations}
      </td>
      <td className="locations" style={{ height: "60px" }}>
        {loc.director}
      </td>
      <td className="locations" style={{ height: "60px" }}>
        {loc.release_year}
      </td>
    </tr>
  );
};

export default Film;
