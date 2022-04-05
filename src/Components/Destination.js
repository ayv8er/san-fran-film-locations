const Destination = (props) => {
  const { index, mark } = props;

  return (
    <tr style={{ fontSize: "1rem" }} className="locations">
      <td className="locations" style={{ height: "auto" }}></td>
      <td className="locations" style={{ height: "auto" }}>
        {index + 1}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {mark.title}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {mark.locations}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {mark.director}
      </td>
      <td className="locations" style={{ height: "auto" }}>
        {mark.release_year}
      </td>
    </tr>
  );
};

export default Destination;
