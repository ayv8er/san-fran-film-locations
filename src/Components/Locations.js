import Film from "./Film";

const Locations = (props) => {
  const { dragStart, dragOver, drop, searchTitle, locations } = props;

  const filteredLocations = () => {
    let title = searchTitle.trim().toLowerCase();
    if (title === "") {
      return locations;
    }
    let newLocations = locations.filter((location) => {
      return location.title.toLowerCase().includes(title);
    });
    return newLocations;
  };

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
          {filteredLocations().map((loc, index) => {
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
