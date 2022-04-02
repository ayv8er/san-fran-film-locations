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

  const tableHeaders = ["Title", "Location", "Director", "Released"];

  return (
    <table className="table table-light table-hover table-striped">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
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
