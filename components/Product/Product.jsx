import Amount from './Amount/Amount';
import Price from './Price/Price';
import Size from './Size/Size';
import styles from './Product.module.css';
import Card from '../Card/Card';

export const Product = (props) => (
  <Card title={props.name} text={props.description}>
    <div className={styles.cardFooter}>
      <div className={styles.parent}>
        <Price price={props.price} className={styles.inlineBlock} />
        <Amount amount={props.amount} className={styles.inlineBlock} />
      </div>
      <Size size={props.size} unit={props.unit} />
    </div>
  </Card>
);

