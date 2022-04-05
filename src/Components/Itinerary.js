import Destination from "./Destination";

const Itinerary = (props) => {
  const { markers } = props;

  return (
    <div style={{ overflowY: "scroll", height: "40vh" }} className="locations">
      <table
        className="locations table table-light table-hover table-striped"
        style={{ width: "100%" }}
      >
        <thead className="locations">
          <tr className="locations">
            <th className="locations" style={{ width: "5%" }}></th>
            <th className="locations" style={{ width: "10%" }}>
              Order
            </th>
            <th className="locations" style={{ width: "20%" }}>
              Title
            </th>
            <th className="locations" style={{ width: "35%" }}>
              Location
            </th>
            <th className="locations" style={{ width: "20%" }}>
              Director
            </th>
            <th className="locations" style={{ width: "10%" }}>
              Released
            </th>
          </tr>
        </thead>
        <tbody className="locations">
          {markers.map((mark, index) => {
            return <Destination key={index} index={index} mark={mark} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerary;
