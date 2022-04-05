import { useState, useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";

import axios from "axios";

import { Container } from "react-bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const draggedFilmId = useRef(null);

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        res.data.map((object, index) => {
          object.original_index = index;
          return object;
        });
        setLocations(res.data);
        setOriginals(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeObject = (array, index) => {
    const newArray = array;
    if (index === 0) {
      newArray.shift();
    } else if (index === array.length - 1) {
      newArray.pop();
    } else {
      const firstHalf = array.slice(0, index);
      const secondHalf = array.slice(index + 1);
      return [...firstHalf, ...secondHalf];
    }
    return newArray;
  };

  const dragStart = (event, id) => {
    draggedFilmId.current = id;
  };

  const dragOver = (event) => {
    if (event.target.className === "") {
      event.preventDefault();
    }
  };

  const drop = (event) => {
    setDestinations([...destinations, locations[draggedFilmId.current]]);
    const updatedLocations = removeObject(locations, draggedFilmId.current);
    setLocations(updatedLocations);
  };

  return (
    <Container fluid>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map dragOver={dragOver} drop={drop} destinations={destinations} />
      </Wrapper>
      <Searchbar
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        locations={locations}
      />
      <Locations
        dragStart={dragStart}
        dragOver={dragOver}
        drop={drop}
        locations={locations}
      />
    </Container>
  );
}

export default App;
