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
      <Row className="justify-content-center">
        <Searchbar />
      </Row>
      <Row className="justify-content-center">
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
          <Locations />
        </Col>
        <Itinerary />
      </Row>
    </Container>
  );
}

export default App;
