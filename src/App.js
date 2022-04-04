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
  const [destinations, setDestinations] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const draggedFilm = useRef({});
  const draggedFilmIndex = useRef();

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        res.data.map((object, index) => {
          object.which_list = "locations";
          object.original_index = index;
          return object;
        });
        res.data.sort((a, b) => (a.title > b.title ? 1 : -1));
        setLocations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let title = searchTitle.trim().toLowerCase();
    if (title === "") {
      setLocations(locations);
    } else {
      const newLocations = locations.filter((location) => {
        return location.title.toLowerCase().includes(title);
      });
      setLocations(newLocations);
    }
  }, [searchTitle]);

  const dragStart = (event, currentIndex) => {
    if (event.target.className === "locations") {
      draggedFilm.current = locations[currentIndex];
    } else if (event.target.className === "itinerary") {
      draggedFilm.current = destinations[currentIndex];
    }
  };

  const dragOver = (event) => {
    if (
      (draggedFilm.current.which_list === "locations" &&
        event.target.className === "itinerary") ||
      (draggedFilm.current.which_list === "itinerary" &&
        event.target.className === "locations")
    ) {
      event.preventDefault();
    }
  };

  const drop = (event) => {
    if (
      draggedFilm.current.which_list === "locations" &&
      event.target.className === "itinerary"
    ) {
      draggedFilm.current.which_list = "itinerary";
      setDestinations([...destinations, draggedFilm.current]);
      const updatedLocations = locations.filter(
        (loc) => loc.original_index !== draggedFilm.current.original_index
      );
      setLocations(updatedLocations);
    } else if (
      draggedFilm.current.which_list === "itinerary" &&
      event.target.className === "locations"
    ) {
      draggedFilm.current.which_list = "locations";
      locations.splice(
        draggedFilm.current.original_index,
        0,
        draggedFilm.current
      );
      locations.sort((a, b) => (a.title > b.title ? 1 : -1));
      setLocations(locations);
      const updatedLocations = destinations.filter(
        (loc) => loc.original_index !== draggedFilm.current.original_index
      );
      setDestinations(updatedLocations);
    }
    draggedFilm.current = null;
    draggedFilmIndex.current = null;
  };

  return (
    <Container fluid>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
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
          />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <Itinerary
            dragStart={dragStart}
            dragOver={dragOver}
            drop={drop}
            destinations={destinations}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
