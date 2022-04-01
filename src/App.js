import Map from "./Components/Map";
import Searchbar from "./Components/Searchbar";
import Locations from "./Components/Locations";
import Itinerary from "./Components/Itinerary";

import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

function App() {
  return (
    <StyledApp>
      <Container fluid className="App">
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Map />
        </Row>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Searchbar />
        </Row>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Locations />
          <Itinerary />
        </Row>
      </Container>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  .App {
    display: flex;
  }
`;
