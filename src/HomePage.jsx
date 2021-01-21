import { Card, Col, Container, Jumbotron, Row } from "react-bootstrap";

import barley from "./images/barley.JPG";
import kohlrabi from "./images/kohlrabi.JPG";
import salad from "./images/salad.JPG";
import walnuts from "./images/walnuts.JPG";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-none d-sm-block">
          <Jumbotron>
            <h1>Farmerzon - Technology meets sustainability</h1>
            <p>
              More and more soil in this world is being permanently destroyed.
              If it is not destroyed, it will be overfertilized. For us, this
              was a reason to act. We help sustainable agriculture become more
              attractive by optimizing trade routes. For the customer this means
              organic at a manageable price. Because sustainability has to 
              start now instead of tomorrow!
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mt-3">
            <Card.Img variant="top" src={barley} />
            <Card.Body>
              <Card.Title>Organic food</Card.Title>
              <Card.Text>
                Organic food doesn't have to be expensive. Farmerzon saves on itself 
                to invest in quality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mt-3">
            <Card.Img variant="top" src={kohlrabi} />
            <Card.Body>
              <Card.Title>Sustainable delivery</Card.Title>
              <Card.Text>
                In only 24 hours we deliver climate neutral to your doorstep. 
                Public transport makes it possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mt-3">
            <Card.Img variant="top" src={salad} />
            <Card.Body>
              <Card.Title>Exactly your taste</Card.Title>
              <Card.Text>
                We simply put together your meal plan for the week with you. 
                You can cook together as a family.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="mt-3">
            <Card.Img variant="top" src={walnuts} />
            <Card.Body>
              <Card.Title>Conscious diet</Card.Title>
              <Card.Text>
                Food must taste good. We recommend only recipes that taste good 
                to you and are also healthy. The taste must not come too short.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
