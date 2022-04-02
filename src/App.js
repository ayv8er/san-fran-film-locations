import { useState, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import axios from "axios";

import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

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
    <Container fluid>
      <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <Map />
      </Wrapper>
      <Searchbar searchTitle={searchTitle} setSearchTitle={setSearchTitle} />

      <Row className="justify-space-evenly">
        <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <Locations searchTitle={searchTitle} locations={locations} />
        </Col>
        <Itinerary />
      </Row>
    </Container>
  );
}

export default App;
