import Film from "./Film";

const Locations = (props) => {
  const { dragStart, searchTitle, locations } = props;

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
    <table
      className="table table-light table-hover table-striped"
      style={{ width: "100" }}
    >
      <thead>
        <tr>
          <th style={{ width: "25%" }}>Title</th>
          <th style={{ width: "40%" }}>Location</th>
          <th style={{ width: "25%" }}>Director</th>
          <th style={{ width: "10%" }}>Released</th>
        </tr>
      </thead>
      <tbody>
        {filteredLocations().map((loc, index) => {
          if (loc.locations && loc.which_list === "locations") {
            return (
              <Film dragStart={dragStart} key={index} index={index} loc={loc} />
            );
          } else {
            return null;
          }
        })}
      </tbody>
    </table>
  );
};

export default Locations;
