import Film from "./Film";

const Locations = (props) => {
  const { dragStart, dragOver, drop, locations } = props;

  return (
    <div
      className="locations"
      onDragOver={(event) => {
        dragOver(event);
      }}
      onDrop={(event) => {
        drop(event);
      }}
    >
      <table
        className="locations table table-light table-hover table-striped"
        style={{ width: "100" }}
      >
        <thead className="locations">
          <tr className="locations">
            <th className="locations" style={{ width: "25%" }}>
              Title
            </th>
            <th className="locations" style={{ width: "40%" }}>
              Location
            </th>
            <th className="locations" style={{ width: "25%" }}>
              Director
            </th>
            <th className="locations" style={{ width: "10%" }}>
              Released
            </th>
          </tr>
        </thead>
        <tbody className="locations">
          {locations.map((loc, index) => {
            if (loc.locations && loc.which_list === "locations") {
              return (
                <Film
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

export default Locations;
