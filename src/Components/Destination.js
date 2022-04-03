const Destination = (props) => {
  const { dragStart, index, loc } = props;
  return (
    <tr
      draggable
      onDragStart={(event) => {
        dragStart(event, index);
      }}
    >
      <td style={{ height: "60px" }}>{loc.title}</td>
      <td style={{ height: "60px" }}>{loc.locations}</td>
    </tr>
  );
};

export default Destination;
