import Destination from "./Destination";

const Itinerary = (props) => {
  const { dragOver, drop, itinerary } = props;

  return (
    <div
      className="itinerary"
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <table
        className="table table-light table-hover table-striped"
        style={{ width: "100" }}
      >
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Title</th>
            <th style={{ width: "80%" }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {itinerary.length === 0 ? (
            <tr>
              <td>Drag a Film Location</td>
            </tr>
          ) : (
            itinerary.map((loc, index) => {
              return <Destination key={index} loc={loc} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerary;
