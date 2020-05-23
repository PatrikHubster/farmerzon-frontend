import styles from './Card.module.css';
import { Card as BCard, Button, Badge } from 'react-bootstrap';

/**
 * image -> sets Image
 * title -> e.g. product-name
 * text  -> e.g. description
 * children -> will be rendered under description
 */
const Card = (props) => (
  <BCard style={{ width: '18rem', margin: '3rem' }} >
    <BCard.Img variant="top" src={props.image ? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg/1024px-Organic_home-grown_tomatoes_-_unripe_to_ripe.jpg"} />
    <BCard.Body>
      <BCard.Title>{props.title}</BCard.Title>
      <BCard.Text>
        {props.text}
      </BCard.Text>
      {props.children ? props.children : ''}
    </BCard.Body>
  </BCard>
);

export default Card;
