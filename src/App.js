import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Map />
      </Row>
      <Row className="justify-content-center">
        <Searchbar />
      </Row>
      <Row className="justify-content-center">
        <Locations />
        <Itinerary />
      </Row>
    </Container>
  );
}

export default App;
