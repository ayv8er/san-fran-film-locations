import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

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
    <Container>
      {locations.map((loc, index) => {
        return <Film key={index} loc={loc} />;
      })}
    </Container>
  );
};

export default Locations;
