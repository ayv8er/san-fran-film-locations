import Destination from "./Destination";

const Itinerary = (props) => {
  const { dragStart, dragOver, drop, destinations } = props;

  return (
    <div
      className="itinerary"
      style={{ height: "45%" }} // fine tune this design issue
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <table
        className="itinerary table table-light table-hover table-striped"
        style={{ width: "100" }}
      >
        <thead className="itinerary">
          <tr className="itinerary">
            <th className="itinerary" style={{ width: "20%" }}>
              Title
            </th>
            <th className="itinerary" style={{ width: "80%" }}>
              Location
            </th>
          </tr>
        </thead>
        <tbody className="itinerary">
          {destinations.length === 0
            ? null
            : destinations.map((loc, index) => {
                if (loc.locations) {
                  return (
                    <Destination
                      dragStart={dragStart}
                      key={index}
                      index={index}
                      loc={loc}
                    />
                  );
                } else {
                  return null;
                }
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerary;
