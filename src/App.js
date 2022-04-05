import { useState, useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";

import axios from "axios";

import { Container } from "react-bootstrap";

function App() {
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [locations, setLocations] = useState([]);
  const filmIndex = useRef(null);

  useEffect(() => {
    axios
      .get("https://data.sfgov.org/resource/yitu-d5am.json")
      .then((res) => {
        const data = res.data.filter((object) => !!object.locations);
        setLocations(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeFilm = (array, index) => {
    if (index === 0) {
      array.shift();
      setLocations(array);
    } else if (index === array.length - 1) {
      array.pop();
      setLocations(array);
    } else {
      const firstHalf = array.slice(0, index);
      const secondHalf = array.slice(index + 1);
      setLocations([...firstHalf, ...secondHalf]);
    }
  };

  const findFilm = (filterTitle, filterLocation) => {
    locations.map((loc, index) => {
      if (filterTitle === loc.title && filterLocation === loc.locations) {
        filmIndex.current = index;
      }
    });
  };

  const replaceAmpersands = (phrase) => {
    const words = phrase.split(" ");
    if (words.length === 1) {
      return phrase;
    }
    const indexofAmpersand = words.indexOf("&amp;");
    words[indexofAmpersand] = "&";
    return words.join(" ");
  };

  const dragStart = (event, id) => {
    const titleHTML = replaceAmpersands(event.target.cells[0].innerHTML);
    const locationHTML = replaceAmpersands(event.target.cells[1].innerHTML);
    findFilm(titleHTML, locationHTML);
  };

  const dragOver = (event) => {
    if (event.target.className === "") {
      event.preventDefault();
    }
  };

  const drop = (event) => {
    if (locations[filmIndex.current] === undefined) {
      alert("Sorry, we're currently unable to locate this place of interest.");
      return;
    }
    getLatLng(locations[filmIndex.current]);
    removeFilm(locations, filmIndex.current);
    filmIndex.current = null;
  };

  const getLatLng = (locationObject) => {
    if (locationObject === undefined) {
      alert("Sorry, we're currently unable to locate this place of interest.");
      return;
    }
    new window.google.maps.Geocoder()
      .geocode({ address: locationObject.locations })
      .then((res) => {
        const lat = res.results[0].geometry.location.lat();
        const lng = res.results[0].geometry.location.lng();
        setMarkers([...markers, { title: locationObject.title, lat, lng }]);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Sorry, we're currently unable to locate this place of interest."
        );
      });
  };

  return (
    <Container fluid>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map
          dragOver={dragOver}
          drop={drop}
          map={map}
          setMap={setMap}
          markers={markers}
        />
      </Wrapper>
      <Searchbar searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <Locations
        dragStart={dragStart}
        dragOver={dragOver}
        drop={drop}
        locations={locations}
        searchTitle={searchTitle}
      />
    </Container>
  );
}

export default App;
