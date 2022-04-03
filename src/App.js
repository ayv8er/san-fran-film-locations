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
        res.data.map((object) => {
          return (object.which_list = "locations");
        });
        setLocations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dragStart = (event, index) => {
    dragFilm.current = locations[index];
    // event.dataTransfer.setData("id", index);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    // let id = event.dataTransfer.getData("id");
    dragFilm.current.which_list = "itinerary";
    setItinerary([...itinerary, dragFilm.current]);
    dragFilm.current = null;
  };

  return (
    <Container fluid>
      <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <Map />
      </Wrapper>
      <Searchbar searchTitle={searchTitle} setSearchTitle={setSearchTitle} />

      <Row>
        <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <Locations
            dragStart={dragStart}
            searchTitle={searchTitle}
            locations={locations}
          />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Itinerary dragOver={dragOver} drop={drop} itinerary={itinerary} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
