import { useState, useEffect } from "react";

import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState({});

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return null;
};

export default Locations;
