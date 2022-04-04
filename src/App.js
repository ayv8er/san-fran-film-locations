import { useState, useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./Components/Google/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { fetchFilms } from "./utils/fetchFilms";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const draggedFilm = useRef({});
  const draggedFilmIndex = useRef(null);
  const isSearching = useRef(false);

  useEffect(() => {
    setLocations(fetchFilms());
  }, []);

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
        <Map locations={locations} destinations={destinations} />
      </Wrapper>

      <Searchbar
        isSearching={isSearching}
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        setFilteredList={setFilteredList}
        locations={locations}
      />
      <Row>
        <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <Locations
            dragStart={dragStart}
            dragOver={dragOver}
            drop={drop}
            locations={locations}
            isSearching={isSearching}
            filteredList={filteredList}
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
