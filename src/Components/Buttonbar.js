import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Buttonbar = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "1% 0 1% 0" }}
    >
      <Button
        style={{ marginRight: "1%", fontWeight: "bold" }}
        variant="secondary"
        size="md"
        as={NavLink}
        to="/"
      >
        Film Locations
      </Button>
      <Button
        style={{ marginLeft: "1%", fontWeight: "bold" }}
        variant="secondary"
        size="md"
        as={NavLink}
        to="/itinerary"
      >
        Itinerary
      </Button>
    </div>
  );
};

export default Buttonbar;
