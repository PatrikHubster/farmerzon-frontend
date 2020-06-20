import styles from './Card.module.css';
import { Card as BCard } from 'react-bootstrap';

/**
 * image -> sets Image
 * title -> e.g. product-name
 * text  -> e.g. description
 * children -> will be rendered under description
 */
export const Card = ({ image, title, text, children }) => (
  <BCard className={styles.card} >
    <BCard.Img variant="top" src={image ? image : ''} />
    <BCard.Body>
      <BCard.Title>{title}</BCard.Title>
      <BCard.Text className={styles.cardText}>
        {text}
      </BCard.Text>
      {children ? children : ''}
    </BCard.Body>
  </BCard>
);
