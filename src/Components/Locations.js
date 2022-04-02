import { useState, useEffect } from "react";

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
    <>
      {locations.map((loc, index) => {
        return <p key={index}>{loc.title}</p>;
      })}
    </>
  );
};

export default Locations;
