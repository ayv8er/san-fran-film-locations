import { useState, useEffect } from "react";
import Film from "./Film";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        setLocations(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          return <Film key={index} loc={loc} />;
        })}
      </tbody>
    </table>
  );
};

export default Locations;
