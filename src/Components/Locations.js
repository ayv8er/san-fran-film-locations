import Film from "./Film";
import Searchbar from "./Searchbar";
import Buttonbar from "./Buttonbar";

import { Row, Col } from "react-bootstrap";

const Locations = (props) => {
  const {
    dragStart,
    dragOver,
    drop,
    locations,
    searchTitle,
    setMarkers,
    setSearchTitle,
  } = props;

  const filteredList = () => {
    let searchPhrase = searchTitle.trim().toLowerCase();
    if (searchPhrase === "") {
      return locations;
    }
    return locations.filter((location) =>
      location.title.toLowerCase().includes(searchPhrase)
    );
  };

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Searchbar
            setMarkers={setMarkers}
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Buttonbar />
        </Col>
      </Row>
      <div
        style={{
          marginTop: "1%",
          border: "1px solid black",
          overflowY: "scroll",
          height: "39vh",
        }}
        className="locations"
        onDragOver={(event) => {
          dragOver(event);
        }}
        onDrop={(event) => {
          drop(event);
        }}
      >
        <table
          className="locations table table-light table-hover table-striped"
          style={{ width: "100%" }}
        >
          <thead className="locations">
            <tr className="locations">
              <th className="locations" style={{ width: "25%" }}>
                Title
              </th>
              <th className="locations" style={{ width: "50%" }}>
                Location
              </th>
              <th className="locations" style={{ width: "15%" }}>
                Director
              </th>
              <th className="locations" style={{ width: "10%" }}>
                Released
              </th>
            </tr>
          </thead>
          <tbody className="locations">
            {filteredList().map((loc, index) => {
              return (
                <Film
                  dragStart={dragStart}
                  key={index}
                  index={index}
                  loc={loc}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Locations;
