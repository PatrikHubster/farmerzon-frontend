import Amount from './Amount/Amount';
import Price from './Price/Price';
import Size from './Size/Size';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Button } from 'react-bootstrap';

export const Product = (props) => (
  <Card title={props.name} text={props.description} image={props.image}>
    <div className={styles.cardFooter}>
      <div className={styles.parent}>
        <Price price={props.price} className={styles.inlineBlock} />
        <Button size="sm">Bestellen</Button>
      </div>
      <div className={styles.parent}>
        <Size size={props.size} unit={props.unit} />
        <Amount amount={props.amount} className={styles.inlineBlock} />
      </div>
    </div>
  </Card>
);

