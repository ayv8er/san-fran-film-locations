const Destination = (props) => {
  const { dragStart, index, loc } = props;
  return (
    <tr
      className="itinerary"
      style={{ position: "static" }}
      draggable
      onDragStart={() => {
        dragStart(index);
      }}
    >
      <td className="itinerary" style={{ height: "60px" }}>
        {loc.title}
      </td>
      <td className="itinerary" style={{ height: "60px" }}>
        {loc.locations}
      </td>
    </tr>
  );
};

export default Destination;
