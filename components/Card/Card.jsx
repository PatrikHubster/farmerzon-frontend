import styles from './Card.module.css';
import { Card as BCard } from 'react-bootstrap';

/**
 * image -> sets Image
 * title -> e.g. product-name
 * text  -> e.g. description
 * children -> will be rendered under description
 */
export const Card = (props) => (
  <BCard className={styles.card} >
    <BCard.Img variant="top" src={props.image ? props.image : ''} />
    <BCard.Body>
      <BCard.Title>{props.title}</BCard.Title>
      <BCard.Text className={styles.cardText}>
        {props.text}
      </BCard.Text>
      {props.children ? props.children : ''}
    </BCard.Body>
  </BCard>
);
