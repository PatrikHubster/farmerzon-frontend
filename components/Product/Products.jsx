import { Product } from './Product';
import styles from './Products.module.css';

export const Products = (props) => (
  <div className={styles.products}>
    {props.articles.map(product =>
      <Product name={product.name}
        price={product.price}
        description={product.description}
        amount={product.amount}
        size={product.size}
        unit={product.unit}
        key={product.id}
      />
    )}
  </div>
);

