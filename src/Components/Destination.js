const Destination = (props) => {
  const { dragStart, loc, index } = props;
  return (
    <tr
      className="itinerary"
      draggable
      onDragStart={(event) => {
        dragStart(event, index);
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
