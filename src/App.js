import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./Components/Map";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { fetchFilmData } from "./utils/getFilmData";

import { Container } from "react-bootstrap";

function App() {
  const [locations, setLocations] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  let filmIndex;

  useEffect(() => {
    (async function () {
      setLocations(await fetchFilmData());
    })();
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
        filmIndex = index;
      }
      return null;
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

  const dragStart = (event) => {
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
    getLatLng(locations[filmIndex]);
    removeFilm(locations, filmIndex);
    filmIndex = null;
  };

  const getLatLng = (locationObject) => {
    new window.google.maps.Geocoder()
      .geocode({
        address: locationObject.locations,
        bounds: {
          west: -123,
          east: -122,
          south: 37,
          north: 38,
        },
      })
      .then((res) => {
        const lat = res.results[0].geometry.location.lat();
        const lng = res.results[0].geometry.location.lng();
        setMarkers([
          ...markers,
          {
            ...locationObject,
            lat,
            lng,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Sorry, we can't find that location so we'll remove it from the list!"
        );
      });
  };

  return (
    <Container fluid>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map dragOver={dragOver} drop={drop} markers={markers} />
      </Wrapper>

      <Routes>
        <Route
          path="/"
          element={
            <Locations
              dragStart={dragStart}
              dragOver={dragOver}
              drop={drop}
              locations={locations}
              searchTitle={searchTitle}
              setMarkers={setMarkers}
              setSearchTitle={setSearchTitle}
            />
          }
        />
        <Route path="/itinerary" element={<Itinerary markers={markers} />} />
      </Routes>
    </Container>
  );
}

export default App;
