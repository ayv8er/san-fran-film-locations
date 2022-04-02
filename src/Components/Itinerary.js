const Itinerary = (props) => {
  const { itinerary } = props;
  console.log(itinerary);

  return (
    <table
      className="table table-light table-hover table-striped"
      style={{ width: "100" }}
    >
      <thead>
        <tr>
          <th style={{ width: "50%" }}>Title</th>
          <th style={{ width: "50%" }}>Location</th>
        </tr>
      </thead>
      <tbody>
        {itinerary.length === 0 ? (
          <p>Drag a location you'd like to visit!</p>
        ) : null}
      </tbody>
    </table>
  );
};

export default Itinerary;
