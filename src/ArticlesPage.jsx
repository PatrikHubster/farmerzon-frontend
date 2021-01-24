import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

import { articlesQuery } from "./logic/GraphQueries";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.articlesLogic = this.props.articlesLogic;
    this.articlesLogic.query(articlesQuery).then((result) => {
      this.setState({
        articles: result.data.articles,
      });
    });
  }

  render() {
    let articles = (
      <p>
        Ooops, it seems like there are no articles currently in the stock.
        Please come back later we will do an update for you in the meanwhile.
      </p>
    );
    if (this.state.articles.length !== 0) {
      articles = this.state.articles.map((article) => {
        return (
          <Row key={article.id}>
            <Col>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>{article.name}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Price: {article.price.toFixed(2)}$
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Size: {article.amount} {article.unit.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Expiration date:{" "}
                    {`${new Date(article.expirationDate).getUTCFullYear()}/${
                      new Date(article.expirationDate).getUTCMonth() + 1
                    }/${new Date(article.expirationDate).getUTCDate()}`}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-muted">
                  Only {article.amount} left in stock!
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        );
      });
    }

    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>Farmerzon - Our assortment</h1>
          </Col>
        </Row>
        {articles}
      </Container>
    );
  }
}

export default ArticlesPage;
