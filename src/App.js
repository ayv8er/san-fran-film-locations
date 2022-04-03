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
  const [searchTitle, setSearchTitle] = useState("");

  let allFilmLocationObj = useRef([]);
  const dragFilm = useRef({});

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        res.data.map((object) => {
          return (object.which_list = "locations");
        });
        allFilmLocationObj.current = res.data;
        setLocations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let title = searchTitle.trim().toLowerCase();
    if (title === "") {
      setLocations(allFilmLocationObj.current);
    } else {
      const newLocations = allFilmLocationObj.current.filter((location) => {
        return location.title.toLowerCase().includes(title);
      });
      setLocations(newLocations);
    }
  }, [searchTitle]);

  const dragStart = (index) => {
    dragFilm.current = locations[index];
  };

  const dragOver = (event) => {
    if (
      (dragFilm.current.which_list === "locations" &&
        event.target.className === "itinerary") ||
      (dragFilm.current.which_list === "itinerary" &&
        event.target.className === "locations")
    ) {
      event.preventDefault();
    }
  };

  const drop = (event) => {
    if (
      dragFilm.current.which_list === "locations" &&
      event.target.className === "itinerary"
    ) {
      dragFilm.current.which_list = "itinerary";
      setLocations([...locations]);
    } else if (
      dragFilm.current.which_list === "itinerary" &&
      event.target.className === "locations"
    ) {
      dragFilm.current.which_list = "locations";
      setLocations([...locations]);
    }
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
            dragOver={dragOver}
            drop={drop}
            searchTitle={searchTitle}
            locations={locations}
            setLocations={setLocations}
          />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Itinerary
            dragStart={dragStart}
            dragOver={dragOver}
            drop={drop}
            allFilmLocationObj={allFilmLocationObj}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
