import { Card } from '../Card/Card';
import { styles } from './Order.module.css';

export const Order = ({ image, name, description,
  deliveryStatus, orderOrDeliveryDate }) => (
    <Card title={name} text={description} image={image}>
    </Card>
  );
