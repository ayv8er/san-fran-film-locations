import Destination from "./Destination";

const Itinerary = (props) => {
  const { dragStart, dragOver, drop, locations, allFilmLocationObj } = props;

  return (
    <div
      className="itinerary"
      style={{ height: "45%" }}
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
          {allFilmLocationObj.length === 0 ? (
            <tr className="itinerary">
              <td className="itinerary">Drag a Film Location</td>
            </tr>
          ) : (
            allFilmLocationObj.current.map((loc, index) => {
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
