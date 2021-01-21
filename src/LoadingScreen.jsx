import { Container, Row, Spinner } from "react-bootstrap";

const LoadingScreen = (props) => {
  return (
    <Container className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Spinner animation="grow" />
      </Row>
    </Container>
  );
};

export default LoadingScreen;
