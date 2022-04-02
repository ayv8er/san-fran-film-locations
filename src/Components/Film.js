import { Row, Col } from "react-bootstrap";

const Film = (props) => {
  const { loc } = props;

  return (
    <Row>
      <Col>{loc.title}</Col>
    </Row>
  );
};

export default Film;
