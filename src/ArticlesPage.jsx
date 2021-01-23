import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.articlesLogic = this.props.articlesLogic;
    this.articlesLogic.test();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Currently working on this page ...</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticlesPage;
