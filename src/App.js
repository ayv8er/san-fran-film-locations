import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <Map />
          </Wrapper>
        </Col>
      </Row>
      <Row>
        <Searchbar />
      </Row>
      <Row className="justify-space-evenly">
        <Col xxl={8} xl={8} lg={8} md={8} sm={8} xs={8}>
          <Locations />
        </Col>
        <Itinerary />
      </Row>
    </Container>
  );
}

export default App;
