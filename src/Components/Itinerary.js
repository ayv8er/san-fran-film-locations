import Destination from "./Destination";
import Buttonbar from "./Buttonbar";

import { Row, Col } from "react-bootstrap";

const Itinerary = (props) => {
  const { markers } = props;

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={6}></Col>
        <Col xs={12} sm={12} md={6}>
          <Buttonbar />
        </Col>
      </Row>

      {markers.length === 0 ? (
        <div
          style={{
            fontWeight: "bold",
            marginTop: "1%",
            border: "1px solid black",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "39vh",
          }}
        >
          Drag films from "Film Locations" into the map to display here!
        </div>
      ) : (
        <div
          style={{
            marginTop: "1%",
            border: "1px solid black",
            overflowY: "scroll",
            height: "39vh",
          }}
          className="locations"
        >
          <table
            className="locations table table-light table-hover table-striped"
            style={{ width: "100%" }}
          >
            <thead className="locations">
              <tr className="locations">
                <th className="locations" style={{ width: "10%" }}>
                  Order
                </th>
                <th className="locations" style={{ width: "20%" }}>
                  Title
                </th>
                <th className="locations" style={{ width: "45%" }}>
                  Location
                </th>
                <th className="locations" style={{ width: "10%" }}>
                  Director
                </th>
                <th className="locations" style={{ width: "10%" }}>
                  Released
                </th>
              </tr>
            </thead>
            <tbody className="locations">
              {markers.map((mark, index) => {
                return <Destination key={index} index={index} mark={mark} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Itinerary;
