import Film from "./Film";

const Locations = (props) => {
  const { dragStart, dragOver, drop, locations, searchTitle } = props;

  const filteredList = () => {
    let searchPhrase = searchTitle.trim().toLowerCase();
    if (searchPhrase === "") {
      return locations;
    }
    return locations.filter((location) =>
      location.title.toLowerCase().includes(searchPhrase)
    );
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
        style={{ width: "100%" }}
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
          {filteredList().map((loc, index) => {
            return (
              <Film dragStart={dragStart} key={index} index={index} loc={loc} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Locations;
