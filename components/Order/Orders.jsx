import { Order } from './Order';
import styles from './Order.module.css';

export const Orders = ({ data }) => (
  <div className={styles.order}>
    {data.map(d => <Order
      key={d.id}
      image={d.image}
      name={d.name}
      description={d.description}
      deliveryStatus={d.deliveryStatus}
      orderOrDeliveryDate={d.orderOrDeliveryDate}
    />)}
  </div>
)
