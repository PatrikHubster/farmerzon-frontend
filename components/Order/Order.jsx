import { Card } from '../Card/Card';
import { OrderBadge } from './OrderBadge';
import styles from './Order.module.css';

export const Order = ({ image, name, description,
  deliveryStatus, orderOrDeliveryDate }) => (
    <Card title={name} text={description} image={image}>
      <div className={styles.parent}>
        {deliveryStatus === 'delivered'
        ? "Erhalten am " + orderOrDeliveryDate
        : "Bestellt am " + orderOrDeliveryDate}
        <OrderBadge status={deliveryStatus} />
      </div>
    </Card>
  );
