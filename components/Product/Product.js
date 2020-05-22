import Amount from './Amount/Amount';
import Description from './Description/Description';
import Name from './Name/Name';
import Price from './Price/Price';
import Size from './Size/Size';
import styles from  './Product.module.css';

export const Product = (props) => (
  <div className="card">
    <div className={styles.container}>
      <Name name={props.name} />
      <Description description={props.description} />
      <div className={styles.cardFooter}>
        <div className={styles.parent}>
          <Price price={props.price} className={styles.inlineBlock} />
          <Amount amount={props.amount} className={styles.inlineBlock} />
        </div>
        <Size size={props.size} unit={props.unit} />
      </div>
    </div>
  </div>
);

