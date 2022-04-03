import Destination from "./Destination";

const Itinerary = (props) => {
  const { dragStart, dragOver, drop, locations } = props;

  return (
    <div
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
          {locations.length === 0 ? (
            <tr>
              <td>Drag a Film Location</td>
            </tr>
          ) : (
            locations.map((loc, index) => {
              if (loc.locations && loc.which_list === "itinerary") {
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
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Itinerary;
