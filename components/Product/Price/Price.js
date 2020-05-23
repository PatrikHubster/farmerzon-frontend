import styles from './Price.module.css';

const Price = (props) => (
  <div>
    <b className={styles.price}>{props.price} €</b>
  </div>
)

export default Price;
