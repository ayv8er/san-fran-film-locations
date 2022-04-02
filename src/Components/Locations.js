import Film from "./Film";

const Locations = (props) => {
  const { locations } = props;
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
        {locations.map((loc, index) => {
          if (loc.locations) {
            return <Film key={index} loc={loc} />;
          }
        })}
      </tbody>
    </table>
  );
};

export default Locations;
