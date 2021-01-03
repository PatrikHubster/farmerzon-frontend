import { Col, Container, Image, Row } from "react-bootstrap";

import daniel from "./images/daniel.jpeg";
import patrik from "./images/patrik.jpeg";

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <h1>What is Farmerzon all about?</h1>
        <p class="lead">
            Farmerzon is our answer the climate crisis. It cannot be that we 
            exploit our earth and do not think of our children.
        </p>
        <p>
            Even the ancient Romans did not work for themselves, but for the 
            next generation. Their actions were characterized by foresight, so 
            more than 1,000 years later we are returning to the old principles 
            that are still important. With Farmerzon we want to achieve that 
            farmers no longer have to fear for their income, but that they 
            get a payment with which they can ensure high quality and sustainability. 
            It must be enough to live on a small farm. After all, it is the farmers 
            who secure the foundations of our lives. It must be worthwhile for 
            us to produce food and the consumer must not dig deeper into his 
            pocket. We want to bring the food directly from the field to the 
            customer, make the transport routes as sustainable and cheap as 
            possible to get money for the quality and sustainability.
        </p>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12} lg={6}>
          <Image
            src={patrik}
            roundedCircle
            width={300}
            height={300}
            className="d-block mx-auto my-5 img-fluid w-50"
          />
          <blockquote class="blockquote text-center">
            <p class="mb-0">
                Only when you allow everything to be questioned you can change the world.
            </p>
            <footer class="blockquote-footer">
              Founder of Farmerzon <cite title="Source Title">Patrik Huber</cite>
            </footer>
          </blockquote>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Image
            src={daniel}
            roundedCircle
            width={300}
            height={300}
            className="d-block mx-auto my-5 img-fluid w-50"
          />
          <blockquote class="blockquote text-center">
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              Software Engineer and Entrepreneur <cite title="Source Title">Daniel Englisch</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
