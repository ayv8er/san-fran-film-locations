import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Searchbar = (props) => {
  const { searchTitle, setSearchTitle } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTitle(event.target.value);
  };

  return (
    <div
      className="d-flex justify-content-around"
      style={{ width: "100%", margin: "1%" }}
    >
      <div className="d-flex justify-content-center" style={{ width: "50%" }}>
        <label>
          Search by Movie Title:
          <input
            type="text"
            id="title"
            name="search"
            placeholder="enter title here"
            onChange={handleChange}
            value={searchTitle}
          />
        </label>
      </div>

      <div className="d-flex justify-content-center" style={{ width: "50%" }}>
        <Button variant="primary" size="sm" as={NavLink} to="/">
          Film Locations
        </Button>
        <Button
          style={{ marginLeft: "1%" }}
          variant="primary"
          size="sm"
          as={NavLink}
          to="/itinerary"
        >
          Itinerary
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
