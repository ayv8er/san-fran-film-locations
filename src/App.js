import { useState, useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import axios from "axios";

import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const dragFilm = useRef({});

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

      <Row>
        <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <Locations
            dragFilm={dragFilm}
            searchTitle={searchTitle}
            locations={locations}
          />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Itinerary itinerary={itinerary} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
